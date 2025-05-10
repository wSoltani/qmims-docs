import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Terminal, FileText, Settings } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="py-12 md:py-24 lg:py-32 flex flex-col items-center text-center">
        <div className="container px-4 md:px-6">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
              <Badge variant="outline" className="mr-2">
                v0.0.2
              </Badge>
              AI-Powered Documentation
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">qmims Documentation</h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              AI-Powered README Generation & Editing using Amazon Q Developer CLI
            </p>
          </div>
          <div className="mx-auto mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link href="/docs/introduction">
              <Button size="lg" className="h-12 px-8">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/docs/installation">
              <Button variant="outline" size="lg" className="h-12 px-8">
                Installation Guide
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24 lg:py-32 bg-muted/50 rounded-xl">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="rounded-full bg-primary p-3 text-primary-foreground">
                <Terminal className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">AI-Powered Content</h3>
              <p className="text-muted-foreground">
                Uses Amazon Q to analyze your codebase and generate relevant README content
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="rounded-full bg-primary p-3 text-primary-foreground">
                <FileText className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">Multiple Generation Modes</h3>
              <p className="text-muted-foreground">
                Auto, Template, and Instruct modes for different documentation needs
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="rounded-full bg-primary p-3 text-primary-foreground">
                <Settings className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">Customizable</h3>
              <p className="text-muted-foreground">
                Create and manage your own README templates and customize default behaviors
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Simplify Your Documentation?
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Get started with qmims today and create clear, comprehensive, and contextually relevant documentation
                with minimal effort.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/docs/installation">
                <Button size="lg" className="h-12 px-8">
                  Install Now
                </Button>
              </Link>
              <Link href="/docs/command-reference">
                <Button variant="outline" size="lg" className="h-12 px-8">
                  Command Reference
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
