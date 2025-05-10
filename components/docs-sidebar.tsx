"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { ChevronRight } from "lucide-react"

export function DocsSidebar() {
  const pathname = usePathname()

  const items = [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/docs/introduction",
          items: [],
        },
        {
          title: "Installation",
          href: "/docs/installation",
          items: [],
        },
      ],
    },
    {
      title: "Command Reference",
      items: [
        {
          title: "Generate Command",
          href: "/docs/command-reference/generate",
          items: [],
        },
        {
          title: "Edit Command",
          href: "/docs/command-reference/edit",
          items: [],
        },
        {
          title: "Config Command",
          href: "/docs/command-reference/config",
          items: [],
        },
        {
          title: "Templates Command",
          href: "/docs/command-reference/templates",
          items: [],
        },
      ],
    },
    {
      title: "Features",
      items: [
        {
          title: "Generation Modes",
          href: "/docs/generation-modes",
          items: [],
        },
        {
          title: "Working with Templates",
          href: "/docs/templates",
          items: [],
        },
        {
          title: "Embedded Instructions",
          href: "/docs/embedded-instructions",
          items: [],
        },
        {
          title: "Configuration System",
          href: "/docs/configuration",
          items: [],
        },
      ],
    },
    {
      title: "Guides",
      items: [
        {
          title: "Advanced Usage",
          href: "/docs/advanced-usage",
          items: [],
        },
        {
          title: "Troubleshooting",
          href: "/docs/troubleshooting",
          items: [],
        },
        {
          title: "Best Practices",
          href: "/docs/best-practices",
          items: [],
        },
      ],
    },
  ]

  return (
    <div className="w-full h-full pr-6">
      <div className="pb-4">
        <h4 className="mb-4 rounded-md px-2 py-1 text-sm font-bold text-primary uppercase tracking-wide">
          Documentation
        </h4>
        {items.map((item) => (
          <div key={item.title} className="pb-6">
            <h5 className="mb-3 rounded-md px-2 py-1 text-sm font-semibold text-muted-foreground/80 uppercase tracking-wide">
              {item.title}
            </h5>
            {item.items?.length > 0 && (
              <div className="grid grid-flow-row auto-rows-max text-sm pl-2 border-l border-border/50">
                {item.items.map((subItem) => {
                  const isActive = pathname === subItem.href
                  return (
                    <Link
                      key={subItem.href}
                      href={subItem.href}
                      className={cn(
                        "flex w-full items-center gap-1 rounded-md px-2 py-2 hover:bg-muted transition-colors",
                        {
                          "bg-muted font-medium text-foreground": isActive,
                          "text-muted-foreground hover:text-foreground": !isActive,
                        },
                      )}
                    >
                      {isActive && <ChevronRight className="h-3 w-3 shrink-0" />}
                      <span className={isActive ? "" : "ml-3"}>{subItem.title}</span>
                    </Link>
                  )
                })}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
