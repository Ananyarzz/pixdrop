import { notFound } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { photographers } from "@/data/photographers";
import Link from "next/link";
import { MapPin, Star, Share2, ArrowLeft } from "lucide-react";

export function generateStaticParams() {
    return photographers.map((photographer) => ({
        slug: photographer.slug,
    }));
}

export default async function PhotographerPortfolio({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const photographer = photographers.find((p) => p.slug === slug);

    if (!photographer) {
        notFound();
    }

    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1 pb-12">
                {/* Header / Cover */}
                <div className="bg-muted/30 pb-8 pt-6 border-b">
                    <div className="container mx-auto px-4 md:px-6">
                        <Link href="/photographers" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-6">
                            <ArrowLeft className="h-4 w-4" />
                            Back to browse
                        </Link>
                        <div className="flex flex-col md:flex-row gap-8 items-start">
                            <div className="h-32 w-32 md:h-40 md:w-40 rounded-full overflow-hidden border-4 border-background shrink-0 shadow-lg">
                                <img
                                    src={photographer.imageUrl}
                                    alt={photographer.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="flex-1 space-y-4">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                    <div>
                                        <h1 className="text-3xl font-bold tracking-tight">{photographer.name}</h1>
                                        <p className="text-primary font-medium mt-1">{photographer.genre} Photographer</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Button variant="outline" size="icon">
                                            <Share2 className="h-4 w-4" />
                                        </Button>
                                        <Link href={`/booking/${photographer.slug}`}>
                                            <Button size="lg">Book Now</Button>
                                        </Link>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                                    <div className="flex items-center gap-1">
                                        <MapPin className="h-4 w-4" />
                                        {photographer.location}
                                    </div>
                                    <div className="flex items-center gap-1 text-yellow-500 font-medium">
                                        <Star className="h-4 w-4 fill-current" />
                                        {photographer.rating} (120 reviews)
                                    </div>
                                </div>

                                <div className="max-w-2xl text-base text-muted-foreground leading-relaxed">
                                    {photographer.bio}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Portfolio Grid */}
                <div className="container mx-auto px-4 md:px-6 py-12">
                    <h2 className="text-2xl font-bold mb-6">Portfolio</h2>
                    <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
                        {photographer.portfolio.map((image, index) => (
                            <div key={index} className="break-inside-avoid overflow-hidden rounded-lg bg-muted">
                                <img
                                    src={image}
                                    alt={`Portfolio item ${index + 1}`}
                                    className="w-full h-auto hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Pricing / Packages Placeholder */}
                <div className="container mx-auto px-4 md:px-6 py-8 border-t">
                    <h2 className="text-2xl font-bold mb-6">Packages</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="border rounded-lg p-6 bg-card text-card-foreground shadow-sm">
                            <h3 className="font-semibold text-lg">Starter Session</h3>
                            <p className="text-3xl font-bold mt-2">₹{photographer.price.toLocaleString('en-IN')}</p>
                            <p className="text-sm text-muted-foreground mt-1">Ideal for quick updates</p>
                            <ul className="mt-4 space-y-2 text-sm text-muted-foreground list-disc pl-4">
                                <li>1 Hour Session</li>
                                <li>10 Edited Photos</li>
                                <li>Online Gallery</li>
                            </ul>
                        </div>
                        <div className="border rounded-lg p-6 bg-primary text-primary-foreground shadow-md relative overflow-hidden">
                            <div className="absolute top-0 right-0 bg-white text-black text-xs font-bold px-3 py-1 rounded-bl">POPULAR</div>
                            <h3 className="font-semibold text-lg">Standard Session</h3>
                            <p className="text-3xl font-bold mt-2">₹{(photographer.price * 1.5).toLocaleString('en-IN')}</p>
                            <p className="text-sm text-primary-foreground/80 mt-1">Most loved option</p>
                            <ul className="mt-4 space-y-2 text-sm text-primary-foreground/90 list-disc pl-4">
                                <li>2 Hour Session</li>
                                <li>30 Edited Photos</li>
                                <li>Online Gallery</li>
                                <li>1 Print</li>
                            </ul>
                        </div>
                        <div className="border rounded-lg p-6 bg-card text-card-foreground shadow-sm">
                            <h3 className="font-semibold text-lg">Premium Session</h3>
                            <p className="text-3xl font-bold mt-2">₹{(photographer.price * 2.5).toLocaleString('en-IN')}</p>
                            <p className="text-sm text-muted-foreground mt-1">Full coverage experience</p>
                            <ul className="mt-4 space-y-2 text-sm text-muted-foreground list-disc pl-4">
                                <li>4 Hour Session</li>
                                <li>All Edited Photos</li>
                                <li>Online Gallery</li>
                                <li>Photo Album</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
