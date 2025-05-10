import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CodeBlock } from "@/components/code-block"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function CommandReferencePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Command Reference</h1>
        <p className="text-lg text-muted-foreground mt-2">Detailed documentation for all qmims commands</p>
      </div>

      <p>qmims provides four main commands to help you generate and manage README files for your projects.</p>

      <div className="grid gap-4 md:grid-cols-2">
        <Link href="/docs/command-reference/generate">
          <Card className="h-full hover:bg-muted/50 transition-colors">
            <CardHeader>
              <CardTitle>generate</CardTitle>
              <CardDescription>Create new README.md files</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-between items-center">
              <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                qmims generate [path] [options]
              </code>
              <ArrowRight className="h-4 w-4" />
            </CardContent>
          </Card>
        </Link>

        <Link href="/docs/command-reference/edit">
          <Card className="h-full hover:bg-muted/50 transition-colors">
            <CardHeader>
              <CardTitle>edit</CardTitle>
              <CardDescription>Modify existing README.md files</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-between items-center">
              <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                qmims edit [file] [options]
              </code>
              <ArrowRight className="h-4 w-4" />
            </CardContent>
          </Card>
        </Link>

        <Link href="/docs/command-reference/config">
          <Card className="h-full hover:bg-muted/50 transition-colors">
            <CardHeader>
              <CardTitle>config</CardTitle>
              <CardDescription>Manage configuration settings</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-between items-center">
              <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                qmims config &lt;action&gt; [key] [value]
              </code>
              <ArrowRight className="h-4 w-4" />
            </CardContent>
          </Card>
        </Link>

        <Link href="/docs/command-reference/templates">
          <Card className="h-full hover:bg-muted/50 transition-colors">
            <CardHeader>
              <CardTitle>templates</CardTitle>
              <CardDescription>Manage README templates</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-between items-center">
              <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                qmims templates &lt;action&gt; [name] [path]
              </code>
              <ArrowRight className="h-4 w-4" />
            </CardContent>
          </Card>
        </Link>
      </div>

      <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-8">Global Options</h2>

      <p>These options are available for all qmims commands:</p>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="m-0 border-t p-0 even:bg-muted">
              <th className="border px-4 py-2 text-left font-bold">Option</th>
              <th className="border px-4 py-2 text-left font-bold">Alias</th>
              <th className="border px-4 py-2 text-left font-bold">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr className="m-0 border-t p-0 even:bg-muted">
              <td className="border px-4 py-2 text-left">--help</td>
              <td className="border px-4 py-2 text-left">-h</td>
              <td className="border px-4 py-2 text-left">Show help information</td>
            </tr>
            <tr className="m-0 border-t p-0 even:bg-muted">
              <td className="border px-4 py-2 text-left">--version</td>
              <td className="border px-4 py-2 text-left">-v</td>
              <td className="border px-4 py-2 text-left">Show version information</td>
            </tr>
            <tr className="m-0 border-t p-0 even:bg-muted">
              <td className="border px-4 py-2 text-left">--verbose</td>
              <td className="border px-4 py-2 text-left">-V</td>
              <td className="border px-4 py-2 text-left">Show detailed output for debugging</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-8">Command-Specific Options</h2>

      <p>
        Each command has its own specific options. Click on a command card above to see detailed documentation for that
        command.
      </p>

      <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-8">Getting Help</h2>

      <p>
        You can get help for any command by using the <code>--help</code> option:
      </p>

      <CodeBlock
        code={`qmims --help
qmims generate --help
qmims edit --help
qmims config --help
qmims templates --help`}
        language="bash"
      />
    </div>
  )
}
