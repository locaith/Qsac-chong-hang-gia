import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { toast } from "sonner";
import { supabase } from "@/lib/supabase";

export type UserRole = "admin" | "member";

export interface User {
  id: string;
  username: string; // Using email as username for display
  role: UserRole;
  name: string;
  email?: string;
}

interface AuthContextType {
  user: User | null;
  users: User[];
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => Promise<void>;
  register: (email: string, password: string, name: string, role: UserRole) => Promise<boolean>;
  deleteUser: (id: string) => Promise<void>;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Initialize session and listeners
  useEffect(() => {
    const initializeAuth = async () => {
      setIsLoading(true);
      
      // Get current session
      const { data: { session } } = await supabase.auth.getSession();
      
      if (session?.user) {
        await fetchUserProfile(session.user.id);
      } else {
        setUser(null);
      }

      // Listen for auth changes
      const { data: { subscription } } = supabase.auth.onAuthStateChange(async (_event, session) => {
        if (session?.user) {
          await fetchUserProfile(session.user.id);
        } else {
          setUser(null);
        }
        setIsLoading(false);
      });

      // Fetch all public profiles
      fetchProfiles();

      setIsLoading(false);
      return () => subscription.unsubscribe();
    };

    initializeAuth();
  }, []);

  const fetchUserProfile = async (userId: string) => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single();
      
      if (data) {
        setUser({
          id: data.id,
          username: data.username || data.email || "", 
          role: (data.role as UserRole) || 'member',
          name: data.full_name || "User",
          email: data.email
        });
      }
    } catch (error) {
      console.error("Error fetching profile:", error);
    }
  };

  const fetchProfiles = async () => {
    try {
        const { data, error } = await supabase.from('profiles').select('*');
        if (data) {
            setUsers(data.map(p => ({
                id: p.id,
                username: p.username || p.email || "",
                role: (p.role as UserRole) || 'member',
                name: p.full_name || "",
                email: p.email
            })));
        }
    } catch (e) {
        console.error("Error fetching profiles", e);
    }
  };

  const login = async (email: string, password: string) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        toast.error(error.message || "Đăng nhập thất bại");
        return false;
      }

      if (data.user) {
         await fetchUserProfile(data.user.id);
         toast.success("Đăng nhập thành công!");
         return true;
      }
      return false;
    } catch (error) {
      toast.error("Đã xảy ra lỗi khi đăng nhập");
      return false;
    }
  };

  const logout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    toast.info("Đã đăng xuất");
  };

  const register = async (email: string, password: string, name: string, role: UserRole) => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            name: name, // Maps to full_name in our trigger logic
            role: role,
          },
        },
      });

      if (error) {
        toast.error(error.message);
        return false;
      }

      toast.success("Tạo tài khoản thành công! (Vui lòng kiểm tra email nếu yêu cầu xác thực)");
      fetchProfiles();
      return true;
    } catch (error) {
      toast.error("Lỗi tạo tài khoản");
      return false;
    }
  };

  const deleteUser = async (id: string) => {
     // Note: Deleting users requires Service Role in Supabase
     toast.error("Chức năng xóa tài khoản yêu cầu quyền quản trị cấp cao (Supabase Dashboard).");
  };

  return (
    <AuthContext.Provider value={{ user, users, login, logout, register, deleteUser, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
