import type React from "react";
import Link from "next/link";
import { Info, ArrowRight } from "lucide-react";
import { DocsSidebar } from "@/components/docs-sidebar";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container flex-1 items-start md:grid md:grid-cols-[240px_minmax(0,1fr)] md:gap-8 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-10">
      <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 border-r md:sticky md:block">
        <div className="h-full overflow-y-auto scrollbar-edge">
          <div className="px-4 py-8 pr-0">
            <DocsSidebar />
          </div>
        </div>
      </aside>

      <main className="relative py-6 lg:gap-10 lg:py-8">
        <div className="mx-auto mb-6 w-full min-w-0">
          <div className="rounded-lg border bg-muted/40 p-4">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex gap-3">
                <div className="mt-0.5 rounded-full border bg-background p-2 text-primary">
                  <Info className="h-4 w-4" />
                </div>

                <div className="space-y-1">
                  <p className="text-sm font-semibold tracking-wide text-foreground">
                    Migration update
                  </p>
                  <p className="text-sm text-muted-foreground">
                    qmims has been migrated from Amazon Q CLI to{" "}
                    <span className="font-medium text-foreground">
                      Kiro CLI
                    </span>
                    . These docs reflect the current install, authentication,
                    and command workflows.
                  </p>
                </div>
              </div>

              <Link
                href="/docs/installation"
                className="inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary/80"
              >
                View setup guide
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mx-auto w-full min-w-0">{children}</div>
      </main>
    </div>
  );
}
