import Link from "next/link";
import { FileCode, Terminal, Lightbulb, ListChecks } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function TemplatesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          Working with Templates
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Use built-in and custom templates to generate structured README files
          with qmims
        </p>
      </div>

      <div className="space-y-4">
        <p>
          Templates give you a repeatable README structure while still letting{" "}
          <strong>qmims</strong> use <strong>Kiro CLI</strong> to generate the
          actual content. They are useful when you want consistency across
          projects, teams, or repository types.
        </p>

        <Alert>
          <Terminal className="h-4 w-4" />
          <AlertTitle>How template mode works</AlertTitle>
          <AlertDescription>
            In template mode, qmims writes the selected template to the target
            Markdown file first, then asks Kiro to analyze your project and fill
            in the relevant sections while preserving that structure.
          </AlertDescription>
        </Alert>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Using Templates
        </h2>

        <p>Generate a README from a built-in or custom template with:</p>

        <div className="rounded-md bg-muted p-4">
          <pre className="text-sm font-mono">
            qmims generate --mode template:templateName
          </pre>
        </div>

        <p>For example, to use the detailed template:</p>

        <div className="rounded-md bg-muted p-4">
          <pre className="text-sm font-mono">
            qmims generate --mode template:detailed
          </pre>
        </div>

        <p>To list available templates:</p>

        <div className="rounded-md bg-muted p-4">
          <pre className="text-sm font-mono">
            qmims generate --mode template --list-available-templates
          </pre>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Built-in Templates
        </h2>

        <p>
          qmims ships with several built-in templates for common documentation
          styles:
        </p>

        <Tabs defaultValue="basic" className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="basic">Basic</TabsTrigger>
            <TabsTrigger value="detailed">Detailed</TabsTrigger>
            <TabsTrigger value="minimal">Minimal</TabsTrigger>
            <TabsTrigger value="library">Library</TabsTrigger>
            <TabsTrigger value="service">Service</TabsTrigger>
          </TabsList>

          <TabsContent value="basic" className="space-y-4">
            <div className="flex items-center space-x-2">
              <FileCode className="h-5 w-5" />
              <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
                Basic Template
              </h3>
            </div>
            <p>Good for general-purpose projects with a simple README shape.</p>
            <ul className="list-disc space-y-1 pl-6">
              <li>Project title and short overview</li>
              <li>Installation</li>
              <li>Usage</li>
              <li>License</li>
            </ul>
            <div className="rounded-md bg-muted p-4">
              <pre className="text-sm font-mono">{`# Project Name

## Overview

Add a concise description here.

## Installation

Document installation steps here.

## Usage

Add common usage examples here.

## License

Describe the license here.`}</pre>
            </div>
          </TabsContent>

          <TabsContent value="detailed" className="space-y-4">
            <div className="flex items-center space-x-2">
              <FileCode className="h-5 w-5" />
              <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
                Detailed Template
              </h3>
            </div>
            <p>
              Best when you want a more complete README with room for project
              context and maintenance details.
            </p>
            <ul className="list-disc space-y-1 pl-6">
              <li>Project overview</li>
              <li>Features</li>
              <li>Installation</li>
              <li>Usage</li>
              <li>API or architecture notes</li>
              <li>Contributing</li>
              <li>License</li>
              <li>Acknowledgements</li>
            </ul>
            <div className="rounded-md bg-muted p-4">
              <pre className="text-sm font-mono">{`# Project Name

## Overview

Add a comprehensive summary here.

## Features

List the main capabilities here.

## Installation

Document setup requirements and steps here.

## Usage

Add practical examples here.

## Contributing

Describe contribution expectations here.

## License

Describe the license here.`}</pre>
            </div>
          </TabsContent>

          <TabsContent value="minimal" className="space-y-4">
            <div className="flex items-center space-x-2">
              <FileCode className="h-5 w-5" />
              <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
                Minimal Template
              </h3>
            </div>
            <p>
              Useful for smaller repositories that only need the essentials.
            </p>
            <ul className="list-disc space-y-1 pl-6">
              <li>Project title</li>
              <li>Short description</li>
              <li>Quick start</li>
              <li>License</li>
            </ul>
            <div className="rounded-md bg-muted p-4">
              <pre className="text-sm font-mono">{`# Project Name

Short project description.

## Quick Start

Add minimal setup and usage steps here.

## License

Describe the license here.`}</pre>
            </div>
          </TabsContent>

          <TabsContent value="library" className="space-y-4">
            <div className="flex items-center space-x-2">
              <FileCode className="h-5 w-5" />
              <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
                Library Template
              </h3>
            </div>
            <p>Designed for packages, SDKs, and reusable code libraries.</p>
            <ul className="list-disc space-y-1 pl-6">
              <li>Package purpose</li>
              <li>Installation</li>
              <li>API surface or exported modules</li>
              <li>Usage examples</li>
              <li>License</li>
            </ul>
            <div className="rounded-md bg-muted p-4">
              <pre className="text-sm font-mono">{`# Package Name

## Overview

Explain what the library does and who it is for.

## Installation

Add package installation steps here.

## API Reference

Summarize the public API here.

## Examples

Add common usage examples here.

## License

Describe the license here.`}</pre>
            </div>
          </TabsContent>

          <TabsContent value="service" className="space-y-4">
            <div className="flex items-center space-x-2">
              <FileCode className="h-5 w-5" />
              <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
                Service Template
              </h3>
            </div>
            <p>
              A strong fit for APIs, backend services, and deployable systems.
            </p>
            <ul className="list-disc space-y-1 pl-6">
              <li>Service overview</li>
              <li>Features</li>
              <li>API endpoints or workflows</li>
              <li>Authentication notes</li>
              <li>Deployment</li>
              <li>License</li>
            </ul>
            <div className="rounded-md bg-muted p-4">
              <pre className="text-sm font-mono">{`# Service Name

## Overview

Describe the service and its main purpose.

## Features

List key service capabilities here.

## API Endpoints

Document endpoint groups or workflows here.

## Deployment

Add deployment guidance here.

## License

Describe the license here.`}</pre>
            </div>
          </TabsContent>
        </Tabs>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Creating Custom Templates
        </h2>

        <p>
          A custom template is just a Markdown file with the structure you want
          qmims to use. Keep the template readable and focused on layout rather
          than trying to embed tool-specific behavior into it.
        </p>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
          Example custom template
        </h3>

        <div className="rounded-md bg-muted p-4">
          <pre className="text-sm font-mono">{`# Project Name

## Overview

Add a short summary here.

## Why This Exists

Explain the problem the project solves.

## Installation

Add setup instructions here.

## Usage

Add common commands and examples here.

## Project Structure

Summarize important directories or modules here.

## Contributing

Add contribution guidance here.

## License

Describe the license here.`}</pre>
        </div>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
          Add the template to qmims
        </h3>

        <div className="rounded-md bg-muted p-4">
          <pre className="text-sm font-mono">
            qmims templates add my-template path/to/template.md
          </pre>
        </div>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
          Use the template
        </h3>

        <div className="rounded-md bg-muted p-4">
          <pre className="text-sm font-mono">
            qmims generate --mode template:my-template
          </pre>
        </div>

        <Alert>
          <Lightbulb className="h-4 w-4" />
          <AlertTitle>Keep templates structural</AlertTitle>
          <AlertDescription>
            Templates work best when they define headings, section order, and
            expectations clearly. Let qmims and Kiro generate the project-aware
            content based on the repository itself.
          </AlertDescription>
        </Alert>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Template Best Practices
        </h2>

        <div className="space-y-4">
          <div className="rounded-lg border p-4">
            <div className="mb-2 flex items-center gap-2">
              <ListChecks className="h-4 w-4" />
              <h3 className="font-semibold">Use clear section names</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Prefer headings like <code>Overview</code>,{" "}
              <code>Installation</code>, <code>Usage</code>, and{" "}
              <code>License</code> unless your project needs more
              domain-specific sections.
            </p>
          </div>

          <div className="rounded-lg border p-4">
            <div className="mb-2 flex items-center gap-2">
              <ListChecks className="h-4 w-4" />
              <h3 className="font-semibold">
                Match the template to the repo type
              </h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Libraries, CLIs, and services benefit from different README
              structures. Choose or create templates that fit the project rather
              than forcing every repo into the same shape.
            </p>
          </div>

          <div className="rounded-lg border p-4">
            <div className="mb-2 flex items-center gap-2">
              <ListChecks className="h-4 w-4" />
              <h3 className="font-semibold">Avoid overloading the template</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              If a README needs many highly specific rules, generate the base
              file with a template first, then refine sections using embedded
              <code>{` <!-- qmims: ... --> `}</code> instructions and{" "}
              <code>qmims edit</code>.
            </p>
          </div>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Recommended Workflow
        </h2>

        <ol className="list-decimal space-y-2 pl-6">
          <li>Choose a built-in template or create a custom one</li>
          <li>Add the custom template if needed</li>
          <li>Generate a README with template mode</li>
          <li>Review the generated content</li>
          <li>
            Use <code>qmims edit</code> for targeted follow-up changes if needed
          </li>
        </ol>

        <div className="rounded-md bg-muted p-4">
          <pre className="text-sm font-mono">{`qmims templates add internal-standard docs/templates/internal.md
qmims generate --mode template:internal-standard
qmims edit`}</pre>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Related Docs
        </h2>

        <ul className="list-disc space-y-2 pl-6">
          <li>
            <Link
              href="/docs/command-reference/templates"
              className="text-primary underline"
            >
              Templates Command
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
            <Link
              href="/docs/embedded-instructions"
              className="text-primary underline"
            >
              Embedded Instructions
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
