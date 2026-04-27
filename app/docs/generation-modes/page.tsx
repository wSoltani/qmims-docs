import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Lightbulb, FileCode, FileText, Terminal } from "lucide-react";

export default function GenerationModesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          Generation Modes
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Different ways to generate README files with qmims and Kiro CLI
        </p>
      </div>

      <p>
        qmims supports three generation modes: <strong>Auto</strong>,{" "}
        <strong>Template</strong>, and <strong>Instruct</strong>. Each mode uses
        Kiro CLI under the hood, but they differ in how much structure and
        guidance you provide before generation starts.
      </p>

      <Alert>
        <Terminal className="h-4 w-4" />
        <AlertTitle>Kiro-backed workflow</AlertTitle>
        <AlertDescription>
          qmims runs Kiro in documented non-interactive CLI mode. That means the
          quality of the result still depends on your project context, file
          structure, and any instructions or templates you provide.
        </AlertDescription>
      </Alert>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Auto Mode</CardTitle>
            <Lightbulb className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Fully Automatic</div>
            <p className="text-xs text-muted-foreground">
              Kiro analyzes your project and generates a complete README with
              minimal setup.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Template Mode</CardTitle>
            <FileCode className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Structured</div>
            <p className="text-xs text-muted-foreground">
              Start from a built-in or custom README template and let Kiro fill
              it in.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Instruct Mode</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Precise Control</div>
            <p className="text-xs text-muted-foreground">
              Use embedded <code>qmims</code> instructions for targeted,
              section-level guidance.
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="auto" className="mt-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="auto">Auto Mode</TabsTrigger>
          <TabsTrigger value="template">Template Mode</TabsTrigger>
          <TabsTrigger value="instruct">Instruct Mode</TabsTrigger>
        </TabsList>

        <TabsContent value="auto" className="space-y-4">
          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Auto Mode
          </h2>

          <p>
            Auto mode is the fastest way to generate a README. qmims asks Kiro
            to inspect the current project and produce a complete Markdown file
            based on what it finds.
          </p>

          <div className="rounded-md bg-muted p-4">
            <pre className="text-sm font-mono overflow-auto">
              qmims generate --mode auto
            </pre>
          </div>

          <p>In auto mode, qmims typically asks Kiro to:</p>

          <ol className="list-decimal space-y-2 pl-6">
            <li>Analyze the project structure and source files</li>
            <li>Identify the language, framework, and dependency signals</li>
            <li>Infer the project purpose and main capabilities</li>
            <li>
              Generate a complete README with relevant sections such as
              overview, installation, and usage
            </li>
            <li>Write the final Markdown back to the target output file</li>
          </ol>

          <p>
            Auto mode is ideal when you want a strong first draft quickly or
            when a repository has little or no existing documentation.
          </p>

          <Alert>
            <Lightbulb className="h-4 w-4" />
            <AlertTitle>Best fit</AlertTitle>
            <AlertDescription>
              Use auto mode when speed matters more than structure and you want
              Kiro to make most of the documentation decisions for you.
            </AlertDescription>
          </Alert>
        </TabsContent>

        <TabsContent value="template" className="space-y-4">
          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Template Mode
          </h2>

          <p>
            Template mode starts with a predefined README structure, then asks
            Kiro to fill in the relevant sections while preserving that layout.
          </p>

          <div className="rounded-md bg-muted p-4">
            <pre className="text-sm font-mono overflow-auto">
              qmims generate --mode template:basic
            </pre>
          </div>

          <p>qmims includes these built-in templates:</p>

          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>basic</strong>: Simple README with essential sections
            </li>
            <li>
              <strong>detailed</strong>: More comprehensive documentation layout
            </li>
            <li>
              <strong>minimal</strong>: Lightweight project overview
            </li>
            <li>
              <strong>library</strong>: Better suited to package or API docs
            </li>
            <li>
              <strong>service</strong>: Better suited to services and APIs
            </li>
          </ul>

          <p>You can also list available templates directly:</p>

          <div className="rounded-md bg-muted p-4">
            <pre className="text-sm font-mono overflow-auto">
              qmims generate --mode template --list-available-templates
            </pre>
          </div>

          <p>
            Template mode is useful when you want consistency across multiple
            repositories or when your team prefers a standard documentation
            shape.
          </p>

          <p>
            For more on built-in and custom templates, see{" "}
            <Link href="/docs/templates" className="text-primary underline">
              Working with Templates
            </Link>
            .
          </p>

          <Alert>
            <FileCode className="h-4 w-4" />
            <AlertTitle>Best fit</AlertTitle>
            <AlertDescription>
              Use template mode when structure matters and you want Kiro to fill
              in content without changing the overall document layout.
            </AlertDescription>
          </Alert>
        </TabsContent>

        <TabsContent value="instruct" className="space-y-4">
          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Instruct Mode
          </h2>

          <p>
            Instruct mode uses embedded HTML comments inside a Markdown file to
            tell qmims and Kiro what to generate. This gives you the most
            explicit control over the final content.
          </p>

          <div className="rounded-md bg-muted p-4">
            <pre className="text-sm font-mono overflow-auto">
              {`qmims generate --mode instruct
qmims generate --mode instruct:path/to/README.md`}
            </pre>
          </div>

          <p>
            Instructions use the following syntax and can be placed exactly
            where you want generated content to appear:
          </p>

          <div className="rounded-md bg-muted p-4">
            <pre className="text-sm font-mono overflow-auto overflow-auto">
              {`# Project Title

<!-- qmims: Generate a concise overview of the project based on its primary purpose. -->

## Installation

<!-- qmims: Provide installation steps using the detected package manager and runtime requirements. -->

## Usage

<!-- qmims: Add practical usage examples for the main workflows in this repository. -->`}
            </pre>
          </div>

          <p>
            qmims now uses <strong>all discovered embedded instructions</strong>{" "}
            when building the prompt for Kiro, not just the first one. That
            makes instruct mode much more reliable for multi-section README
            workflows.
          </p>

          <p>Instruct mode is helpful when you want to:</p>

          <ul className="list-disc space-y-2 pl-6">
            <li>Control the exact sections Kiro should generate</li>
            <li>Update only certain parts of an existing README</li>
            <li>Combine project analysis with highly specific instructions</li>
            <li>
              Preserve a hand-written document while refining selected areas
            </li>
          </ul>

          <p>
            For section-by-section editing of an existing file, you can also use{" "}
            <code>qmims edit</code>, which works with the same embedded
            instruction format.
          </p>

          <p>
            For more detail, see{" "}
            <Link
              href="/docs/embedded-instructions"
              className="text-primary underline"
            >
              Embedded Instructions
            </Link>
            .
          </p>

          <Alert>
            <FileText className="h-4 w-4" />
            <AlertTitle>Best fit</AlertTitle>
            <AlertDescription>
              Use instruct mode when precision matters and you want every
              section of the README to follow explicit, embedded guidance.
            </AlertDescription>
          </Alert>
        </TabsContent>
      </Tabs>

      <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-8">
        Choosing the Right Mode
      </h2>

      <div className="space-y-4">
        <div className="space-y-2">
          <p>
            <strong>Use Auto Mode when:</strong>
          </p>
          <ul className="list-disc space-y-1 pl-6">
            <li>You need a quick README draft</li>
            <li>You are documenting a new or lightly documented project</li>
            <li>You want Kiro to infer the document structure for you</li>
          </ul>
        </div>

        <div className="space-y-2">
          <p>
            <strong>Use Template Mode when:</strong>
          </p>
          <ul className="list-disc space-y-1 pl-6">
            <li>You want a predictable document structure</li>
            <li>You need consistency across repositories</li>
            <li>You already know which sections your README should contain</li>
          </ul>
        </div>

        <div className="space-y-2">
          <p>
            <strong>Use Instruct Mode when:</strong>
          </p>
          <ul className="list-disc space-y-1 pl-6">
            <li>You need precise control over generated content</li>
            <li>You want to update targeted sections of an existing README</li>
            <li>
              You want multiple embedded instructions to shape the final file
            </li>
          </ul>
        </div>
      </div>

      <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-8">
        Related commands
      </h2>

      <div className="rounded-md bg-muted p-4">
        <pre className="text-sm font-mono overflow-auto">
          {`qmims generate
qmims generate --mode template:detailed
qmims generate --mode instruct
qmims edit
qmims generate --dry-run`}
        </pre>
      </div>
    </div>
  );
}
