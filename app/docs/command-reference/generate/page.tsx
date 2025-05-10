import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Terminal } from "lucide-react"

export default function GenerateCommandPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Generate Command</h1>
        <p className="text-lg text-muted-foreground mt-2">Create new README.md files for your projects</p>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Syntax</h2>

        <div className="bg-muted p-4 rounded-md">
          <pre className="text-sm font-mono">qmims generate [path] [options]</pre>
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
                <td className="border px-4 py-2 text-left">path</td>
                <td className="border px-4 py-2 text-left">Path to the project directory</td>
                <td className="border px-4 py-2 text-left">Current directory</td>
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
                <td className="border px-4 py-2 text-left">--output</td>
                <td className="border px-4 py-2 text-left">-o</td>
                <td className="border px-4 py-2 text-left">Specify output filename (default: README.md)</td>
              </tr>
              <tr className="m-0 border-t p-0 even:bg-muted">
                <td className="border px-4 py-2 text-left">--mode</td>
                <td className="border px-4 py-2 text-left">-m</td>
                <td className="border px-4 py-2 text-left">Generation mode (auto, template, instruct)</td>
              </tr>
              <tr className="m-0 border-t p-0 even:bg-muted">
                <td className="border px-4 py-2 text-left">--force</td>
                <td className="border px-4 py-2 text-left">-f</td>
                <td className="border px-4 py-2 text-left">Overwrite existing files without prompting</td>
              </tr>
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
              <tr className="m-0 border-t p-0 even:bg-muted">
                <td className="border px-4 py-2 text-left">--list-available-templates</td>
                <td className="border px-4 py-2 text-left"></td>
                <td className="border px-4 py-2 text-left">List available templates when using template mode</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Examples</h2>

        <div className="space-y-4">
          <div>
            <p>Generate README in auto mode for current directory:</p>
            <div className="bg-muted p-4 rounded-md">
              <pre className="text-sm font-mono">qmims generate</pre>
            </div>
          </div>

          <div>
            <p>Generate README for a specific project:</p>
            <div className="bg-muted p-4 rounded-md">
              <pre className="text-sm font-mono">qmims generate /path/to/project</pre>
            </div>
          </div>

          <div>
            <p>Generate using a specific template:</p>
            <div className="bg-muted p-4 rounded-md">
              <pre className="text-sm font-mono">qmims generate --mode template:basic</pre>
            </div>
          </div>

          <div>
            <p>Generate with a custom output filename:</p>
            <div className="bg-muted p-4 rounded-md">
              <pre className="text-sm font-mono">qmims generate --output DOCS.md</pre>
            </div>
          </div>

          <div>
            <p>Generate in dry run mode to preview changes:</p>
            <div className="bg-muted p-4 rounded-md">
              <pre className="text-sm font-mono">qmims generate --dry-run</pre>
            </div>
          </div>

          <div>
            <p>Generate with verbose output for debugging:</p>
            <div className="bg-muted p-4 rounded-md">
              <pre className="text-sm font-mono">qmims generate --verbose</pre>
            </div>
          </div>

          <div>
            <p>List available templates:</p>
            <div className="bg-muted p-4 rounded-md">
              <pre className="text-sm font-mono">qmims generate --mode template --list-available-templates</pre>
            </div>
          </div>
        </div>

        <Alert>
          <Terminal className="h-4 w-4" />
          <AlertTitle>Tip</AlertTitle>
          <AlertDescription>
            You can combine multiple options to customize the generation process. For example:
            <div className="bg-muted p-4 rounded-md mt-2">
              <pre className="text-sm font-mono">
                qmims generate --mode template:detailed --output docs/README.md --force
              </pre>
            </div>
          </AlertDescription>
        </Alert>
      </div>
    </div>
  )
}
