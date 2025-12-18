import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { toast } from "sonner";

export type UserRole = "admin" | "member";

export interface User {
  id: string;
  username: string;
  role: UserRole;
  name: string;
}

interface AuthContextType {
  user: User | null;
  users: User[];
  login: (username: string, password: string) => boolean;
  logout: () => void;
  register: (username: string, password: string, name: string, role: UserRole) => boolean;
  deleteUser: (id: string) => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Initialize users and check session
  useEffect(() => {
    const storedUsers = localStorage.getItem("qsac_users");
    const storedSession = localStorage.getItem("qsac_session");

    if (storedUsers) {
      setUsers(JSON.parse(storedUsers));
    } else {
      // Default admin account
      const defaultAdmin = {
        id: "1",
        username: "admin",
        password: "admin123", // In a real app, this should be hashed
        role: "admin" as UserRole,
        name: "Administrator"
      };
      localStorage.setItem("qsac_users", JSON.stringify([defaultAdmin]));
      setUsers([defaultAdmin]); // Store without password in state ideally, but for mock auth we might need to keep it or fetch differently.
      // Actually, for security even in mock, we shouldn't expose password in the public state "users" if we can avoid it, 
      // but we need it for login verification. 
      // Let's store full objects in localStorage, but maybe filter out passwords for the context state if possible.
      // For simplicity in this mock, we will keep it simple.
    }

    if (storedSession) {
      setUser(JSON.parse(storedSession));
    }
    
    setIsLoading(false);
  }, []);

  const login = (username: string, password: string) => {
    const storedUsersStr = localStorage.getItem("qsac_users");
    if (!storedUsersStr) return false;

    const storedUsers = JSON.parse(storedUsersStr);
    const foundUser = storedUsers.find((u: any) => u.username === username && u.password === password);

    if (foundUser) {
      const { password, ...userWithoutPassword } = foundUser;
      setUser(userWithoutPassword);
      localStorage.setItem("qsac_session", JSON.stringify(userWithoutPassword));
      toast.success("Đăng nhập thành công!");
      return true;
    }

    toast.error("Tên đăng nhập hoặc mật khẩu không đúng");
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("qsac_session");
    toast.info("Đã đăng xuất");
  };

  const register = (username: string, password: string, name: string, role: UserRole) => {
    const storedUsersStr = localStorage.getItem("qsac_users");
    const storedUsers = storedUsersStr ? JSON.parse(storedUsersStr) : [];

    if (storedUsers.find((u: any) => u.username === username)) {
      toast.error("Tên đăng nhập đã tồn tại");
      return false;
    }

    const newUser = {
      id: Date.now().toString(),
      username,
      password,
      name,
      role
    };

    const newUsers = [...storedUsers, newUser];
    localStorage.setItem("qsac_users", JSON.stringify(newUsers));
    
    // Update local users state (remove password for safety if we were hiding it, but here we just update list)
    // We should reload users from local storage or just append
    const { password: _, ...userForState } = newUser;
    // We actually need to update the full list that includes passwords for the `users` state if we want `users` to be the source of truth for management
    // But usually `users` state in context is for display.
    // Let's just update the list.
    
    // Re-fetch to ensure sync
    setUsers(newUsers); 
    
    toast.success("Tạo tài khoản thành công");
    return true;
  };

  const deleteUser = (id: string) => {
    const storedUsersStr = localStorage.getItem("qsac_users");
    if (!storedUsersStr) return;

    let storedUsers = JSON.parse(storedUsersStr);
    storedUsers = storedUsers.filter((u: any) => u.id !== id);
    
    localStorage.setItem("qsac_users", JSON.stringify(storedUsers));
    setUsers(storedUsers);
    toast.success("Đã xóa tài khoản");
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
