"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import type { DialogProps } from "@radix-ui/react-dialog"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"

export function CommandMenu({ ...props }: DialogProps) {
  const router = useRouter()
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const runCommand = React.useCallback((command: () => unknown) => {
    setOpen(false)
    command()
  }, [])

  return (
    <>
      <Button
        variant="outline"
        className="relative h-9 w-9 p-0 xl:h-10 xl:w-60 xl:justify-start xl:px-3 xl:py-2"
        onClick={() => setOpen(true)}
        {...props}
      >
        <Search className="h-4 w-4 xl:mr-2" aria-hidden="true" />
        <span className="hidden xl:inline-flex">Search documentation...</span>
        <span className="sr-only">Search documentation</span>
        <kbd className="pointer-events-none absolute right-1.5 top-2 hidden h-6 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 xl:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Links">
            <CommandItem onSelect={() => runCommand(() => router.push("/"))}>Home</CommandItem>
            <CommandItem onSelect={() => runCommand(() => router.push("/docs/introduction"))}>Introduction</CommandItem>
            <CommandItem onSelect={() => runCommand(() => router.push("/docs/installation"))}>Installation</CommandItem>
            <CommandItem onSelect={() => runCommand(() => router.push("/docs/command-reference"))}>
              Command Reference
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => router.push("/docs/generation-modes"))}>
              Generation Modes
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => router.push("/docs/templates"))}>
              Working with Templates
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => router.push("/docs/embedded-instructions"))}>
              Embedded Instructions
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => router.push("/docs/configuration"))}>
              Configuration System
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => router.push("/docs/advanced-usage"))}>
              Advanced Usage
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => router.push("/docs/troubleshooting"))}>
              Troubleshooting
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => router.push("/docs/best-practices"))}>
              Best Practices
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}
