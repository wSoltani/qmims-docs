import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CodeBlock } from "@/components/code-block";

export default function CommandReferencePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          Command Reference
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Overview of the main qmims commands and global help options
        </p>
      </div>

      <p>
        qmims provides four main commands for generating, editing, configuring,
        and managing README workflows. This page gives you a quick overview of
        each command and points you to the detailed reference page for its
        syntax, options, and examples.
      </p>

      <div className="grid gap-4 md:grid-cols-2">
        <Link href="/docs/command-reference/generate">
          <Card className="h-full transition-colors hover:bg-muted/50">
            <CardHeader>
              <CardTitle>generate</CardTitle>
              <CardDescription>
                Create a new README or regenerate documentation from project
                context
              </CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-between">
              <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                qmims generate [path] [options]
              </code>
              <ArrowRight className="h-4 w-4" />
            </CardContent>
          </Card>
        </Link>

        <Link href="/docs/command-reference/edit">
          <Card className="h-full transition-colors hover:bg-muted/50">
            <CardHeader>
              <CardTitle>edit</CardTitle>
              <CardDescription>
                Update an existing Markdown file using embedded qmims
                instructions
              </CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-between">
              <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                qmims edit [file] [options]
              </code>
              <ArrowRight className="h-4 w-4" />
            </CardContent>
          </Card>
        </Link>

        <Link href="/docs/command-reference/config">
          <Card className="h-full transition-colors hover:bg-muted/50">
            <CardHeader>
              <CardTitle>config</CardTitle>
              <CardDescription>
                Manage saved qmims defaults and workflow preferences
              </CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-between">
              <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                qmims config &lt;action&gt; [key] [value]
              </code>
              <ArrowRight className="h-4 w-4" />
            </CardContent>
          </Card>
        </Link>

        <Link href="/docs/command-reference/templates">
          <Card className="h-full transition-colors hover:bg-muted/50">
            <CardHeader>
              <CardTitle>templates</CardTitle>
              <CardDescription>
                List, inspect, add, and remove README templates
              </CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-between">
              <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                qmims templates &lt;action&gt; [name] [path]
              </code>
              <ArrowRight className="h-4 w-4" />
            </CardContent>
          </Card>
        </Link>
      </div>

      <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-8">
        Typical Workflow
      </h2>

      <ol className="list-decimal space-y-2 pl-6">
        <li>
          Use <code>qmims generate</code> to create a first-pass README.
        </li>
        <li>
          Refine structure with <code>template</code> mode or custom templates.
        </li>
        <li>
          Add targeted embedded comments like{" "}
          <code>{`<!-- qmims: ... -->`}</code> to control specific sections.
        </li>
        <li>
          Run <code>qmims edit</code> to process those instructions and update
          the file.
        </li>
        <li>
          Use <code>qmims config</code> to save defaults for repeated workflows.
        </li>
      </ol>

      <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-8">
        Global Options
      </h2>

      <p>
        These common flags are available from the CLI help output and are useful
        when exploring commands:
      </p>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="m-0 border-t p-0 even:bg-muted">
              <th className="border px-4 py-2 text-left font-bold">Option</th>
              <th className="border px-4 py-2 text-left font-bold">
                Description
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="m-0 border-t p-0 even:bg-muted">
              <td className="border px-4 py-2 text-left">--help</td>
              <td className="border px-4 py-2 text-left">
                Show general help or command-specific help
              </td>
            </tr>
            <tr className="m-0 border-t p-0 even:bg-muted">
              <td className="border px-4 py-2 text-left">--version</td>
              <td className="border px-4 py-2 text-left">
                Show the installed qmims version
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-8">
        Command-Specific Flags You&apos;ll Use Often
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="m-0 border-t p-0 even:bg-muted">
              <th className="border px-4 py-2 text-left font-bold">Flag</th>
              <th className="border px-4 py-2 text-left font-bold">
                Common Usage
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="m-0 border-t p-0 even:bg-muted">
              <td className="border px-4 py-2 text-left">--mode</td>
              <td className="border px-4 py-2 text-left">
                Choose between <code>auto</code>, <code>template[:name]</code>,
                and <code>instruct[:file]</code> for generation
              </td>
            </tr>
            <tr className="m-0 border-t p-0 even:bg-muted">
              <td className="border px-4 py-2 text-left">--output</td>
              <td className="border px-4 py-2 text-left">
                Set a custom output filename such as <code>DOCS.md</code>
              </td>
            </tr>
            <tr className="m-0 border-t p-0 even:bg-muted">
              <td className="border px-4 py-2 text-left">--force</td>
              <td className="border px-4 py-2 text-left">
                Overwrite an existing file without the normal prompt
              </td>
            </tr>
            <tr className="m-0 border-t p-0 even:bg-muted">
              <td className="border px-4 py-2 text-left">--yes</td>
              <td className="border px-4 py-2 text-left">
                Automatically approve the Kiro tool-permission flow for
                non-interactive execution
              </td>
            </tr>
            <tr className="m-0 border-t p-0 even:bg-muted">
              <td className="border px-4 py-2 text-left">--dry-run</td>
              <td className="border px-4 py-2 text-left">
                Preview what qmims would do without making changes
              </td>
            </tr>
            <tr className="m-0 border-t p-0 even:bg-muted">
              <td className="border px-4 py-2 text-left">--verbose</td>
              <td className="border px-4 py-2 text-left">
                Print more detailed diagnostic output
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-8">
        Getting Help
      </h2>

      <p>
        Use the built-in help output whenever you want the exact syntax for the
        command installed on your machine:
      </p>

      <CodeBlock
        code={`qmims --help
qmims generate --help
qmims edit --help
qmims config --help
qmims templates --help`}
        language="bash"
      />

      <p>
        If you are troubleshooting Kiro-related setup or authentication issues,
        the installation and troubleshooting guides also cover the most useful
        supporting commands such as <code>kiro-cli whoami</code>,{" "}
        <code>kiro-cli login</code>, and <code>kiro-cli doctor</code>.
      </p>
    </div>
  );
}
