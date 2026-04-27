"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { Menu } from "lucide-react";
import { useTheme } from "next-themes";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { CommandMenu } from "@/components/command-menu";
import { ThemeToggle } from "@/components/theme-toggle";

export function SiteHeader() {
  const pathname = usePathname();
  const { resolvedTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [logoSrc, setLogoSrc] = useState("/qmims-cli-logo.svg");

  useEffect(() => {
    setLogoSrc(
      resolvedTheme === "dark"
        ? "/qmims-cli-logo-dark.svg"
        : "/qmims-cli-logo.svg",
    );
  }, [resolvedTheme]);

  const routes = useMemo(
    () => [
      {
        href: "/",
        label: "Home",
        description: "Overview and quick start",
        active: pathname === "/",
      },
      {
        href: "/docs/introduction",
        label: "Documentation",
        description: "Guides, commands, and workflows",
        active: pathname.startsWith("/docs"),
      },
      {
        href: "/docs/installation",
        label: "Install",
        description: "Set up qmims with Kiro CLI",
        active: pathname === "/docs/installation",
      },
    ],
    [pathname],
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="container flex h-16 items-center gap-4">
        <div className="flex min-w-0 items-center gap-6">
          <Link
            href="/"
            className="flex items-center gap-3 rounded-md outline-none transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            aria-label="Go to qmims homepage"
          >
            <div className="relative h-8 w-24 shrink-0">
              <Image
                src={logoSrc}
                alt="qmims"
                width={100}
                height={40}
                className="object-contain"
                priority
              />
            </div>
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-foreground",
                  route.active ? "text-foreground" : "text-foreground/60",
                )}
              >
                {route.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="ml-auto flex items-center gap-2">
          <CommandMenu />
          <ThemeToggle />

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open navigation menu</span>
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-[320px]">
              <div className="grid gap-6 py-6">
                <div className="space-y-1">
                  <p className="text-sm font-semibold">qmims Documentation</p>
                  <p className="text-sm text-muted-foreground">
                    Guides and reference for README generation with Kiro CLI.
                  </p>
                </div>

                <nav className="grid gap-2">
                  {routes.map((route) => (
                    <Link
                      key={route.href}
                      href={route.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "rounded-md border px-4 py-3 transition-colors hover:bg-muted",
                        route.active
                          ? "border-primary/30 bg-muted"
                          : "border-transparent",
                      )}
                    >
                      <div className="text-sm font-medium">{route.label}</div>
                      <div className="mt-1 text-xs text-muted-foreground">
                        {route.description}
                      </div>
                    </Link>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
