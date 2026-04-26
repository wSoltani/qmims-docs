import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal, Info } from "lucide-react";

export default function ConfigCommandPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          Config Command
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Manage qmims configuration settings
        </p>
      </div>

      <div className="space-y-4">
        <p>
          The <code>config</code> command lets you inspect and update qmims
          defaults, including generation mode, output filename, template
          preferences, and Kiro-related approval behavior.
        </p>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Syntax
        </h2>

        <div className="rounded-md bg-muted p-4">
          <pre className="text-sm font-mono">
            qmims config &lt;action&gt; [key] [value] [options]
          </pre>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Actions
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="m-0 border-t p-0 even:bg-muted">
                <th className="border px-4 py-2 text-left font-bold">Action</th>
                <th className="border px-4 py-2 text-left font-bold">
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="m-0 border-t p-0 even:bg-muted">
                <td className="border px-4 py-2 text-left">list</td>
                <td className="border px-4 py-2 text-left">
                  List all configuration settings
                </td>
              </tr>
              <tr className="m-0 border-t p-0 even:bg-muted">
                <td className="border px-4 py-2 text-left">get</td>
                <td className="border px-4 py-2 text-left">
                  Get a specific configuration value
                </td>
              </tr>
              <tr className="m-0 border-t p-0 even:bg-muted">
                <td className="border px-4 py-2 text-left">set</td>
                <td className="border px-4 py-2 text-left">
                  Set a configuration value
                </td>
              </tr>
              <tr className="m-0 border-t p-0 even:bg-muted">
                <td className="border px-4 py-2 text-left">delete</td>
                <td className="border px-4 py-2 text-left">
                  Delete a configuration value
                </td>
              </tr>
              <tr className="m-0 border-t p-0 even:bg-muted">
                <td className="border px-4 py-2 text-left">setup</td>
                <td className="border px-4 py-2 text-left">
                  Run interactive configuration setup
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
            <p>List all configuration settings:</p>
            <div className="rounded-md bg-muted p-4">
              <pre className="text-sm font-mono">qmims config list</pre>
            </div>
          </div>

          <div>
            <p>Get the default generation mode:</p>
            <div className="rounded-md bg-muted p-4">
              <pre className="text-sm font-mono">
                qmims config get defaults.mode
              </pre>
            </div>
          </div>

          <div>
            <p>Set the default template:</p>
            <div className="rounded-md bg-muted p-4">
              <pre className="text-sm font-mono">
                qmims config set defaults.templateName detailed
              </pre>
            </div>
          </div>

          <div>
            <p>Set the default output filename:</p>
            <div className="rounded-md bg-muted p-4">
              <pre className="text-sm font-mono">
                qmims config set defaults.outputFileName README.md
              </pre>
            </div>
          </div>

          <div>
            <p>Enable config-driven auto approval for Kiro-backed runs:</p>
            <div className="rounded-md bg-muted p-4">
              <pre className="text-sm font-mono">
                qmims config set q.autoApproveEdits true
              </pre>
            </div>
          </div>

          <div>
            <p>Delete a configuration value:</p>
            <div className="rounded-md bg-muted p-4">
              <pre className="text-sm font-mono">
                qmims config delete q.autoApproveEdits
              </pre>
            </div>
          </div>

          <div>
            <p>Run interactive setup:</p>
            <div className="rounded-md bg-muted p-4">
              <pre className="text-sm font-mono">qmims config setup</pre>
            </div>
          </div>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Common configuration keys
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="m-0 border-t p-0 even:bg-muted">
                <th className="border px-4 py-2 text-left font-bold">Key</th>
                <th className="border px-4 py-2 text-left font-bold">
                  Description
                </th>
                <th className="border px-4 py-2 text-left font-bold">
                  Example
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="m-0 border-t p-0 even:bg-muted">
                <td className="border px-4 py-2 text-left">defaults.mode</td>
                <td className="border px-4 py-2 text-left">
                  Default generation mode
                </td>
                <td className="border px-4 py-2 text-left">&quot;auto&quot;</td>
              </tr>
              <tr className="m-0 border-t p-0 even:bg-muted">
                <td className="border px-4 py-2 text-left">
                  defaults.outputFileName
                </td>
                <td className="border px-4 py-2 text-left">
                  Default output filename
                </td>
                <td className="border px-4 py-2 text-left">
                  &quot;README.md&quot;
                </td>
              </tr>
              <tr className="m-0 border-t p-0 even:bg-muted">
                <td className="border px-4 py-2 text-left">
                  defaults.templateName
                </td>
                <td className="border px-4 py-2 text-left">
                  Default template name for template mode
                </td>
                <td className="border px-4 py-2 text-left">
                  &quot;detailed&quot;
                </td>
              </tr>
              <tr className="m-0 border-t p-0 even:bg-muted">
                <td className="border px-4 py-2 text-left">
                  q.autoApproveEdits
                </td>
                <td className="border px-4 py-2 text-left">
                  Automatically approve Kiro tool permission requests when
                  applicable
                </td>
                <td className="border px-4 py-2 text-left">false</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Example configuration
        </h2>

        <p>A typical qmims configuration looks like this:</p>

        <div className="rounded-md bg-muted p-4">
          <pre className="text-sm font-mono">{`{
  "user": {
    "name": "Your Name",
    "email": "your.email@example.com"
  },
  "defaults": {
    "mode": "auto",
    "outputFileName": "README.md",
    "templateName": "detailed"
  },
  "q": {
    "autoApproveEdits": false
  }
}`}</pre>
        </div>

        <Alert>
          <Info className="h-4 w-4" />
          <AlertTitle>Git auto-commit note</AlertTitle>
          <AlertDescription>
            qmims does <strong>not</strong> currently expose Git auto-commit as
            a supported configuration feature. If you want generated README
            changes committed, handle that explicitly in your own Git workflow
            or CI pipeline.
          </AlertDescription>
        </Alert>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Kiro-related behavior
        </h2>

        <p>
          qmims now runs against <strong>Kiro CLI</strong>, so configuration is
          mainly about workflow defaults rather than AI provider selection.
          Configuration does not replace Kiro authentication; you still need a
          valid Kiro session or a <code>KIRO_API_KEY</code> in headless
          environments.
        </p>

        <div className="rounded-md bg-muted p-4">
          <pre className="text-sm font-mono">{`kiro-cli login
kiro-cli whoami
kiro-cli doctor`}</pre>
        </div>

        <Alert>
          <Terminal className="h-4 w-4" />
          <AlertTitle>Tip</AlertTitle>
          <AlertDescription>
            The <code>config setup</code> command is the easiest way to review
            and update your defaults interactively, especially if you are
            setting up qmims for the first time.
          </AlertDescription>
        </Alert>

        <p>
          For a broader overview of available settings, see the{" "}
          <a href="/docs/configuration" className="text-primary underline">
            Configuration System
          </a>{" "}
          page.
        </p>
      </div>
    </div>
  );
}
