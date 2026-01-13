export function Footer() {
    return (
        <footer className="w-full border-t bg-background py-6 md:py-0">
            <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row mx-auto px-4 md:px-6">
                <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
                    © 2026 Pixdrop Inc. All rights reserved.
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <a href="#" className="hover:underline">Terms</a>
                    <a href="#" className="hover:underline">Privacy</a>
                </div>
            </div>
        </footer>
    );
}
