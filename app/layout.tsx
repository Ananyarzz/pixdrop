import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/app/utils/cn";
import { AuthProvider } from "@/context/AuthContext";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
    title: "Pixdrop — Your moments, on demand.",
    description: "Discover photographers. Explore portfolios. Book instantly.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={cn(inter.variable, "min-h-screen bg-background font-sans antialiased text-foreground")}>
                <AuthProvider>
                    {children}
                </AuthProvider>
            </body>
        </html>
    );
}
