import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Terminal } from "lucide-react"

export default function EditCommandPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Edit Command</h1>
        <p className="text-lg text-muted-foreground mt-2">
          Modify existing README.md files using embedded instructions
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Syntax</h2>

        <div className="bg-muted p-4 rounded-md">
          <pre className="text-sm font-mono">qmims edit [file] [options]</pre>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Arguments</h2>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="m-0 border-t p-0 even:bg-muted">
                <th className="border px-4 py-2 text-left font-bold">Argument</th>
                <th className="border px-4 py-2 text-left font-bold">Description</th>
                <th className="border px-4 py-2 text-left font-bold">Default</th>
              </tr>
            </thead>
            <tbody>
              <tr className="m-0 border-t p-0 even:bg-muted">
                <td className="border px-4 py-2 text-left">file</td>
                <td className="border px-4 py-2 text-left">Path to the Markdown file to edit</td>
                <td className="border px-4 py-2 text-left">README.md</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Options</h2>

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
                <td className="border px-4 py-2 text-left">--yes</td>
                <td className="border px-4 py-2 text-left">-y</td>
                <td className="border px-4 py-2 text-left">Automatically approve all permission requests</td>
              </tr>
              <tr className="m-0 border-t p-0 even:bg-muted">
                <td className="border px-4 py-2 text-left">--dry-run</td>
                <td className="border px-4 py-2 text-left"></td>
                <td className="border px-4 py-2 text-left">Show what would be done without making changes</td>
              </tr>
              <tr className="m-0 border-t p-0 even:bg-muted">
                <td className="border px-4 py-2 text-left">--verbose</td>
                <td className="border px-4 py-2 text-left">-V</td>
                <td className="border px-4 py-2 text-left">Show detailed output for debugging</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Examples</h2>

        <div className="space-y-4">
          <div>
            <p>Edit README.md in current directory:</p>
            <div className="bg-muted p-4 rounded-md">
              <pre className="text-sm font-mono">qmims edit</pre>
            </div>
          </div>

          <div>
            <p>Edit a specific file:</p>
            <div className="bg-muted p-4 rounded-md">
              <pre className="text-sm font-mono">qmims edit path/to/README.md</pre>
            </div>
          </div>

          <div>
            <p>Edit with automatic approval of changes:</p>
            <div className="bg-muted p-4 rounded-md">
              <pre className="text-sm font-mono">qmims edit --yes</pre>
            </div>
          </div>

          <div>
            <p>Preview edits without making changes:</p>
            <div className="bg-muted p-4 rounded-md">
              <pre className="text-sm font-mono">qmims edit --dry-run</pre>
            </div>
          </div>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">How It Works</h2>

        <p>
          The <code>edit</code> command processes embedded instructions in your Markdown files. These instructions are
          HTML comments that tell Amazon Q what content to generate or modify.
        </p>

        <div className="bg-muted p-4 rounded-md">
          <pre className="text-sm font-mono">
            {`# Project Title

<!-- qmims: Generate a concise project overview based on the codebase -->

## Features

<!-- qmims: List the main features of the project based on the code structure -->`}
          </pre>
        </div>

        <p>
          When you run <code>qmims edit</code>, it will:
        </p>

        <ol className="list-decimal pl-6 space-y-2">
          <li>Scan the file for embedded instructions</li>
          <li>Process each instruction using Amazon Q</li>
          <li>Replace the instructions with generated content</li>
          <li>Save the updated file (unless using --dry-run)</li>
        </ol>

        <Alert>
          <Terminal className="h-4 w-4" />
          <AlertTitle>Tip</AlertTitle>
          <AlertDescription>
            You can use the <code>edit</code> command to update specific sections of your README without regenerating
            the entire file. This is useful for keeping your documentation up-to-date as your project evolves.
          </AlertDescription>
        </Alert>

        <p>
          For more information on embedded instructions, see the{" "}
          <a href="/docs/embedded-instructions" className="text-primary underline">
            Embedded Instructions
          </a>{" "}
          section.
        </p>
      </div>
    </div>
  )
}
