
import { createClient } from '@supabase/supabase-js';

// Fallback values for production/environments without .env
const FALLBACK_URL = "https://ftscxrkvrucobkuzacvp.supabase.co";
const FALLBACK_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ0c2N4cmt2cnVjb2JrdXphY3ZwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU5MzUwMjksImV4cCI6MjA4MTUxMTAyOX0.W_o4wfB8Y6wo8k1KuU14akyCGvekhq-uS_uZ_cpzBGk";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || FALLBACK_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || FALLBACK_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Missing Supabase environment variables. Using fallback or failing gracefully.');
}

export const supabase = createClient(supabaseUrl || FALLBACK_URL, supabaseAnonKey || FALLBACK_KEY);
