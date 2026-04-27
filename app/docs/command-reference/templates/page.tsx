import Link from "next/link";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal, Info } from "lucide-react";

export default function TemplatesCommandPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          Templates Command
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Manage built-in and custom README templates
        </p>
      </div>

      <div className="space-y-4">
        <p>
          The <code>templates</code> command helps you inspect, add, and remove
          templates used by <code>qmims</code>. Templates are useful when you
          want a consistent README structure across projects while still letting
          Kiro generate the actual content.
        </p>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Syntax
        </h2>

        <div className="rounded-md bg-muted p-4">
          <pre className="text-sm font-mono overflow-auto">
            qmims templates &lt;action&gt; [name] [path]
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
                  List all available templates
                </td>
              </tr>
              <tr className="m-0 border-t p-0 even:bg-muted">
                <td className="border px-4 py-2 text-left">show</td>
                <td className="border px-4 py-2 text-left">
                  Show the content of a specific template
                </td>
              </tr>
              <tr className="m-0 border-t p-0 even:bg-muted">
                <td className="border px-4 py-2 text-left">add</td>
                <td className="border px-4 py-2 text-left">
                  Add a custom template from a Markdown file
                </td>
              </tr>
              <tr className="m-0 border-t p-0 even:bg-muted">
                <td className="border px-4 py-2 text-left">remove</td>
                <td className="border px-4 py-2 text-left">
                  Remove a previously added custom template
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
            <p>List all available templates:</p>
            <div className="mt-2 rounded-md bg-muted p-4">
              <pre className="text-sm font-mono overflow-auto">
                qmims templates list
              </pre>
            </div>
          </div>

          <div>
            <p>Show the content of the built-in basic template:</p>
            <div className="mt-2 rounded-md bg-muted p-4">
              <pre className="text-sm font-mono overflow-auto">
                qmims templates show basic
              </pre>
            </div>
          </div>

          <div>
            <p>Add a custom template from a Markdown file:</p>
            <div className="mt-2 rounded-md bg-muted p-4">
              <pre className="text-sm font-mono overflow-auto">
                qmims templates add my-template path/to/template.md
              </pre>
            </div>
          </div>

          <div>
            <p>Remove a custom template you no longer need:</p>
            <div className="mt-2 rounded-md bg-muted p-4">
              <pre className="text-sm font-mono overflow-auto">
                qmims templates remove my-template
              </pre>
            </div>
          </div>

          <div>
            <p>Use a template after adding it:</p>
            <div className="mt-2 rounded-md bg-muted p-4">
              <pre className="text-sm font-mono overflow-auto">
                qmims generate --mode template:my-template
              </pre>
            </div>
          </div>
        </div>

        <Alert>
          <Info className="h-4 w-4" />
          <AlertTitle>Template workflow note</AlertTitle>
          <AlertDescription>
            The <code>templates</code> command manages template files only. To
            actually generate a README from a template, use{" "}
            <code>qmims generate --mode template:NAME</code>.
          </AlertDescription>
        </Alert>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Built-in Templates
        </h2>

        <p>
          qmims includes several built-in templates for common project types:
        </p>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="m-0 border-t p-0 even:bg-muted">
                <th className="border px-4 py-2 text-left font-bold">
                  Template
                </th>
                <th className="border px-4 py-2 text-left font-bold">
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="m-0 border-t p-0 even:bg-muted">
                <td className="border px-4 py-2 text-left">basic</td>
                <td className="border px-4 py-2 text-left">
                  A simple README with essential sections
                </td>
              </tr>
              <tr className="m-0 border-t p-0 even:bg-muted">
                <td className="border px-4 py-2 text-left">detailed</td>
                <td className="border px-4 py-2 text-left">
                  A more comprehensive README with extended structure
                </td>
              </tr>
              <tr className="m-0 border-t p-0 even:bg-muted">
                <td className="border px-4 py-2 text-left">minimal</td>
                <td className="border px-4 py-2 text-left">
                  A lightweight README for small or straightforward projects
                </td>
              </tr>
              <tr className="m-0 border-t p-0 even:bg-muted">
                <td className="border px-4 py-2 text-left">library</td>
                <td className="border px-4 py-2 text-left">
                  A template focused on package and API documentation
                </td>
              </tr>
              <tr className="m-0 border-t p-0 even:bg-muted">
                <td className="border px-4 py-2 text-left">service</td>
                <td className="border px-4 py-2 text-left">
                  A template tailored to services, APIs, and deployments
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Creating a Custom Template
        </h2>

        <p>
          A custom template is just a Markdown file that provides structure for
          the generated README. qmims writes the template first, then uses Kiro
          to analyze the project and fill in the sections.
        </p>

        <p>A simple example template might look like this:</p>

        <div className="rounded-md bg-muted p-4">
          <pre className="text-sm font-mono overflow-auto">{`# Project Name

## Overview

Add a concise summary here.

## Installation

Document installation steps here.

## Usage

Add examples and common workflows here.

## License

Describe the project's license here.`}</pre>
        </div>

        <p>
          Save that file, then add it to qmims with the <code>add</code> action:
        </p>

        <div className="rounded-md bg-muted p-4">
          <pre className="text-sm font-mono overflow-auto">
            qmims templates add internal-standard docs/templates/internal.md
          </pre>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Recommended Template Workflow
        </h2>

        <ol className="list-decimal space-y-2 pl-6">
          <li>Create or choose a template</li>
          <li>Add it with the templates command if it is custom</li>
          <li>
            Generate a README with{" "}
            <code>qmims generate --mode template:template-name</code>
          </li>
          <li>Review the generated content and make any final refinements</li>
        </ol>

        <Alert>
          <Terminal className="h-4 w-4" />
          <AlertTitle>Tip</AlertTitle>
          <AlertDescription>
            If you frequently use the same template, set it as your default with{" "}
            <code>qmims config set defaults.templateName your-template</code>.
          </AlertDescription>
        </Alert>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Related Docs
        </h2>

        <ul className="list-disc space-y-2 pl-6">
          <li>
            <Link href="/docs/templates" className="text-primary underline">
              Working with Templates
            </Link>
          </li>
          <li>
            <Link
              href="/docs/command-reference/generate"
              className="text-primary underline"
            >
              Generate Command
            </Link>
          </li>
          <li>
            <Link href="/docs/configuration" className="text-primary underline">
              Configuration System
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
