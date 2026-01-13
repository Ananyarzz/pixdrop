"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { User, Mail, FileText, Save, X } from "lucide-react";

export default function ProfilePage() {
    const { user, isAuthenticated, updateProfile } = useAuth();
    const router = useRouter();
    const [isEditing, setIsEditing] = useState(false);

    // Form state
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [bio, setBio] = useState("");

    useEffect(() => {
        if (!isAuthenticated) {
            router.push("/login");
        } else if (user) {
            setName(user.name);
            setEmail(user.email);
            setBio(user.bio || "");
        }
    }, [isAuthenticated, user, router]);

    if (!user) {
        return null; // Or a loading spinner
    }

    const handleSave = (e: React.FormEvent) => {
        e.preventDefault();
        updateProfile({ name, email, bio });
        setIsEditing(false);
    };

    const handleCancel = () => {
        setName(user.name);
        setEmail(user.email);
        setBio(user.bio || "");
        setIsEditing(false);
    };

    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1 container mx-auto px-4 py-12 md:px-6">
                <div className="max-w-3xl mx-auto">
                    <div className="flex items-center justify-between mb-8">
                        <h1 className="text-3xl font-bold">My Profile</h1>
                        {!isEditing && (
                            <Button onClick={() => setIsEditing(true)}>Edit Profile</Button>
                        )}
                    </div>

                    <div className="bg-card border rounded-xl shadow-sm overflow-hidden">
                        <div className="h-32 bg-gradient-to-r from-primary/20 to-primary/5"></div>
                        <div className="px-8 pb-8">
                            <div className="relative flex justify-between items-end -mt-12 mb-6">
                                <div className="h-24 w-24 rounded-full bg-background p-1 ring-4 ring-background">
                                    <div className="h-full w-full rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                        <User className="h-10 w-10" />
                                    </div>
                                </div>
                            </div>

                            {isEditing ? (
                                <form onSubmit={handleSave} className="space-y-6">
                                    <div className="space-y-4">
                                        <div className="grid gap-2">
                                            <label htmlFor="name" className="text-sm font-medium">Full Name</label>
                                            <input
                                                id="name"
                                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                            />
                                        </div>
                                        <div className="grid gap-2">
                                            <label htmlFor="email" className="text-sm font-medium">Email</label>
                                            <input
                                                id="email"
                                                type="email"
                                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </div>
                                        <div className="grid gap-2">
                                            <label htmlFor="bio" className="text-sm font-medium">Bio</label>
                                            <textarea
                                                id="bio"
                                                className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                                value={bio}
                                                onChange={(e) => setBio(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <Button type="submit" className="gap-2">
                                            <Save className="h-4 w-4" /> Save Changes
                                        </Button>
                                        <Button type="button" variant="outline" onClick={handleCancel} className="gap-2">
                                            <X className="h-4 w-4" /> Cancel
                                        </Button>
                                    </div>
                                </form>
                            ) : (
                                <div className="space-y-6">
                                    <div>
                                        <h2 className="text-2xl font-bold">{user.name}</h2>
                                        <p className="text-muted-foreground flex items-center gap-2 mt-1">
                                            <Mail className="h-4 w-4" /> {user.email}
                                        </p>
                                    </div>
                                    <div className="pt-4 border-t">
                                        <h3 className="font-semibold mb-2 flex items-center gap-2">
                                            <FileText className="h-4 w-4" /> Bio
                                        </h3>
                                        <p className="text-muted-foreground">
                                            {user.bio || "No bio added yet."}
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
