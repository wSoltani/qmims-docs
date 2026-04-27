import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal, FileText, Info } from "lucide-react";

export default function EditCommandPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          Edit Command
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Modify existing Markdown files using embedded qmims instructions
        </p>
      </div>

      <div className="space-y-4">
        <p>
          The <code>edit</code> command updates an existing Markdown file by
          asking <strong>Kiro CLI</strong> to read the file, interpret any
          embedded <code>{`<!-- qmims: ... -->`}</code> instructions, and write
          the revised content back to disk.
        </p>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Syntax
        </h2>

        <div className="rounded-md bg-muted p-4">
          <pre className="text-sm font-mono overflow-auto">
            qmims edit [file] [options]
          </pre>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Arguments
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="m-0 border-t p-0 even:bg-muted">
                <th className="border px-4 py-2 text-left font-bold">
                  Argument
                </th>
                <th className="border px-4 py-2 text-left font-bold">
                  Description
                </th>
                <th className="border px-4 py-2 text-left font-bold">
                  Default
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="m-0 border-t p-0 even:bg-muted">
                <td className="border px-4 py-2 text-left">file</td>
                <td className="border px-4 py-2 text-left">
                  Path to the Markdown file to edit
                </td>
                <td className="border px-4 py-2 text-left">README.md</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Options
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="m-0 border-t p-0 even:bg-muted">
                <th className="border px-4 py-2 text-left font-bold">Option</th>
                <th className="border px-4 py-2 text-left font-bold">Alias</th>
                <th className="border px-4 py-2 text-left font-bold">
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="m-0 border-t p-0 even:bg-muted">
                <td className="border px-4 py-2 text-left">--yes</td>
                <td className="border px-4 py-2 text-left">-y</td>
                <td className="border px-4 py-2 text-left">
                  Automatically approve the Kiro tool-permission flow for the
                  edit run
                </td>
              </tr>
              <tr className="m-0 border-t p-0 even:bg-muted">
                <td className="border px-4 py-2 text-left">--dry-run</td>
                <td className="border px-4 py-2 text-left"></td>
                <td className="border px-4 py-2 text-left">
                  Show what would be done without making changes
                </td>
              </tr>
              <tr className="m-0 border-t p-0 even:bg-muted">
                <td className="border px-4 py-2 text-left">--verbose</td>
                <td className="border px-4 py-2 text-left">-V</td>
                <td className="border px-4 py-2 text-left">
                  Show detailed output for debugging
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Examples
        </h2>

        <div className="space-y-4">
          <div>
            <p>
              Edit <code>README.md</code> in the current directory:
            </p>
            <div className="rounded-md bg-muted p-4">
              <pre className="text-sm font-mono overflow-auto">qmims edit</pre>
            </div>
          </div>

          <div>
            <p>Edit a specific Markdown file:</p>
            <div className="rounded-md bg-muted p-4">
              <pre className="text-sm font-mono overflow-auto">
                qmims edit docs/README.md
              </pre>
            </div>
          </div>

          <div>
            <p>Automatically approve the Kiro run:</p>
            <div className="rounded-md bg-muted p-4">
              <pre className="text-sm font-mono overflow-auto">
                qmims edit --yes
              </pre>
            </div>
          </div>

          <div>
            <p>Preview the workflow without changing files:</p>
            <div className="rounded-md bg-muted p-4">
              <pre className="text-sm font-mono overflow-auto">
                qmims edit --dry-run
              </pre>
            </div>
          </div>

          <div>
            <p>Show detailed diagnostics:</p>
            <div className="rounded-md bg-muted p-4">
              <pre className="text-sm font-mono overflow-auto">
                qmims edit --verbose
              </pre>
            </div>
          </div>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          How It Works
        </h2>

        <p>
          When you run <code>qmims edit</code>, the command follows this
          Kiro-backed flow:
        </p>

        <ol className="list-decimal space-y-2 pl-6">
          <li>
            Resolve the target Markdown file, defaulting to{" "}
            <code>README.md</code>
          </li>
          <li>
            If the requested file does not exist, try discovering a fallback{" "}
            <code>README.md</code> in the same directory
          </li>
          <li>Verify that Kiro CLI is installed and authenticated</li>
          <li>Invoke Kiro in documented non-interactive CLI mode</li>
          <li>
            Ask Kiro to read the Markdown file and find embedded qmims
            instructions
          </li>
          <li>
            Write the complete updated file back to the resolved target path
          </li>
        </ol>

        <Alert>
          <Info className="h-4 w-4" />
          <AlertTitle>README fallback behavior</AlertTitle>
          <AlertDescription>
            If the file you requested is missing, qmims can fall back to a
            discovered <code>README.md</code> in the target directory and use
            that as the actual edit target.
          </AlertDescription>
        </Alert>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Embedded Instruction Format
        </h2>

        <p>
          The <code>edit</code> command is designed to work with HTML comments
          that begin with the <code>qmims</code> prefix:
        </p>

        <div className="rounded-md bg-muted p-4">
          <pre className="text-sm font-mono overflow-auto">
            {`# Project Title

<!-- qmims: Generate a concise overview based on the repository's main purpose. -->

## Features

<!-- qmims: List the main user-facing capabilities of this project. -->

## Installation

<!-- qmims: Update installation steps using the detected package manager and runtime requirements. -->`}
          </pre>
        </div>

        <p>
          qmims asks Kiro to read the file, interpret all embedded instructions
          it finds, and update the Markdown accordingly.
        </p>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Kiro Requirements
        </h2>

        <p>
          Before using <code>edit</code>, make sure Kiro CLI is ready:
        </p>

        <div className="rounded-md bg-muted p-4">
          <pre className="text-sm font-mono overflow-auto">{`kiro-cli whoami
kiro-cli login
kiro-cli doctor`}</pre>
        </div>

        <p>
          For headless or CI environments, Kiro can also authenticate using{" "}
          <code>KIRO_API_KEY</code>.
        </p>

        <div className="rounded-md bg-muted p-4">
          <pre className="text-sm font-mono overflow-auto">{`# Linux / macOS
export KIRO_API_KEY=your_api_key_here

# Windows PowerShell
$env:KIRO_API_KEY = "your_api_key_here"`}</pre>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Dry Run Output
        </h2>

        <p>
          In dry-run mode, qmims does not invoke Kiro. Instead, it shows the
          requested file, the resolved edit target, and the actions it would
          take.
        </p>

        <div className="rounded-md bg-muted p-4">
          <pre className="text-sm font-mono overflow-auto">
            qmims edit --dry-run
          </pre>
        </div>

        <Alert>
          <Terminal className="h-4 w-4" />
          <AlertTitle>Tip</AlertTitle>
          <AlertDescription>
            Use <code>--dry-run</code> before editing important documentation
            files so you can confirm the target path and workflow before making
            changes.
          </AlertDescription>
        </Alert>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          When to Use edit
        </h2>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border p-4">
            <div className="mb-2 flex items-center gap-2">
              <FileText className="h-4 w-4" />
              <h3 className="font-semibold">Good for targeted updates</h3>
            </div>
            <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
              <li>Refreshing installation steps</li>
              <li>Updating a features list</li>
              <li>Rewriting outdated usage examples</li>
              <li>Filling in placeholder sections</li>
            </ul>
          </div>

          <div className="rounded-lg border p-4">
            <div className="mb-2 flex items-center gap-2">
              <Terminal className="h-4 w-4" />
              <h3 className="font-semibold">Less ideal for blank files</h3>
            </div>
            <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
              <li>Creating a brand-new README from nothing</li>
              <li>Choosing an initial structure for a new project</li>
              <li>Generating a template-based layout</li>
              <li>Bootstrapping docs without embedded instructions</li>
            </ul>
          </div>
        </div>

        <p>
          For a brand-new README, start with <code>qmims generate</code>. Then
          use <code>qmims edit</code> for ongoing, instruction-driven
          maintenance.
        </p>

        <p>
          For more on instruction syntax and writing effective prompts, see the{" "}
          <a
            href="/docs/embedded-instructions"
            className="text-primary underline"
          >
            Embedded Instructions
          </a>{" "}
          section.
        </p>
      </div>
    </div>
  );
}
