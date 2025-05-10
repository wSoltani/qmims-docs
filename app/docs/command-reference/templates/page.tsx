import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Terminal } from "lucide-react"

export default function TemplatesCommandPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Templates Command</h1>
        <p className="text-lg text-muted-foreground mt-2">Manage README templates</p>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Syntax</h2>

        <div className="bg-muted p-4 rounded-md">
          <pre className="text-sm font-mono">qmims templates &lt;action&gt; [name] [path] [options]</pre>
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
                <td className="border px-4 py-2 text-left">List all available templates</td>
              </tr>
              <tr className="m-0 border-t p-0 even:bg-muted">
                <td className="border px-4 py-2 text-left">show</td>
                <td className="border px-4 py-2 text-left">Show the content of a specific template</td>
              </tr>
              <tr className="m-0 border-t p-0 even:bg-muted">
                <td className="border px-4 py-2 text-left">add</td>
                <td className="border px-4 py-2 text-left">Add a custom template</td>
              </tr>
              <tr className="m-0 border-t p-0 even:bg-muted">
                <td className="border px-4 py-2 text-left">remove</td>
                <td className="border px-4 py-2 text-left">Remove a custom template</td>
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
            <p>List all templates:</p>
            <div className="bg-muted p-4 rounded-md">
              <pre className="text-sm font-mono">qmims templates list</pre>
            </div>
          </div>

          <div>
            <p>Show a specific template:</p>
            <div className="bg-muted p-4 rounded-md">
              <pre className="text-sm font-mono">qmims templates show basic</pre>
            </div>
          </div>

          <div>
            <p>Add a custom template:</p>
            <div className="bg-muted p-4 rounded-md">
              <pre className="text-sm font-mono">qmims templates add my-template path/to/template.md</pre>
            </div>
          </div>

          <div>
            <p>Remove a custom template:</p>
            <div className="bg-muted p-4 rounded-md">
              <pre className="text-sm font-mono">qmims templates remove my-template</pre>
            </div>
          </div>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Built-in Templates</h2>

        <p>qmims includes five built-in templates:</p>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="m-0 border-t p-0 even:bg-muted">
                <th className="border px-4 py-2 text-left font-bold">Template</th>
                <th className="border px-4 py-2 text-left font-bold">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="m-0 border-t p-0 even:bg-muted">
                <td className="border px-4 py-2 text-left">basic</td>
                <td className="border px-4 py-2 text-left">Simple README with essential sections</td>
              </tr>
              <tr className="m-0 border-t p-0 even:bg-muted">
                <td className="border px-4 py-2 text-left">detailed</td>
                <td className="border px-4 py-2 text-left">Comprehensive README with extended sections</td>
              </tr>
              <tr className="m-0 border-t p-0 even:bg-muted">
                <td className="border px-4 py-2 text-left">minimal</td>
                <td className="border px-4 py-2 text-left">Minimal project overview</td>
              </tr>
              <tr className="m-0 border-t p-0 even:bg-muted">
                <td className="border px-4 py-2 text-left">library</td>
                <td className="border px-4 py-2 text-left">Focused on API documentation</td>
              </tr>
              <tr className="m-0 border-t p-0 even:bg-muted">
                <td className="border px-4 py-2 text-left">service</td>
                <td className="border px-4 py-2 text-left">Tailored for web services/APIs</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Creating Custom Templates</h2>

        <p>
          You can create your own custom templates to match your project's specific needs. Templates are Markdown files
          with special comments that serve as placeholders for generated content.
        </p>

        <div className="bg-muted p-4 rounded-md">
          <pre className="text-sm font-mono">
            {`# {{projectName}}

<!-- qmims:generate: Write a concise description of the project based on its structure and purpose -->

## Installation

<!-- qmims:generate: Provide installation instructions based on the detected package manager -->

## Usage

<!-- qmims:generate: Create usage examples based on the project's main functionality -->`}
          </pre>
        </div>

        <Alert>
          <Terminal className="h-4 w-4" />
          <AlertTitle>Tip</AlertTitle>
          <AlertDescription>
            When creating custom templates, you can use the <code>{`{{\\"projectName\\"}}`}</code> placeholder to
            automatically insert the project name based on the directory or package.json.
          </AlertDescription>
        </Alert>

        <p>
          For more information on working with templates, see the{" "}
          <a href="/docs/templates" className="text-primary underline">
            Working with Templates
          </a>{" "}
          section.
        </p>
      </div>
    </div>
  )
}
