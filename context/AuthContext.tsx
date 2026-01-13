"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export type User = {
    name: string;
    email: string;
    bio?: string;
};

type AuthContextType = {
    user: User | null;
    login: (user: User) => void;
    logout: () => void;
    updateProfile: (updatedUser: Partial<User>) => void;
    isAuthenticated: boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const router = useRouter();

    // Load user from localStorage on mount
    useEffect(() => {
        const storedUser = localStorage.getItem("pixdrop_user");
        if (storedUser) {
            try {
                setUser(JSON.parse(storedUser));
            } catch (e) {
                console.error("Failed to parse user from local storage");
            }
        }
    }, []);

    const login = (userData: User) => {
        setUser(userData);
        localStorage.setItem("pixdrop_user", JSON.stringify(userData));
        router.push("/");
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("pixdrop_user");
        router.push("/login");
    };

    const updateProfile = (updatedUser: Partial<User>) => {
        setUser((prev) => {
            if (!prev) return null;
            const newUser = { ...prev, ...updatedUser };
            localStorage.setItem("pixdrop_user", JSON.stringify(newUser));
            return newUser;
        });
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                login,
                logout,
                updateProfile,
                isAuthenticated: !!user,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}
