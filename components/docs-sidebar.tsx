"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

type NavItem = {
  title: string;
  href: string;
  description?: string;
};

type NavSection = {
  title: string;
  items: NavItem[];
};

const sections: NavSection[] = [
  {
    title: "Getting Started",
    items: [
      {
        title: "Introduction",
        href: "/docs/introduction",
        description: "What qmims is and how it works with Kiro CLI.",
      },
      {
        title: "Installation",
        href: "/docs/installation",
        description: "Set up qmims, Kiro CLI, and authentication.",
      },
    ],
  },
  {
    title: "Core Workflows",
    items: [
      {
        title: "Generation Modes",
        href: "/docs/generation-modes",
        description: "Auto, Template, and Instruct workflows.",
      },
      {
        title: "Embedded Instructions",
        href: "/docs/embedded-instructions",
        description: "Guide targeted README updates with qmims comments.",
      },
      {
        title: "Working with Templates",
        href: "/docs/templates",
        description: "Use built-in and custom templates for structure.",
      },
      {
        title: "Configuration System",
        href: "/docs/configuration",
        description: "Set defaults for output, templates, and approvals.",
      },
    ],
  },
  {
    title: "Command Reference",
    items: [
      {
        title: "Command Overview",
        href: "/docs/command-reference",
        description: "Overview of the main qmims commands.",
      },
      {
        title: "Generate Command",
        href: "/docs/command-reference/generate",
        description: "Create new README files with Kiro-backed generation.",
      },
      {
        title: "Edit Command",
        href: "/docs/command-reference/edit",
        description:
          "Update existing Markdown files with embedded instructions.",
      },
      {
        title: "Config Command",
        href: "/docs/command-reference/config",
        description: "Manage qmims configuration values.",
      },
      {
        title: "Templates Command",
        href: "/docs/command-reference/templates",
        description: "List, add, inspect, and remove templates.",
      },
    ],
  },
  {
    title: "Guides",
    items: [
      {
        title: "Advanced Usage",
        href: "/docs/advanced-usage",
        description:
          "Automation, dry runs, approval flows, and power-user patterns.",
      },
      {
        title: "Best Practices",
        href: "/docs/best-practices",
        description: "Practical guidance for better README workflows.",
      },
      {
        title: "Troubleshooting",
        href: "/docs/troubleshooting",
        description: "Solve common Kiro, qmims, and file workflow issues.",
      },
    ],
  },
];

function isItemActive(pathname: string, href: string) {
  if (href === "/docs/command-reference") {
    return pathname === href;
  }

  return pathname === href;
}

function isSectionActive(pathname: string, items: NavItem[]) {
  return items.some((item) => pathname === item.href);
}

export function DocsSidebar() {
  const pathname = usePathname();

  return (
    <div className="h-full w-full pr-6">
      <div className="pb-6">
        <div className="mb-6 rounded-lg border bg-muted/30 px-3 py-3">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Documentation
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Kiro-based README generation, editing, templates, and configuration.
          </p>
        </div>

        <nav className="space-y-6" aria-label="Documentation navigation">
          {sections.map((section) => {
            const sectionActive = isSectionActive(pathname, section.items);

            return (
              <div key={section.title}>
                <div className="mb-3 flex items-center gap-2 px-2">
                  <h2
                    className={cn(
                      "text-xs font-semibold uppercase tracking-[0.2em]",
                      sectionActive
                        ? "text-foreground"
                        : "text-muted-foreground",
                    )}
                  >
                    {section.title}
                  </h2>
                </div>

                <div className="space-y-1 border-l border-border/60 pl-2">
                  {section.items.map((item) => {
                    const active = isItemActive(pathname, item.href);

                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                          "group block rounded-md px-3 py-2 transition-colors",
                          active
                            ? "bg-muted text-foreground"
                            : "text-muted-foreground hover:bg-muted/60 hover:text-foreground",
                        )}
                      >
                        <div className="flex items-start gap-2">
                          <span className="mt-0.5 shrink-0">
                            <ChevronRight
                              className={cn(
                                "h-4 w-4 transition-transform",
                                active
                                  ? "text-primary"
                                  : "text-muted-foreground/50 group-hover:translate-x-0.5 group-hover:text-foreground/70",
                              )}
                            />
                          </span>

                          <div className="min-w-0">
                            <div
                              className={cn(
                                "text-sm font-medium leading-5",
                                active ? "text-foreground" : "text-current",
                              )}
                            >
                              {item.title}
                            </div>

                            {item.description ? (
                              <p
                                className={cn(
                                  "mt-0.5 text-xs leading-5",
                                  active
                                    ? "text-muted-foreground"
                                    : "text-muted-foreground/90 group-hover:text-muted-foreground",
                                )}
                              >
                                {item.description}
                              </p>
                            ) : null}
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
