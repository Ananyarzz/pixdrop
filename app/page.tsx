import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { photographers } from "@/data/photographers";
import { ArrowRight, Camera, Search, Star, Calendar } from "lucide-react";

export default function Home() {


    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">
                {/* Hero Section */}
                <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-muted/40">
                    <div className="container px-4 md:px-6 mx-auto">
                        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2 items-center">
                            <div className="flex flex-col justify-center space-y-4">
                                <div className="space-y-2">
                                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                                        Your moments, <br />
                                        <span className="text-primary">on demand.</span>
                                    </h1>
                                    <p className="max-w-[600px] text-muted-foreground md:text-xl">
                                        India's premier marketplace for creative professionals. From grand weddings to intimate portraits, find the perfect lens for your story.
                                    </p>
                                </div>
                                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                    <Link href="/photographers">
                                        <Button size="lg" className="px-8 bg-primary hover:bg-primary/90 text-white">Find Photographers</Button>
                                    </Link>
                                    <Button variant="outline" size="lg">
                                        How it Works
                                    </Button>
                                </div>
                            </div>
                            <div className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last bg-neutral-100 relative shadow-2xl">
                                {/* Hero Image Placement */}
                                <img
                                    src="https://images.unsplash.com/photo-1727528605123-142157a2c30c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGd1eSUyMHdpdGglMjBhJTIwY2FtZXJhJTIwZGFya3xlbnwwfHwwfHx8MA%3D%3D"
                                    alt="Indian Wedding Photographer"
                                    className="object-cover w-full h-full"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Categories Section */}
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6 mx-auto">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Explore Genres</h2>
                                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Discover talented professionals for every need and occasion.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                            {[
                                { name: "Wedding", image: "https://images.unsplash.com/photo-1736155983506-c6e9da195f43?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG9wZW4lMjBzcGFjZSUyMGluZGlhbiUyMHdlZGRpbmclMjB2ZW51ZXxlbnwwfHwwfHx8MA%3D%3D" },
                                { name: "Portrait", image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=800" },
                                { name: "Fashion", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop" },
                                { name: "Product", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800" },
                                { name: "Events", image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800" },
                            ].map((category) => (
                                <Link
                                    key={category.name}
                                    href={`/photographers?genre=${category.name.toLowerCase()}`}
                                    className="group relative overflow-hidden rounded-lg aspect-[4/5] bg-muted transition-all hover:shadow-lg"
                                >
                                    <img
                                        src={category.image}
                                        alt={category.name}
                                        className="object-cover w-full h-full transition-transform group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                                    <div className="absolute bottom-4 left-4 text-white font-medium text-lg">
                                        {category.name}
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Featured Photographers */}
                <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/20">
                    <div className="container px-4 md:px-6 mx-auto">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Featured Artists</h2>
                                <p className="max-w-[600px] text-muted-foreground md:text-lg">
                                    Top-rated wedding photographers across India.
                                </p>
                            </div>
                        </div>
                        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                            {photographers.slice(0, 3).map((photographer) => (
                                <Link key={photographer.id} href={`/photographers/${photographer.slug}`} className="group block overflow-hidden rounded-lg border bg-background shadow-sm transition-all hover:shadow-md">
                                    <div className="aspect-[4/3] overflow-hidden bg-muted">
                                        <img
                                            src={photographer.imageUrl}
                                            alt={photographer.name}
                                            className="object-cover w-full h-full transition-transform group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="p-4">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-sm font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full">{photographer.genre}</span>
                                            <div className="flex items-center gap-1 text-sm text-yellow-500">
                                                <Star className="h-4 w-4 fill-current" />
                                                <span>{photographer.rating}</span>
                                            </div>
                                        </div>
                                        <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">{photographer.name}</h3>
                                        <p className="text-sm text-muted-foreground mb-4">{photographer.location}</p>
                                        <div className="flex items-center justify-between border-t pt-4">
                                            <div className="text-sm">
                                                <span className="font-semibold">₹{photographer.price.toLocaleString('en-IN')}</span> / day
                                            </div>
                                            <span className="text-sm font-medium text-primary group-hover:underline">View Portfolio</span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                        <div className="mt-12 text-center">
                            <Link href="/photographers">
                                <Button variant="outline" size="lg">View All Photographers</Button>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* How it Works */}
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6 mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">How Pixdrop Works</h2>
                        </div>
                        <div className="grid gap-8 md:grid-cols-3">
                            <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-lg bg-muted/20">
                                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                    <Search className="h-8 w-8" />
                                </div>
                                <h3 className="text-xl font-bold">1. Discover</h3>
                                <p className="text-muted-foreground">Browse portfolios of top Indian wedding photographers.</p>
                            </div>
                            <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-lg bg-muted/20">
                                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                    <Calendar className="h-8 w-8" />
                                </div>
                                <h3 className="text-xl font-bold">2. Shortlist</h3>
                                <p className="text-muted-foreground">Check availability and packages for your dates.</p>
                            </div>
                            <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-lg bg-muted/20">
                                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                    <Camera className="h-8 w-8" />
                                </div>
                                <h3 className="text-xl font-bold">3. Book</h3>
                                <p className="text-muted-foreground">Secure your photographer and cherish your memories forever.</p>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
}
