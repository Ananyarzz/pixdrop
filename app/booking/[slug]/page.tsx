"use client";

import { notFound, useRouter } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { photographers } from "@/data/photographers";
import { useState } from "react";
import { ArrowLeft, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function BookingPage({ params }: { params: { slug: string } }) {
    const router = useRouter();
    const photographer = photographers.find((p) => p.slug === params.slug);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    if (!photographer) {
        notFound();
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget; // Capture immediately
        setIsSubmitting(true);

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));

        console.log("Booking requested for:", photographer.name);
        const formData = new FormData(form);
        console.log("Form data:", Object.fromEntries(formData.entries()));

        setIsSubmitting(false);
        setIsSuccess(true);
    };

    if (isSuccess) {
        return (
            <div className="flex min-h-screen flex-col">
                <Navbar />
                <main className="flex-1 flex flex-col items-center justify-center p-4">
                    <div className="max-w-md text-center space-y-4">
                        <div className="h-20 w-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                            <CheckCircle className="h-10 w-10" />
                        </div>
                        <h1 className="text-3xl font-bold">Booking Requested!</h1>
                        <p className="text-muted-foreground">
                            Your request has been sent to <span className="font-semibold text-foreground">{photographer.name}</span>.
                            They will get back to you shortly.
                        </p>
                        <Link href="/photographers">
                            <Button className="mt-4">Back to Browse</Button>
                        </Link>
                    </div>
                </main>
                <Footer />
            </div>
        )
    }

    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1 container mx-auto px-4 md:px-6 py-8">
                <Link href={`/photographers/${photographer.slug}`} className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-6">
                    <ArrowLeft className="h-4 w-4" />
                    Back to Profile
                </Link>

                <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    <div className="space-y-6">
                        <div>
                            <h1 className="text-3xl font-bold tracking-tight">Book {photographer.name}</h1>
                            <p className="text-muted-foreground mt-2">Complete the form below to request a session.</p>
                        </div>

                        <div className="flex items-center gap-4 p-4 border rounded-lg bg-muted/20">
                            <div className="h-16 w-16 rounded-full overflow-hidden shrink-0">
                                <img src={photographer.imageUrl} alt={photographer.name} className="object-cover w-full h-full" />
                            </div>
                            <div>
                                <h3 className="font-semibold">{photographer.name}</h3>
                                <p className="text-sm text-muted-foreground">{photographer.genre} • {photographer.location}</p>
                                <p className="text-sm font-medium mt-1">Starts at ₹{photographer.price.toLocaleString('en-IN')}</p>
                            </div>
                        </div>

                        <div className="text-sm text-muted-foreground space-y-4">
                            <p>
                                <strong>Note:</strong> This is a request, not a confirmed booking. The photographer will review your details and confirm availability.
                            </p>
                            <ul className="list-disc pl-4 space-y-1">
                                <li>Free cancellation up to 48 hours before the shoot.</li>
                                <li>Secure payment processing (simulated).</li>
                                <li> satisfaction guarantee.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="bg-card p-6 border rounded-xl shadow-sm">
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label htmlFor="firstName" className="text-sm font-medium">First Name</label>
                                    <input required id="firstName" name="firstName" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="Jane" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="lastName" className="text-sm font-medium">Last Name</label>
                                    <input required id="lastName" name="lastName" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="Doe" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium">Email</label>
                                <input required type="email" id="email" name="email" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="jane@example.com" />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="date" className="text-sm font-medium">Preferred Date</label>
                                <input required type="date" id="date" name="date" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="type" className="text-sm font-medium">Event Type</label>
                                <select required id="type" name="type" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                                    <option value="">Select an option</option>
                                    <option value="wedding">Wedding</option>
                                    <option value="portrait">Portrait</option>
                                    <option value="fashion">Fashion</option>
                                    <option value="product">Product</option>
                                    <option value="event">Event</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div className="space-y-3">
                                <label className="text-sm font-medium">Shot Vibe / Theme Preferences</label>
                                <div className="flex gap-3 overflow-x-auto pb-4 snap-x">
                                    {[
                                        { id: "natural", label: "Natural", color: "bg-emerald-100 text-emerald-900 border-emerald-200" },
                                        { id: "cinematic", label: "Cinematic", color: "bg-slate-900 text-slate-100 border-slate-700" },
                                        { id: "vintage", label: "Vintage", color: "bg-amber-100 text-amber-900 border-amber-200" },
                                        { id: "boho", label: "Boho", color: "bg-orange-100 text-orange-900 border-orange-200" },
                                        { id: "glam", label: "Glam", color: "bg-fuchsia-100 text-fuchsia-900 border-fuchsia-200" },
                                        { id: "classic", label: "Classic", color: "bg-gray-100 text-gray-900 border-gray-200" },
                                    ].map((theme) => (
                                        <label
                                            key={theme.id}
                                            className={`relative cursor-pointer flex-shrink-0 min-w-[100px] h-24 rounded-lg border-2 flex items-center justify-center font-medium transition-all hover:scale-105 snap-start ${theme.color} has-[:checked]:ring-2 has-[:checked]:ring-primary has-[:checked]:ring-offset-2`}
                                        >
                                            <input
                                                type="radio"
                                                name="shotTheme"
                                                value={theme.id}
                                                className="sr-only"
                                            />
                                            {theme.label}
                                        </label>
                                    ))}
                                </div>
                                <p className="text-xs text-muted-foreground">Select a specific aesthetic for your session (Scroll for more).</p>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium">Message</label>
                                <textarea required id="message" name="message" className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="Tell us about your vision..." />
                            </div>

                            <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                                {isSubmitting ? "Sending Request..." : "Request Booking"}
                            </Button>
                        </form>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
