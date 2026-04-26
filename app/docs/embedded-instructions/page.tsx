import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal, Info, Lightbulb } from "lucide-react";

export default function EmbeddedInstructionsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          Embedded Instructions
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Use embedded qmims comments to guide Kiro-backed README generation and
          editing
        </p>
      </div>

      <div className="space-y-4">
        <p>
          Embedded instructions let you control what <strong>qmims</strong> asks{" "}
          <strong>Kiro CLI</strong> to generate inside a Markdown file. They are
          written as HTML comments and placed directly where you want new or
          updated content to appear.
        </p>

        <Alert>
          <Info className="h-4 w-4" />
          <AlertTitle>Kiro-backed workflow</AlertTitle>
          <AlertDescription>
            qmims now runs on Kiro CLI rather than Amazon Q. The instruction
            syntax stays simple, but the underlying execution, authentication,
            and troubleshooting flow now use Kiro commands.
          </AlertDescription>
        </Alert>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Instruction Syntax
        </h2>

        <p>
          Embedded instructions use an HTML comment beginning with the{" "}
          <code>qmims</code> prefix:
        </p>

        <div className="rounded-md bg-muted p-4">
          <pre className="text-sm font-mono">
            {`<!-- qmims: Your instruction here -->`}
          </pre>
        </div>

        <p>
          qmims passes these instructions to Kiro, which reads the surrounding
          Markdown context and updates the file accordingly.
        </p>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Where to Place Instructions
        </h2>

        <p>
          Place each instruction exactly where you want the generated content to
          appear. That makes the intent clear and helps qmims preserve the
          structure of your document.
        </p>

        <div className="rounded-md bg-muted p-4">
          <pre className="text-sm font-mono overflow-auto">
            {`# Project Title

<!-- qmims: Generate a concise overview of the repository's purpose and primary use case. -->

## Features

<!-- qmims: List the main user-facing features based on the current codebase. -->

## Installation

<!-- qmims: Add installation steps using the detected package manager and runtime requirements. -->`}
          </pre>
        </div>

        <p>
          After processing, the surrounding Markdown should contain the
          generated content in those sections rather than empty placeholders.
        </p>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Multiple Instructions
        </h2>

        <p>
          qmims supports multiple embedded instructions in the same file. This
          is especially useful when you want different sections of a README to
          be guided independently.
        </p>

        <div className="rounded-md bg-muted p-4">
          <pre className="text-sm font-mono overflow-auto">
            {`# My Library

<!-- qmims: Write a short project summary focused on what problem this library solves. -->

## Installation

<!-- qmims: Provide install instructions for npm and pnpm if applicable. -->

## Usage

<!-- qmims: Add two practical usage examples for the library's main entry points. -->

## API Notes

<!-- qmims: Summarize the most important exported functions or classes. -->`}
          </pre>
        </div>

        <Alert>
          <Info className="h-4 w-4" />
          <AlertTitle>Important behavior</AlertTitle>
          <AlertDescription>
            qmims now uses <strong>all discovered embedded instructions</strong>{" "}
            when building the Kiro prompt flow, not just the first instruction
            in the file.
          </AlertDescription>
        </Alert>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Typical Instruction Types
        </h2>

        <p>
          You can use embedded comments for many kinds of documentation work:
        </p>

        <h3 className="scroll-m-20 text-lg font-semibold tracking-tight">
          1. Generate new content
        </h3>

        <div className="rounded-md bg-muted p-4">
          <pre className="text-sm font-mono">
            {`<!-- qmims: Generate a list of API endpoints based on the server routes in this repository. -->`}
          </pre>
        </div>

        <h3 className="scroll-m-20 text-lg font-semibold tracking-tight">
          2. Refresh outdated sections
        </h3>

        <div className="rounded-md bg-muted p-4">
          <pre className="text-sm font-mono">
            {`<!-- qmims: Update this installation section to match the current package manager, runtime, and CLI requirements. -->`}
          </pre>
        </div>

        <h3 className="scroll-m-20 text-lg font-semibold tracking-tight">
          3. Add a section with a specific purpose
        </h3>

        <div className="rounded-md bg-muted p-4">
          <pre className="text-sm font-mono">
            {`<!-- qmims: Add a Contributing section with practical setup and pull request guidance for this repository. -->`}
          </pre>
        </div>

        <h3 className="scroll-m-20 text-lg font-semibold tracking-tight">
          4. Request a specific format
        </h3>

        <div className="rounded-md bg-muted p-4">
          <pre className="text-sm font-mono">
            {`<!-- qmims: Document these commands as a table with columns for command, purpose, and example usage. -->`}
          </pre>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          How to Process Instructions
        </h2>

        <p>
          There are two main ways to work with embedded instructions, depending
          on whether you are creating a new file or updating an existing one.
        </p>

        <div className="rounded-md bg-muted p-4">
          <pre className="text-sm font-mono">
            {`# Process instructions from an existing Markdown file
qmims edit

# Process instructions from a specific file
qmims edit path/to/README.md

# Generate using embedded instructions
qmims generate --mode instruct

# Generate using embedded instructions from a specific file
qmims generate --mode instruct:path/to/README.md`}
          </pre>
        </div>

        <p>
          Use <code>edit</code> when you already have a Markdown file in place.
          Use <code>generate --mode instruct</code> when you want the
          instruction file itself to drive README creation.
        </p>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Writing Effective Instructions
        </h2>

        <p>
          Kiro generally produces better results when your instructions are
          explicit, contextual, and format-aware.
        </p>

        <h3 className="scroll-m-20 text-lg font-semibold tracking-tight">
          Be Specific
        </h3>

        <div className="space-y-4">
          <div>
            <p className="font-semibold text-destructive">Less effective</p>
            <div className="rounded-md bg-muted p-4">
              <pre className="text-sm font-mono">
                {`<!-- qmims: Write about installation. -->`}
              </pre>
            </div>
          </div>
          <div>
            <p className="font-semibold text-green-600 dark:text-green-500">
              More effective
            </p>
            <div className="rounded-md bg-muted p-4">
              <pre className="text-sm font-mono">
                {`<!-- qmims: Provide step-by-step installation instructions using the detected package manager, including prerequisites and a quick verification command. -->`}
              </pre>
            </div>
          </div>
        </div>

        <h3 className="scroll-m-20 text-lg font-semibold tracking-tight">
          Provide Context
        </h3>

        <div className="space-y-4">
          <div>
            <p className="font-semibold text-destructive">Less effective</p>
            <div className="rounded-md bg-muted p-4">
              <pre className="text-sm font-mono">
                {`<!-- qmims: List the features. -->`}
              </pre>
            </div>
          </div>
          <div>
            <p className="font-semibold text-green-600 dark:text-green-500">
              More effective
            </p>
            <div className="rounded-md bg-muted p-4">
              <pre className="text-sm font-mono">
                {`<!-- qmims: List the main features of this authentication service based on the API routes, middleware, and token-handling modules. -->`}
              </pre>
            </div>
          </div>
        </div>

        <h3 className="scroll-m-20 text-lg font-semibold tracking-tight">
          Ask for a Format
        </h3>

        <div className="space-y-4">
          <div>
            <p className="font-semibold text-destructive">Less effective</p>
            <div className="rounded-md bg-muted p-4">
              <pre className="text-sm font-mono">
                {`<!-- qmims: Document the commands. -->`}
              </pre>
            </div>
          </div>
          <div>
            <p className="font-semibold text-green-600 dark:text-green-500">
              More effective
            </p>
            <div className="rounded-md bg-muted p-4">
              <pre className="text-sm font-mono">
                {`<!-- qmims: Document the CLI commands as a Markdown table with columns for command, description, and example usage. -->`}
              </pre>
            </div>
          </div>
        </div>

        <h3 className="scroll-m-20 text-lg font-semibold tracking-tight">
          Control Length and Tone
        </h3>

        <div className="space-y-4">
          <div>
            <p className="font-semibold text-destructive">Less effective</p>
            <div className="rounded-md bg-muted p-4">
              <pre className="text-sm font-mono">
                {`<!-- qmims: Describe the project. -->`}
              </pre>
            </div>
          </div>
          <div>
            <p className="font-semibold text-green-600 dark:text-green-500">
              More effective
            </p>
            <div className="rounded-md bg-muted p-4">
              <pre className="text-sm font-mono">
                {`<!-- qmims: Write a concise two-paragraph project overview in a practical, developer-focused tone. -->`}
              </pre>
            </div>
          </div>
        </div>

        <Alert>
          <Lightbulb className="h-4 w-4" />
          <AlertTitle>Best practice</AlertTitle>
          <AlertDescription>
            Treat each embedded instruction like a small prompt. The clearer you
            are about scope, source context, desired tone, and output format,
            the better the generated Markdown usually becomes.
          </AlertDescription>
        </Alert>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Kiro Setup and Troubleshooting
        </h2>

        <p>
          Embedded instructions rely on the same Kiro-backed runtime as the rest
          of qmims. If processing fails, verify your environment first:
        </p>

        <div className="rounded-md bg-muted p-4">
          <pre className="text-sm font-mono">
            {`kiro-cli whoami
kiro-cli login
kiro-cli doctor`}
          </pre>
        </div>

        <p>
          For headless or CI use, Kiro can authenticate with{" "}
          <code>KIRO_API_KEY</code>.
        </p>

        <div className="rounded-md bg-muted p-4">
          <pre className="text-sm font-mono">
            {`# Linux / macOS
export KIRO_API_KEY=your_api_key_here

# Windows PowerShell
$env:KIRO_API_KEY = "your_api_key_here"`}
          </pre>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Preview Before You Apply Changes
        </h2>

        <p>
          If you want to inspect the workflow before making updates, use dry-run
          mode:
        </p>

        <div className="rounded-md bg-muted p-4">
          <pre className="text-sm font-mono">
            {`qmims edit --dry-run
qmims generate --mode instruct --dry-run`}
          </pre>
        </div>

        <Alert>
          <Terminal className="h-4 w-4" />
          <AlertTitle>Tip</AlertTitle>
          <AlertDescription>
            Dry-run mode is especially useful when you are editing an important
            README, testing a new instruction style, or confirming which file
            qmims will target before invoking Kiro.
          </AlertDescription>
        </Alert>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Example Use Cases
        </h2>

        <h3 className="scroll-m-20 text-lg font-semibold tracking-tight">
          Updating installation steps
        </h3>

        <div className="rounded-md bg-muted p-4">
          <pre className="text-sm font-mono overflow-auto">
            {`## Installation

<!-- qmims: Update the installation instructions to reflect the current runtime requirements, package manager commands, and setup verification steps. -->`}
          </pre>
        </div>

        <h3 className="scroll-m-20 text-lg font-semibold tracking-tight">
          Generating API documentation
        </h3>

        <div className="rounded-md bg-muted p-4">
          <pre className="text-sm font-mono overflow-auto">
            {`## API Reference

<!-- qmims: Generate API documentation for the main exported functions and classes, including parameters, return values, and short usage notes. -->`}
          </pre>
        </div>

        <h3 className="scroll-m-20 text-lg font-semibold tracking-tight">
          Creating usage examples
        </h3>

        <div className="rounded-md bg-muted p-4">
          <pre className="text-sm font-mono overflow-auto">
            {`## Usage Examples

<!-- qmims: Add 3 practical usage examples that reflect the most common developer workflows supported by this project. -->`}
          </pre>
        </div>

        <h3 className="scroll-m-20 text-lg font-semibold tracking-tight">
          Refreshing a migration note
        </h3>

        <div className="rounded-md bg-muted p-4">
          <pre className="text-sm font-mono overflow-auto">
            {`## Migration Notes

<!-- qmims: Update this section to explain the migration from Amazon Q CLI to Kiro CLI, including new install, login, and troubleshooting commands. -->`}
          </pre>
        </div>
      </div>
    </div>
  );
}
