-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- Create a table for public profiles
create table if not exists profiles (
  id uuid references auth.users not null primary key,
  updated_at timestamp with time zone default timezone('utc'::text, now()),
  username text unique,
  full_name text,
  avatar_url text,
  role text default 'member' check (role in ('admin', 'member'))
);

-- Set up Row Level Security (RLS)
alter table profiles enable row level security;

-- Policies for profiles
create policy "Public profiles are viewable by everyone."
  on profiles for select
  using ( true );

create policy "Users can insert their own profile."
  on profiles for insert
  with check ( auth.uid() = id );

create policy "Users can update own profile."
  on profiles for update
  using ( auth.uid() = id );

-- Create a table for articles
create table if not exists articles (
  id uuid default uuid_generate_v4() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null,
  title text not null,
  slug text,
  excerpt text,
  content text,
  image_url text,
  category text,
  author_id uuid references profiles(id),
  status text default 'draft' check (status in ('draft', 'published', 'archived')),
  views integer default 0,
  tags text[]
);

-- Set up RLS for articles
alter table articles enable row level security;

-- Policies for articles
create policy "Articles are viewable by everyone."
  on articles for select
  using ( true );

create policy "Admins can insert articles."
  on articles for insert
  with check ( 
    exists ( select 1 from profiles where id = auth.uid() and role = 'admin' )
  );

create policy "Admins can update articles."
  on articles for update
  using ( 
    exists ( select 1 from profiles where id = auth.uid() and role = 'admin' )
  );

create policy "Admins can delete articles."
  on articles for delete
  using ( 
    exists ( select 1 from profiles where id = auth.uid() and role = 'admin' )
  );

-- Function to handle new user signup
create or replace function public.handle_new_user() 
returns trigger as $$
begin
  insert into public.profiles (id, full_name, avatar_url, role)
  values (new.id, new.raw_user_meta_data->>'name', new.raw_user_meta_data->>'avatar_url', coalesce((new.raw_user_meta_data->>'role')::text, 'member'));
  return new;
end;
$$ language plpgsql security definer;

-- Trigger the function every time a user is created
drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- Create a bucket for article images
insert into storage.buckets (id, name, public) values ('article-images', 'article-images', true)
on conflict (id) do nothing;

create policy "Article images are publicly accessible."
  on storage.objects for select
  using ( bucket_id = 'article-images' );

create policy "Admins can upload article images."
  on storage.objects for insert
  with check ( 
    bucket_id = 'article-images' 
    and exists ( select 1 from profiles where id = auth.uid() and role = 'admin' )
  );
