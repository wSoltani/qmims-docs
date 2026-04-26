import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Info, Terminal } from "lucide-react";

export default function ConfigurationPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          Configuration System
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Manage qmims defaults and workflow preferences
        </p>
      </div>

      <div className="space-y-4">
        <p>
          qmims stores configuration so you can avoid repeating the same flags
          on every run. This is useful for setting a preferred generation mode,
          default output filename, default template, and whether Kiro-backed
          runs should auto-approve tool permissions when applicable.
        </p>

        <Alert>
          <Info className="h-4 w-4" />
          <AlertTitle>Current product behavior</AlertTitle>
          <AlertDescription>
            qmims is now Kiro-based. The documented configuration keys should
            reflect the current implementation, not the older Amazon Q setup.
          </AlertDescription>
        </Alert>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          What configuration is for
        </h2>

        <ul className="list-disc space-y-2 pl-6">
          <li>
            Set a default generation mode such as <code>auto</code> or{" "}
            <code>template</code>
          </li>
          <li>
            Set the default output file, such as <code>README.md</code> or{" "}
            <code>docs/README.md</code>
          </li>
          <li>Choose a default template for template mode</li>
          <li>
            Control whether qmims should auto-approve Kiro tool permission
            requests through config
          </li>
        </ul>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Main configuration keys
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
                  Default output filename for generated docs
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
                  Default template used when template mode is selected
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

        <p>A representative qmims configuration looks like this:</p>

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

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Managing configuration from the CLI
        </h2>

        <p>
          You can inspect and update configuration using the <code>config</code>{" "}
          command:
        </p>

        <div className="rounded-md bg-muted p-4">
          <pre className="text-sm font-mono">{`qmims config list
qmims config get defaults.mode
qmims config set defaults.templateName detailed
qmims config set defaults.outputFileName README.md
qmims config set q.autoApproveEdits true
qmims config delete q.autoApproveEdits
qmims config setup`}</pre>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Practical examples
        </h2>

        <div className="space-y-4">
          <div>
            <p>Use template mode by default:</p>
            <div className="mt-2 rounded-md bg-muted p-4">
              <pre className="text-sm font-mono">
                qmims config set defaults.mode template
              </pre>
            </div>
          </div>

          <div>
            <p>Set a preferred template:</p>
            <div className="mt-2 rounded-md bg-muted p-4">
              <pre className="text-sm font-mono">
                qmims config set defaults.templateName library
              </pre>
            </div>
          </div>

          <div>
            <p>Generate to a non-default file path:</p>
            <div className="mt-2 rounded-md bg-muted p-4">
              <pre className="text-sm font-mono">
                qmims config set defaults.outputFileName docs/README.md
              </pre>
            </div>
          </div>

          <div>
            <p>Enable auto-approval through config:</p>
            <div className="mt-2 rounded-md bg-muted p-4">
              <pre className="text-sm font-mono">
                qmims config set q.autoApproveEdits true
              </pre>
            </div>
          </div>
        </div>

        <Alert>
          <Terminal className="h-4 w-4" />
          <AlertTitle>Kiro still needs authentication</AlertTitle>
          <AlertDescription>
            qmims configuration does not replace Kiro authentication. You still
            need a valid Kiro session or a <code>KIRO_API_KEY</code> in headless
            environments.
            <div className="mt-3 rounded-md bg-muted p-4">
              <pre className="text-sm font-mono">{`kiro-cli login
kiro-cli whoami
kiro-cli doctor`}</pre>
            </div>
          </AlertDescription>
        </Alert>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          What is no longer documented as a config feature
        </h2>

        <p>
          qmims does not currently expose Git auto-commit as a supported
          configuration feature. If you want generated documentation committed
          automatically, handle that in your own Git workflow or CI pipeline.
        </p>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Configuration tips
        </h2>

        <ul className="list-disc space-y-2 pl-6">
          <li>
            Set <code>defaults.outputFileName</code> if your team keeps docs
            outside the repository root
          </li>
          <li>
            Set <code>defaults.templateName</code> if you use the same template
            across many repositories
          </li>
          <li>
            Use <code>q.autoApproveEdits</code> carefully in automation-heavy
            workflows
          </li>
          <li>
            Use <code>qmims config setup</code> if you want an interactive way
            to review your defaults
          </li>
        </ul>
      </div>
    </div>
  );
}
