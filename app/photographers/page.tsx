import { Suspense } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import PhotographersClient from "./PhotographersClient";

export default function PhotographersPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <Suspense fallback={<div className="container mx-auto px-4 py-8">Loading...</div>}>
                <PhotographersClient />
            </Suspense>
            <Footer />
        </div>
    );
}
