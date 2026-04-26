import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Terminal, FileText, Settings } from "lucide-react";
import Link from "next/link";
import { CommandCycle } from "@/components/command-cycle";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="flex flex-col items-center py-12 text-center md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
              <Badge variant="outline" className="mr-2">
                v0.1.0
              </Badge>
              AI-Powered Documentation
            </div>
            <h1 className="flex w-full justify-center text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              <div className="flex items-center rounded-sm border border-gray-700 bg-black px-4 py-2 shadow-md">
                <CommandCycle
                  baseCommand="qmims"
                  commands={[
                    "generate",
                    "edit",
                    "templates list",
                    "config setup",
                  ]}
                  typingSpeed={150}
                  deletingSpeed={90}
                  pauseTime={3000}
                  className="terminal-font whitespace-nowrap text-3xl sm:text-4xl md:text-5xl"
                />
              </div>
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              AI-powered README generation and editing using Kiro CLI
            </p>
            <p className="mx-auto max-w-[760px] text-sm text-muted-foreground md:text-base">
              Generate, update, and refine project documentation with
              Kiro-backed workflows, reusable templates, and embedded
              instructions directly inside your Markdown files.
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

      <section className="rounded-xl bg-muted/50 py-10 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
            <div className="flex min-h-[200px] flex-1 flex-col items-center space-y-4 px-4 text-center">
              <div className="rounded-full bg-primary p-3 text-primary-foreground">
                <Terminal className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">Kiro-Powered Content</h3>
              <p className="min-h-[60px] text-muted-foreground">
                Uses Kiro CLI to analyze your codebase and generate relevant
                README content with a non-interactive workflow.
              </p>
            </div>
            <div className="flex min-h-[200px] flex-1 flex-col items-center space-y-4 px-4 text-center">
              <div className="rounded-full bg-primary p-3 text-primary-foreground">
                <FileText className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">Multiple Generation Modes</h3>
              <p className="min-h-[60px] text-muted-foreground">
                Auto, Template, and Instruct modes give you the right balance of
                speed, structure, and control.
              </p>
            </div>
            <div className="flex min-h-[200px] flex-1 flex-col items-center space-y-4 px-4 text-center">
              <div className="rounded-full bg-primary p-3 text-primary-foreground">
                <Settings className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">Configurable Workflows</h3>
              <p className="min-h-[60px] text-muted-foreground">
                Set defaults for output files, templates, and approval behavior
                to match your documentation workflow.
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
                Start with a generated README, refine it with templates, and use
                embedded instructions to keep your docs accurate as your project
                evolves.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
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
  );
}
