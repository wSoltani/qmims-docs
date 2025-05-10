"use client"

import React, { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Copy } from "lucide-react"
import { cn } from "@/lib/utils"

interface CodeBlockProps {
  code: string
  language?: string
  className?: string
  showLineNumbers?: boolean
}

export function CodeBlock({ code, language = "bash", className, showLineNumbers = true }: CodeBlockProps) {
  const codeRef = useRef<HTMLPreElement>(null)
  const [copied, setCopied] = React.useState(false)

  const copyToClipboard = async () => {
    if (!codeRef.current) return

    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy code: ", err)
    }
  }

  return (
    <div className="relative group rounded-md overflow-hidden">
      <pre
        ref={codeRef}
        className={cn(
          "bg-muted p-4 rounded-md overflow-x-auto text-sm font-mono",
          showLineNumbers && "pl-12 relative",
          className,
        )}
      >
        {showLineNumbers && (
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-muted/50 flex flex-col items-end pr-2 text-muted-foreground/60 select-none">
            {code.split("\n").map((_, i) => (
              <div key={i} className="leading-relaxed">
                {i + 1}
              </div>
            ))}
          </div>
        )}
        <code className={language}>{code}</code>
      </pre>
      <Button
        size="sm"
        variant="ghost"
        className="absolute right-2 top-2 h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
        onClick={copyToClipboard}
        aria-label="Copy code"
      >
        <Copy className="h-4 w-4" />
        <span className="sr-only">Copy</span>
      </Button>
      {copied && (
        <div className="absolute right-2 top-2 bg-background/90 text-foreground px-2 py-1 rounded text-xs">Copied!</div>
      )}
    </div>
  )
}
