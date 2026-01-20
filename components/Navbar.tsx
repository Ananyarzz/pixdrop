"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import { User, LogOut, Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
    const { user, logout } = useAuth();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
            <div className="container flex h-16 items-center justify-between mx-auto px-4 md:px-6">
                <Link href="/" className="flex items-center gap-2">
                    <span className="text-xl font-bold tracking-tight">Pixdrop</span>
                </Link>

                {/* Desktop Navigation */}
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

                {/* Desktop Auth Buttons */}
                <div className="hidden md:flex items-center gap-4">
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

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden p-2 text-foreground"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>

            {/* Mobile Navigation Menu */}
            {isMenuOpen && (
                <div className="md:hidden border-t bg-background p-4 flex flex-col gap-4 shadow-lg absolute w-full left-0 top-16 z-40">
                    <Link
                        href="/photographers"
                        className="text-sm font-medium transition-colors hover:text-primary py-2"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Explore
                    </Link>
                    <Link
                        href="/photographers?genre=wedding"
                        className="text-sm font-medium transition-colors hover:text-primary py-2"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Wedding
                    </Link>
                    <Link
                        href="/photographers?genre=portrait"
                        className="text-sm font-medium transition-colors hover:text-primary py-2"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Portrait
                    </Link>
                    <div className="h-px bg-border my-2" />
                    {user ? (
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-2 text-sm font-medium">
                                <User className="h-4 w-4" />
                                <span>{user.name}</span>
                            </div>
                            <Link href="/profile" onClick={() => setIsMenuOpen(false)}>
                                <Button variant="ghost" size="sm" className="w-full justify-start">
                                    Profile
                                </Button>
                            </Link>
                            <Button variant="outline" size="sm" onClick={() => { logout(); setIsMenuOpen(false); }} className="w-full justify-start">
                                Log Out
                            </Button>
                        </div>
                    ) : (
                        <div className="flex flex-col gap-2">
                            <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                                <Button variant="ghost" size="sm" className="w-full justify-start">
                                    Log In
                                </Button>
                            </Link>
                            <Link href="/signup" onClick={() => setIsMenuOpen(false)}>
                                <Button size="sm" className="w-full">
                                    Sign Up
                                </Button>
                            </Link>
                        </div>
                    )}
                </div>
            )}
        </nav>
    );
}
