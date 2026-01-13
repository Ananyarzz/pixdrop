import Link from "next/link";
import { Star } from "lucide-react";
import { Photographer } from "@/data/photographers";

export function PhotographerCard({ photographer }: { photographer: Photographer }) {
    return (
        <Link href={`/photographers/${photographer.slug}`} className="group block overflow-hidden rounded-lg border bg-background shadow-sm transition-all hover:shadow-md">
            <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img
                    src={photographer.imageUrl}
                    alt={photographer.name}
                    className="object-cover w-full h-full transition-transform group-hover:scale-105"
                />
            </div>
            <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                        {photographer.genre}
                    </span>
                    <div className="flex items-center gap-1 text-sm text-yellow-500">
                        <Star className="h-4 w-4 fill-current" />
                        <span>{photographer.rating}</span>
                    </div>
                </div>
                <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                    {photographer.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">{photographer.location}</p>
                <div className="flex items-center justify-between border-t pt-4">
                    <div className="text-sm">
                        <span className="font-semibold">₹{photographer.price.toLocaleString('en-IN')}</span> / session
                    </div>
                    <span className="text-sm font-medium text-primary group-hover:underline">View Portfolio</span>
                </div>
            </div>
        </Link>
    );
}
