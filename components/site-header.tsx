"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { CommandMenu } from "@/components/command-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { theme, resolvedTheme } = useTheme();
  const [logoSrc, setLogoSrc] = useState("/qmims-cli-logo.svg");

  useEffect(() => {
    // Set the appropriate logo based on the theme
    setLogoSrc(
      resolvedTheme === "dark"
        ? "/qmims-cli-logo-dark.svg"
        : "/qmims-cli-logo.svg"
    );
  }, [resolvedTheme]);

  const routes = [
    {
      href: "/",
      label: "Home",
      active: pathname === "/",
    },
    {
      href: "/docs/introduction",
      label: "Documentation",
      active: pathname.startsWith("/docs"),
    },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex items-center">
          <Link href="/" className="mr-6 flex items-center">
            <div className="relative h-8 w-24">
              <Image
                src={logoSrc}
                alt="QMIMS CLI Tool"
                width={100}
                height={40}
                className="object-contain"
                priority
              />
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  route.active ? "text-foreground" : "text-foreground/60"
                )}
              >
                {route.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <CommandMenu />
          <nav className="flex items-center space-x-2">
            <ThemeToggle />
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="grid gap-6 py-6">
                  <div className="grid gap-3">
                    {routes.map((route) => (
                      <Link
                        key={route.href}
                        href={route.href}
                        className={cn(
                          "text-sm font-medium transition-colors hover:text-primary",
                          route.active
                            ? "text-foreground"
                            : "text-foreground/60"
                        )}
                        onClick={() => setOpen(false)}
                      >
                        {route.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </nav>
        </div>
      </div>
    </header>
  );
}
