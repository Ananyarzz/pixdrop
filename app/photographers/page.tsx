"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PhotographerCard } from "@/components/PhotographerCard";
import { photographers } from "@/data/photographers";
import { Button } from "@/components/ui/button";

export default function PhotographersPage() {
    const [selectedGenre, setSelectedGenre] = useState<string>("All");

    const genres = ["All", "Wedding", "Portrait", "Fashion", "Product", "Events"];

    const filteredPhotographers = photographers.filter((photographer) => {
        if (selectedGenre === "All") return true;
        return photographer.genre.toLowerCase() === selectedGenre.toLowerCase();
    });

    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1 container mx-auto px-4 md:px-6 py-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">Browse Photographers</h1>
                        <p className="text-muted-foreground mt-2">Find the perfect creative for your next project.</p>
                    </div>
                    {/* Simple Filter */}
                    <div className="flex flex-wrap gap-2">
                        {genres.map((genre) => (
                            <Button
                                key={genre}
                                variant={selectedGenre === genre ? "default" : "outline"}
                                size="sm"
                                onClick={() => {
                                    setSelectedGenre(genre);
                                }}
                            >
                                {genre}
                            </Button>
                        ))}
                    </div>
                </div>

                {filteredPhotographers.length > 0 ? (
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {filteredPhotographers.map((photographer) => (
                            <PhotographerCard key={photographer.id} photographer={photographer} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <p className="text-xl opacity-70">No photographers found in this category.</p>
                        <Button variant="link" onClick={() => setSelectedGenre("All")} className="mt-4">
                            Clear Filters
                        </Button>
                    </div>
                )}
            </main>
            <Footer />
        </div>
    );
}
