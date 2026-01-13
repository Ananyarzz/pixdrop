"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import { User, LogOut } from "lucide-react";

export function Navbar() {
    const { user, logout } = useAuth();

    return (
        <nav className="w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
            <div className="container flex h-16 items-center justify-between mx-auto px-4 md:px-6">
                <Link href="/" className="flex items-center gap-2">
                    <span className="text-xl font-bold tracking-tight">Pixdrop</span>
                </Link>
                <div className="hidden md:flex items-center gap-6 text-sm font-medium">
                    <Link href="/photographers" className="transition-colors hover:text-primary">
                        Explore
                    </Link>
                    <Link href="/photographers?genre=wedding" className="transition-colors hover:text-primary">
                        Wedding
                    </Link>
                    <Link href="/photographers?genre=portrait" className="transition-colors hover:text-primary">
                        Portrait
                    </Link>
                </div>
                <div className="flex items-center gap-4">
                    {user ? (
                        <div className="flex items-center gap-4">
                            <span className="text-sm font-medium hidden sm:inline-block">
                                Hello, {user.name.split(" ")[0]}
                            </span>
                            <Link href="/profile">
                                <Button variant="ghost" size="sm" className="gap-2">
                                    <User className="h-4 w-4" />
                                    Profile
                                </Button>
                            </Link>
                            <Button variant="outline" size="sm" onClick={logout} className="gap-2">
                                <LogOut className="h-4 w-4" />
                                Log Out
                            </Button>
                        </div>
                    ) : (
                        <>
                            <Link href="/login">
                                <Button variant="ghost" size="sm">
                                    Log In
                                </Button>
                            </Link>
                            <Link href="/signup">
                                <Button size="sm">
                                    Sign Up
                                </Button>
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
}
