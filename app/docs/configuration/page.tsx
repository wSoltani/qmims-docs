import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Terminal, Info } from "lucide-react"

export default function ConfigurationPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Configuration System</h1>
        <p className="text-lg text-muted-foreground mt-2">Managing qmims configuration settings</p>
      </div>

      <div className="space-y-4">
        <p>
          qmims uses a configuration system to store user preferences and default settings. This allows you to customize
          the behavior of qmims to match your workflow.
        </p>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Configuration File Location</h2>

        <p>Configuration settings are stored in:</p>

        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Linux/macOS</strong>: <code>~/.config/qmims/config.json</code> or <code>~/.qmimsrc</code>
          </li>
          <li>
            <strong>Windows</strong>: <code>%APPDATA%\qmims\config.json</code> or <code>%USERPROFILE%\.qmimsrc</code>
          </li>
        </ul>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Configuration Structure</h2>

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

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Managing Configuration</h2>

        <p>
          You can manage your configuration using the <code>config</code> command:
        </p>

        <h3 className="scroll-m-20 text-lg font-semibold tracking-tight">Listing Configuration</h3>

        <div className="bg-muted p-4 rounded-md">
          <pre className="text-sm font-mono">qmims config list</pre>
        </div>

        <p>This will display all your current configuration settings.</p>

        <h3 className="scroll-m-20 text-lg font-semibold tracking-tight">Getting a Specific Setting</h3>

        <div className="bg-muted p-4 rounded-md">
          <pre className="text-sm font-mono">qmims config get defaults.mode</pre>
        </div>

        <h3 className="scroll-m-20 text-lg font-semibold tracking-tight">Setting a Configuration Value</h3>

        <div className="bg-muted p-4 rounded-md">
          <pre className="text-sm font-mono">qmims config set defaults.templateName detailed</pre>
        </div>

        <h3 className="scroll-m-20 text-lg font-semibold tracking-tight">Deleting a Configuration Value</h3>

        <div className="bg-muted p-4 rounded-md">
          <pre className="text-sm font-mono">qmims config delete q.autoApproveEdits</pre>
        </div>

        <h3 className="scroll-m-20 text-lg font-semibold tracking-tight">Interactive Setup</h3>

        <div className="bg-muted p-4 rounded-md">
          <pre className="text-sm font-mono">qmims config setup</pre>
        </div>

        <p>
          This will guide you through setting up your configuration interactively, asking you questions about your
          preferences.
        </p>

        <Alert>
          <Info className="h-4 w-4" />
          <AlertTitle>Note</AlertTitle>
          <AlertDescription>
            The <code>config setup</code> command is recommended for first-time users or when you want to reset your
            configuration.
          </AlertDescription>
        </Alert>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Configuration Sections</h2>

        <h3 className="scroll-m-20 text-lg font-semibold tracking-tight">User Information</h3>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="m-0 border-t p-0 even:bg-muted">
                <th className="border px-4 py-2 text-left font-bold">Key</th>
                <th className="border px-4 py-2 text-left font-bold">Description</th>
                <th className="border px-4 py-2 text-left font-bold">Example</th>
              </tr>
            </thead>
            <tbody>
              <tr className="m-0 border-t p-0 even:bg-muted">
                <td className="border px-4 py-2 text-left">user.name</td>
                <td className="border px-4 py-2 text-left">Your name</td>
                <td className="border px-4 py-2 text-left">"John Doe"</td>
              </tr>
              <tr className="m-0 border-t p-0 even:bg-muted">
                <td className="border px-4 py-2 text-left">user.email</td>
                <td className="border px-4 py-2 text-left">Your email address</td>
                <td className="border px-4 py-2 text-left">"john.doe@example.com"</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="scroll-m-20 text-lg font-semibold tracking-tight">Default Settings</h3>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="m-0 border-t p-0 even:bg-muted">
                <th className="border px-4 py-2 text-left font-bold">Key</th>
                <th className="border px-4 py-2 text-left font-bold">Description</th>
                <th className="border px-4 py-2 text-left font-bold">Example</th>
              </tr>
            </thead>
            <tbody>
              <tr className="m-0 border-t p-0 even:bg-muted">
                <td className="border px-4 py-2 text-left">defaults.mode</td>
                <td className="border px-4 py-2 text-left">Default generation mode</td>
                <td className="border px-4 py-2 text-left">"auto"</td>
              </tr>
              <tr className="m-0 border-t p-0 even:bg-muted">
                <td className="border px-4 py-2 text-left">defaults.templateName</td>
                <td className="border px-4 py-2 text-left">Default template name</td>
                <td className="border px-4 py-2 text-left">"detailed"</td>
              </tr>
              <tr className="m-0 border-t p-0 even:bg-muted">
                <td className="border px-4 py-2 text-left">defaults.outputFilename</td>
                <td className="border px-4 py-2 text-left">Default output filename</td>
                <td className="border px-4 py-2 text-left">"README.md"</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="scroll-m-20 text-lg font-semibold tracking-tight">Amazon Q Settings</h3>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="m-0 border-t p-0 even:bg-muted">
                <th className="border px-4 py-2 text-left font-bold">Key</th>
                <th className="border px-4 py-2 text-left font-bold">Description</th>
                <th className="border px-4 py-2 text-left font-bold">Example</th>
              </tr>
            </thead>
            <tbody>
              <tr className="m-0 border-t p-0 even:bg-muted">
                <td className="border px-4 py-2 text-left">q.autoApproveEdits</td>
                <td className="border px-4 py-2 text-left">Automatically approve edits (use with caution)</td>
                <td className="border px-4 py-2 text-left">false</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="scroll-m-20 text-lg font-semibold tracking-tight">Git Integration Settings</h3>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="m-0 border-t p-0 even:bg-muted">
                <th className="border px-4 py-2 text-left font-bold">Key</th>
                <th className="border px-4 py-2 text-left font-bold">Description</th>
                <th className="border px-4 py-2 text-left font-bold">Example</th>
              </tr>
            </thead>
            <tbody>
              <tr className="m-0 border-t p-0 even:bg-muted">
                <td className="border px-4 py-2 text-left">git.autoCommit</td>
                <td className="border px-4 py-2 text-left">Automatically commit changes to git</td>
                <td className="border px-4 py-2 text-left">false</td>
              </tr>
              <tr className="m-0 border-t p-0 even:bg-muted">
                <td className="border px-4 py-2 text-left">git.commitMessageFormat</td>
                <td className="border px-4 py-2 text-left">Format for git commit messages</td>
                <td className="border px-4 py-2 text-left">"docs: update README.md using qmims"</td>
              </tr>
            </tbody>
          </table>
        </div>

        <Alert>
          <Terminal className="h-4 w-4" />
          <AlertTitle>Tip</AlertTitle>
          <AlertDescription>
            You can use environment variables to override configuration settings. For example, setting
            <code>QMIMS_DEFAULTS_MODE=template</code> will override the <code>defaults.mode</code> setting.
          </AlertDescription>
        </Alert>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Configuration Best Practices</h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Set Default Template</strong>: If you frequently use a specific template, set it as your default:
            <div className="bg-muted p-4 rounded-md mt-2">
              <pre className="text-sm font-mono">qmims config set defaults.templateName detailed</pre>
            </div>
          </li>
          <li>
            <strong>Custom Output Path</strong>: If you prefer to store documentation in a specific location:
            <div className="bg-muted p-4 rounded-md mt-2">
              <pre className="text-sm font-mono">qmims config set defaults.outputFilename docs/README.md</pre>
            </div>
          </li>
          <li>
            <strong>Git Integration</strong>: If you want to automatically commit changes:
            <div className="bg-muted p-4 rounded-md mt-2">
              <pre className="text-sm font-mono">
                qmims config set git.autoCommit true qmims config set git.commitMessageFormat "docs: update
                documentation"
              </pre>
            </div>
          </li>
          <li>
            <strong>Use with Caution</strong>: Be careful with settings like <code>q.autoApproveEdits</code>, which can
            make changes without confirmation
          </li>
        </ul>
      </div>
    </div>
  )
}
