import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Terminal } from "lucide-react"

export default function ConfigCommandPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Config Command</h1>
        <p className="text-lg text-muted-foreground mt-2">Manage qmims configuration settings</p>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Syntax</h2>

        <div className="bg-muted p-4 rounded-md">
          <pre className="text-sm font-mono">qmims config &lt;action&gt; [key] [value] [options]</pre>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Actions</h2>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="m-0 border-t p-0 even:bg-muted">
                <th className="border px-4 py-2 text-left font-bold">Action</th>
                <th className="border px-4 py-2 text-left font-bold">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="m-0 border-t p-0 even:bg-muted">
                <td className="border px-4 py-2 text-left">list</td>
                <td className="border px-4 py-2 text-left">List all configuration settings</td>
              </tr>
              <tr className="m-0 border-t p-0 even:bg-muted">
                <td className="border px-4 py-2 text-left">get</td>
                <td className="border px-4 py-2 text-left">Get a specific configuration value</td>
              </tr>
              <tr className="m-0 border-t p-0 even:bg-muted">
                <td className="border px-4 py-2 text-left">set</td>
                <td className="border px-4 py-2 text-left">Set a configuration value</td>
              </tr>
              <tr className="m-0 border-t p-0 even:bg-muted">
                <td className="border px-4 py-2 text-left">delete</td>
                <td className="border px-4 py-2 text-left">Delete a configuration value</td>
              </tr>
              <tr className="m-0 border-t p-0 even:bg-muted">
                <td className="border px-4 py-2 text-left">setup</td>
                <td className="border px-4 py-2 text-left">Interactive configuration setup</td>
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
            <p>List all configuration settings:</p>
            <div className="bg-muted p-4 rounded-md">
              <pre className="text-sm font-mono">qmims config list</pre>
            </div>
          </div>

          <div>
            <p>Get a specific setting:</p>
            <div className="bg-muted p-4 rounded-md">
              <pre className="text-sm font-mono">qmims config get defaults.mode</pre>
            </div>
          </div>

          <div>
            <p>Set a configuration value:</p>
            <div className="bg-muted p-4 rounded-md">
              <pre className="text-sm font-mono">qmims config set defaults.templateName detailed</pre>
            </div>
          </div>

          <div>
            <p>Delete a configuration value:</p>
            <div className="bg-muted p-4 rounded-md">
              <pre className="text-sm font-mono">qmims config delete q.autoApproveEdits</pre>
            </div>
          </div>

          <div>
            <p>Run interactive setup:</p>
            <div className="bg-muted p-4 rounded-md">
              <pre className="text-sm font-mono">qmims config setup</pre>
            </div>
          </div>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Configuration File</h2>

        <p>Configuration settings are stored in:</p>

        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Linux/macOS</strong>: <code>~/.config/qmims/config.json</code> or <code>~/.qmimsrc</code>
          </li>
          <li>
            <strong>Windows</strong>: <code>%APPDATA%\qmims\config.json</code> or <code>%USERPROFILE%\.qmimsrc</code>
          </li>
        </ul>

        <p>The configuration file uses a JSON structure with the following sections:</p>

        <div className="bg-muted p-4 rounded-md">
          <pre className="text-sm font-mono">
            {`{
  "user": {
    "name": "Your Name",
    "email": "your.email@example.com"
  },
  "defaults": {
    "mode": "auto",
    "templateName": "detailed",
    "outputFilename": "README.md"
  },
  "q": {
    "autoApproveEdits": false
  },
  "git": {
    "autoCommit": false,
    "commitMessageFormat": "docs: update README.md using qmims"
  }
}`}
          </pre>
        </div>

        <Alert>
          <Terminal className="h-4 w-4" />
          <AlertTitle>Tip</AlertTitle>
          <AlertDescription>
            The <code>config setup</code> command provides an interactive way to configure qmims. It's recommended for
            first-time users or when you want to reset your configuration.
          </AlertDescription>
        </Alert>

        <p>
          For more information on configuration options, see the{" "}
          <a href="/docs/configuration" className="text-primary underline">
            Configuration System
          </a>{" "}
          section.
        </p>
      </div>
    </div>
  )
}
