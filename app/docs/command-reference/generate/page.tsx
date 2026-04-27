import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal, Info } from "lucide-react";

export default function GenerateCommandPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          Generate Command
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Create new README files using Kiro-backed generation workflows
        </p>
      </div>

      <div className="space-y-4">
        <p>
          The <code>generate</code> command is the main entry point for creating
          project documentation with <code>qmims</code>. It supports automatic
          generation, template-driven generation, and instruction-driven
          generation, all powered by Kiro CLI.
        </p>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Syntax
        </h2>

        <div className="rounded-md bg-muted p-4">
          <pre className="text-sm font-mono overflow-auto">
            qmims generate [path] [options]
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
                <td className="border px-4 py-2 text-left">path</td>
                <td className="border px-4 py-2 text-left">
                  Path to the project directory to analyze
                </td>
                <td className="border px-4 py-2 text-left">
                  Current directory
                </td>
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
                <td className="border px-4 py-2 text-left">--output</td>
                <td className="border px-4 py-2 text-left">-o</td>
                <td className="border px-4 py-2 text-left">
                  Output filename. Defaults to{" "}
                  <code>defaults.outputFileName</code>.
                </td>
              </tr>
              <tr className="m-0 border-t p-0 even:bg-muted">
                <td className="border px-4 py-2 text-left">--mode</td>
                <td className="border px-4 py-2 text-left">-m</td>
                <td className="border px-4 py-2 text-left">
                  Generation mode: <code>auto</code>,{" "}
                  <code>template[:name]</code>, or <code>instruct[:file]</code>.
                </td>
              </tr>
              <tr className="m-0 border-t p-0 even:bg-muted">
                <td className="border px-4 py-2 text-left">--force</td>
                <td className="border px-4 py-2 text-left">-f</td>
                <td className="border px-4 py-2 text-left">
                  Overwrite the output file without prompting.
                </td>
              </tr>
              <tr className="m-0 border-t p-0 even:bg-muted">
                <td className="border px-4 py-2 text-left">--yes</td>
                <td className="border px-4 py-2 text-left">-y</td>
                <td className="border px-4 py-2 text-left">
                  Automatically approve Kiro tool permission requests.
                </td>
              </tr>
              <tr className="m-0 border-t p-0 even:bg-muted">
                <td className="border px-4 py-2 text-left">--dry-run</td>
                <td className="border px-4 py-2 text-left"></td>
                <td className="border px-4 py-2 text-left">
                  Show what would happen without making changes.
                </td>
              </tr>
              <tr className="m-0 border-t p-0 even:bg-muted">
                <td className="border px-4 py-2 text-left">--verbose</td>
                <td className="border px-4 py-2 text-left"></td>
                <td className="border px-4 py-2 text-left">
                  Print detailed diagnostic output.
                </td>
              </tr>
              <tr className="m-0 border-t p-0 even:bg-muted">
                <td className="border px-4 py-2 text-left">
                  --list-available-templates
                </td>
                <td className="border px-4 py-2 text-left"></td>
                <td className="border px-4 py-2 text-left">
                  List built-in and custom templates when using template mode.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Generation Modes
        </h2>

        <div className="space-y-4">
          <div>
            <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
              Auto Mode
            </h3>
            <p>
              Auto mode asks Kiro to analyze the target project and generate a
              complete README from scratch.
            </p>
            <div className="mt-2 rounded-md bg-muted p-4">
              <pre className="text-sm font-mono overflow-auto">
                qmims generate --mode auto
              </pre>
            </div>
          </div>

          <div>
            <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
              Template Mode
            </h3>
            <p>
              Template mode writes a selected template first, then asks Kiro to
              fill in the sections while preserving that structure.
            </p>
            <div className="mt-2 rounded-md bg-muted p-4">
              <pre className="text-sm font-mono overflow-auto">
                qmims generate --mode template:basic
              </pre>
            </div>
          </div>

          <div>
            <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
              Instruct Mode
            </h3>
            <p>
              Instruct mode reads embedded <code>{`<!-- qmims: ... -->`}</code>{" "}
              comments from a Markdown file and uses all discovered instructions
              to produce the final output.
            </p>
            <div className="mt-2 rounded-md bg-muted p-4">
              <pre className="text-sm font-mono overflow-auto">{`qmims generate --mode instruct
qmims generate --mode instruct:README.md`}</pre>
            </div>
          </div>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Examples
        </h2>

        <div className="space-y-4">
          <div>
            <p>Generate a README in auto mode for the current directory:</p>
            <div className="rounded-md bg-muted p-4">
              <pre className="text-sm font-mono overflow-auto">
                qmims generate
              </pre>
            </div>
          </div>

          <div>
            <p>Generate a README for a specific project:</p>
            <div className="rounded-md bg-muted p-4">
              <pre className="text-sm font-mono overflow-auto">
                qmims generate /path/to/project
              </pre>
            </div>
          </div>

          <div>
            <p>Generate using a built-in template:</p>
            <div className="rounded-md bg-muted p-4">
              <pre className="text-sm font-mono overflow-auto">
                qmims generate --mode template:detailed
              </pre>
            </div>
          </div>

          <div>
            <p>List the available templates:</p>
            <div className="rounded-md bg-muted p-4">
              <pre className="text-sm font-mono overflow-auto">
                qmims generate --mode template --list-available-templates
              </pre>
            </div>
          </div>

          <div>
            <p>Generate to a custom output file:</p>
            <div className="rounded-md bg-muted p-4">
              <pre className="text-sm font-mono overflow-auto">
                qmims generate --output DOCS.md
              </pre>
            </div>
          </div>

          <div>
            <p>Preview the workflow without changing files:</p>
            <div className="rounded-md bg-muted p-4">
              <pre className="text-sm font-mono overflow-auto">
                qmims generate --dry-run
              </pre>
            </div>
          </div>

          <div>
            <p>Run with automatic approval for non-interactive workflows:</p>
            <div className="rounded-md bg-muted p-4">
              <pre className="text-sm font-mono overflow-auto">
                qmims generate --yes
              </pre>
            </div>
          </div>

          <div>
            <p>Generate from embedded instructions in a specific file:</p>
            <div className="rounded-md bg-muted p-4">
              <pre className="text-sm font-mono overflow-auto">
                qmims generate --mode instruct:docs/README-template.md
              </pre>
            </div>
          </div>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          How It Works
        </h2>

        <ol className="list-decimal space-y-2 pl-6">
          <li>qmims verifies that Kiro CLI is installed and authenticated</li>
          <li>
            It selects the requested generation workflow based on{" "}
            <code>--mode</code>
          </li>
          <li>
            It prepares the target file or template and builds a Kiro prompt
          </li>
          <li>
            Kiro runs in documented non-interactive CLI mode to generate or
            update the README
          </li>
          <li>The final Markdown content is written to the output file</li>
        </ol>

        <Alert>
          <Info className="h-4 w-4" />
          <AlertTitle>Kiro authentication</AlertTitle>
          <AlertDescription>
            If the command cannot start, verify your Kiro setup with{" "}
            <code>kiro-cli whoami</code>. If needed, authenticate with{" "}
            <code>kiro-cli login</code> or use <code>KIRO_API_KEY</code> in
            headless environments.
          </AlertDescription>
        </Alert>

        <Alert>
          <Terminal className="h-4 w-4" />
          <AlertTitle>Tip</AlertTitle>
          <AlertDescription>
            You can combine options for a more tailored workflow. For example:
            <div className="mt-2 rounded-md bg-muted p-4">
              <pre className="text-sm font-mono overflow-auto">
                qmims generate --mode template:detailed --output docs/README.md
                --force --yes
              </pre>
            </div>
          </AlertDescription>
        </Alert>
      </div>
    </div>
  );
}
