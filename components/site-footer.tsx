import Link from "next/link"
import { Github } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          Built with ❤️ for developers. Licensed under the{" "}
          <Link
            href="https://opensource.org/licenses/MIT"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            MIT License
          </Link>
          .
        </p>
        <div className="flex items-center gap-4">
          <Link href="https://github.com/wSoltani/qmims" target="_blank" rel="noreferrer">
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}
