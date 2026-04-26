import { Badge } from "@/components/ui/badge";

export default function IntroductionPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          Introduction
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          AI-Powered README Generation & Editing
        </p>
      </div>

      <div className="flex items-center space-x-2">
        <Badge variant="outline">Version 0.1.0</Badge>
        <Badge variant="secondary">Node.js ≥18.0.0</Badge>
        <Badge>MIT License</Badge>
      </div>

      <div className="space-y-4">
        <p>
          <strong>qmims</strong> (Q, Make It Make Sense!) is a command-line tool
          that uses <strong>Kiro CLI</strong> to generate, update, and refine{" "}
          <code>README.md</code> files for your projects. It helps you create
          clear, comprehensive, and context-aware documentation with minimal
          effort.
        </p>

        <p>
          The name <strong>qmims</strong> originally came from its Amazon Q
          roots, but the tool has now been fully migrated to{" "}
          <strong>Kiro CLI</strong>. The name stays the same, while the runtime,
          installation flow, and authentication guidance now reflect Kiro.
        </p>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Key Features
        </h2>

        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong>AI-Powered README Generation</strong>: Uses Kiro CLI to
            analyze your codebase and produce relevant documentation
          </li>
          <li>
            <strong>Multiple Generation Modes</strong>:
            <ul className="mt-2 list-disc space-y-1 pl-6">
              <li>
                <strong>Auto</strong>: Fully automatic README generation based
                on project analysis
              </li>
              <li>
                <strong>Template</strong>: Use built-in or custom templates to
                structure your README
              </li>
              <li>
                <strong>Instruct</strong>: Use embedded instructions for more
                precise, guided output
              </li>
            </ul>
          </li>
          <li>
            <strong>Direct Markdown Editing</strong>: Update existing README
            files using embedded <code>qmims</code> instructions
          </li>
          <li>
            <strong>Custom Templates</strong>: Create and manage reusable README
            templates
          </li>
          <li>
            <strong>Configuration Management</strong>: Set defaults for
            generation mode, output filename, and template preferences
          </li>
          <li>
            <strong>Optional Auto-Approval</strong>: Use <code>--yes</code> or
            config defaults to streamline non-interactive Kiro runs
          </li>
        </ul>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          What is qmims?
        </h2>

        <p>
          qmims is a developer-focused CLI for creating and maintaining project
          README files. Instead of starting from a blank page, you can let Kiro
          inspect your repository, infer its structure and purpose, and generate
          documentation that is actually grounded in your codebase.
        </p>

        <p>
          You can use qmims to bootstrap a brand-new README, fill in a
          structured template, or selectively update sections of an existing
          Markdown file with embedded instructions. That makes it useful both
          for greenfield projects and for keeping mature repositories documented
          as they evolve.
        </p>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          How qmims Works
        </h2>

        <ol className="list-decimal space-y-2 pl-6">
          <li>qmims checks that Kiro CLI is installed and authenticated</li>
          <li>
            It selects a generation or editing workflow based on the command you
            run
          </li>
          <li>It invokes Kiro in documented non-interactive CLI mode</li>
          <li>Kiro analyzes the project or target Markdown file</li>
          <li>
            qmims writes the generated or updated README content back to disk
          </li>
        </ol>

        <p>
          For interactive setups, you can authenticate with{" "}
          <code>kiro-cli login</code>. For headless or CI environments, Kiro
          also supports authentication through <code>KIRO_API_KEY</code>.
        </p>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Why Use qmims?
        </h2>

        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong>Save Time</strong>: Generate or refresh README content
            quickly
          </li>
          <li>
            <strong>Improve Quality</strong>: Produce clearer, more complete
            project documentation
          </li>
          <li>
            <strong>Stay Current</strong>: Keep docs aligned with your codebase
            over time
          </li>
          <li>
            <strong>Control the Workflow</strong>: Choose between automatic,
            structured, and instruction-driven modes
          </li>
          <li>
            <strong>Work in Automation</strong>: Support scripted and
            CI-friendly usage with Kiro auth options
          </li>
        </ul>
      </div>
    </div>
  );
}
