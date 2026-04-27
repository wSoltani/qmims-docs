import Link from "next/link";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal, Info, Shield, Workflow } from "lucide-react";

export default function AdvancedUsagePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          Advanced Usage
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Practical workflows, automation patterns, and power-user options for
          qmims
        </p>
      </div>

      <div className="space-y-4">
        <p>
          qmims is designed to be simple for first-time use, but it also
          supports more advanced documentation workflows. This page covers the
          features and patterns that become useful when you want repeatable
          output, safer automation, or tighter integration with your existing
          development process.
        </p>

        <Alert>
          <Info className="h-4 w-4" />
          <AlertTitle>Kiro-backed behavior</AlertTitle>
          <AlertDescription>
            qmims now runs on <strong>Kiro CLI</strong>. Advanced usage
            therefore depends on having Kiro installed and authenticated, either
            through <code>kiro-cli login</code> or a headless{" "}
            <code>KIRO_API_KEY</code> setup.
          </AlertDescription>
        </Alert>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Dry Run Mode
        </h2>

        <p>
          Dry run mode is the safest way to inspect what qmims intends to do
          before it changes any files. This is especially useful when you are
          testing a new template, validating an instruction-driven workflow, or
          confirming that the correct target file is being used.
        </p>

        <div className="rounded-md bg-muted p-4">
          <pre className="text-sm font-mono overflow-auto">{`qmims generate --dry-run
qmims edit --dry-run`}</pre>
        </div>

        <p>Dry run mode is especially useful for:</p>

        <ul className="list-disc space-y-2 pl-6">
          <li>checking the selected generation mode</li>
          <li>confirming the output path before overwriting a file</li>
          <li>verifying fallback README detection in edit workflows</li>
          <li>
            reviewing automation behavior before using <code>--yes</code>
          </li>
        </ul>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Verbose Output
        </h2>

        <p>
          Verbose mode prints additional diagnostic information that can help
          you understand what qmims is doing internally. It is useful when
          debugging Kiro setup issues, template selection, config defaults, or
          command behavior.
        </p>

        <div className="rounded-md bg-muted p-4">
          <pre className="text-sm font-mono overflow-auto">{`qmims generate --verbose
qmims edit --verbose`}</pre>
        </div>

        <p>Verbose output can help you inspect:</p>

        <ul className="list-disc space-y-2 pl-6">
          <li>Kiro availability and authentication checks</li>
          <li>resolved paths and selected execution modes</li>
          <li>prompt preparation and command flow details</li>
          <li>non-zero exit behavior when Kiro fails</li>
        </ul>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Force Overwrite
        </h2>

        <p>
          When generating a README into a path that already exists, qmims
          normally prompts before overwriting the file. Use <code>--force</code>{" "}
          when you already know you want to replace the existing output.
        </p>

        <div className="rounded-md bg-muted p-4">
          <pre className="text-sm font-mono overflow-auto">
            qmims generate --force
          </pre>
        </div>

        <Alert variant="destructive">
          <Shield className="h-4 w-4" />
          <AlertTitle>Use with care</AlertTitle>
          <AlertDescription>
            <code>--force</code> skips the overwrite confirmation prompt. Use it
            only when you are sure the target file should be replaced.
          </AlertDescription>
        </Alert>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Automatic Approval
        </h2>

        <p>
          qmims supports an auto-approval flow for Kiro-backed runs. This is
          useful when you are scripting documentation tasks or running qmims in
          an environment where you do not want interactive permission prompts.
        </p>

        <div className="rounded-md bg-muted p-4">
          <pre className="text-sm font-mono overflow-auto">{`qmims generate --yes
qmims edit --yes`}</pre>
        </div>

        <p>
          You can also make this your default behavior through configuration:
        </p>

        <div className="rounded-md bg-muted p-4">
          <pre className="text-sm font-mono overflow-auto">
            qmims config set q.autoApproveEdits true
          </pre>
        </div>

        <p>
          In the current Kiro-backed workflow, this setting controls whether
          qmims should automatically enable the documented tool-trust behavior
          for non-interactive execution.
        </p>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Custom Output Paths
        </h2>

        <p>
          You are not limited to <code>README.md</code>. If your project uses a
          different filename or stores docs in a dedicated directory, you can
          generate there directly.
        </p>

        <div className="rounded-md bg-muted p-4">
          <pre className="text-sm font-mono overflow-auto">
            qmims generate --output docs/PROJECT-README.md
          </pre>
        </div>

        <p>
          You can also save that preference as a default so you do not need to
          repeat it:
        </p>

        <div className="rounded-md bg-muted p-4">
          <pre className="text-sm font-mono overflow-auto">
            qmims config set defaults.outputFileName docs/PROJECT-README.md
          </pre>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Template-Driven Workflows
        </h2>

        <p>
          Template mode is one of the most useful advanced features because it
          lets you standardize README structure across projects while still
          letting Kiro generate project-specific content.
        </p>

        <div className="rounded-md bg-muted p-4">
          <pre className="text-sm font-mono overflow-auto">{`qmims generate --mode template:detailed
qmims generate --mode template:library
qmims generate --mode template:service`}</pre>
        </div>

        <p>
          A strong pattern is to pick one template family for a team or
          repository type and make it the default:
        </p>

        <div className="rounded-md bg-muted p-4">
          <pre className="text-sm font-mono overflow-auto">
            qmims config set defaults.templateName detailed
          </pre>
        </div>

        <p>
          For more on this, see{" "}
          <Link href="/docs/templates" className="text-primary underline">
            Working with Templates
          </Link>
          .
        </p>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Instruction-Driven Maintenance
        </h2>

        <p>
          One of the best long-term workflows is to generate an initial README,
          then maintain it with embedded instructions. This gives you more
          control than fully regenerating the file every time.
        </p>

        <div className="rounded-md bg-muted p-4">
          <pre className="text-sm font-mono overflow-auto">{`# Generate a first draft
qmims generate --mode template:detailed

# Add embedded qmims instructions to selected sections
# Then update only those sections
qmims edit`}</pre>
        </div>

        <p>
          This works especially well when your README has both stable
          hand-written content and sections that should evolve with the
          codebase, such as installation steps, commands, features, or API
          summaries.
        </p>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Multi-Instruction Instruct Mode
        </h2>

        <p>
          In instruct mode, qmims now uses{" "}
          <strong>all parsed embedded instructions</strong> when preparing the
          Kiro prompt. This makes it much more useful for structured generation
          across several sections of a file.
        </p>

        <div className="rounded-md bg-muted p-4">
          <pre className="text-sm font-mono overflow-auto">{`qmims generate --mode instruct
qmims generate --mode instruct:README.md`}</pre>
        </div>

        <p>
          This is a good fit when you want to treat a Markdown file as a
          generation blueprint rather than as a finished document.
        </p>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Kiro Authentication for Automation
        </h2>

        <p>For local interactive usage, the simplest path is:</p>

        <div className="rounded-md bg-muted p-4">
          <pre className="text-sm font-mono overflow-auto">{`kiro-cli login
kiro-cli whoami`}</pre>
        </div>

        <p>
          For CI or other headless environments, use <code>KIRO_API_KEY</code>:
        </p>

        <div className="rounded-md bg-muted p-4">
          <pre className="text-sm font-mono overflow-auto">{`# Linux / macOS
export KIRO_API_KEY=your_api_key_here

# Windows PowerShell
$env:KIRO_API_KEY = "your_api_key_here"`}</pre>
        </div>

        <p>
          If something looks wrong with the environment, Kiro&apos;s diagnostic
          commands are the first place to check:
        </p>

        <div className="rounded-md bg-muted p-4">
          <pre className="text-sm font-mono overflow-auto">{`kiro-cli whoami
kiro-cli doctor`}</pre>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Combining Options
        </h2>

        <p>
          qmims flags are designed to be composed. A few common advanced command
          combinations include:
        </p>

        <div className="rounded-md bg-muted p-4">
          <pre className="text-sm font-mono overflow-auto">{`# Generate a structured README and replace any existing file
qmims generate --mode template:detailed --output docs/README.md --force

# Preview a precise instruct-based workflow
qmims generate --mode instruct:README.md --dry-run

# Run an automated edit pass with detailed logs
qmims edit docs/README.md --yes --verbose`}</pre>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          CI / Script-Friendly Usage
        </h2>

        <p>
          qmims works well in scripted documentation workflows as long as you
          are explicit about authentication and approvals. A practical
          automation pattern is:
        </p>

        <ol className="list-decimal space-y-2 pl-6">
          <li>
            set up Kiro authentication with <code>KIRO_API_KEY</code>
          </li>
          <li>run a dry-run pass while building the workflow</li>
          <li>
            switch to <code>--yes</code> only when the behavior is already
            validated
          </li>
          <li>commit generated changes using your normal Git process</li>
        </ol>

        <Alert>
          <Workflow className="h-4 w-4" />
          <AlertTitle>Git workflow note</AlertTitle>
          <AlertDescription>
            qmims no longer documents Git auto-commit as a built-in product
            feature. If you want generated documentation committed
            automatically, handle that in your own scripts or CI pipeline.
          </AlertDescription>
        </Alert>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Suggested Advanced Workflow
        </h2>

        <div className="rounded-md bg-muted p-4">
          <pre className="text-sm font-mono overflow-auto">{`# 1. Verify Kiro
kiro-cli whoami

# 2. Configure defaults
qmims config set defaults.templateName detailed
qmims config set defaults.outputFileName README.md

# 3. Preview the workflow
qmims generate --dry-run

# 4. Generate the first README
qmims generate --mode template:detailed

# 5. Add embedded instructions for sections you want to keep current
# 6. Update those sections over time
qmims edit --dry-run
qmims edit`}</pre>
        </div>

        <p>
          This approach gives you a maintainable balance between automation and
          editorial control.
        </p>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Related Docs
        </h2>

        <ul className="list-disc space-y-2 pl-6">
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
              href="/docs/command-reference/edit"
              className="text-primary underline"
            >
              Edit Command
            </Link>
          </li>
          <li>
            <Link href="/docs/configuration" className="text-primary underline">
              Configuration System
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
        </ul>

        <Alert>
          <Terminal className="h-4 w-4" />
          <AlertTitle>Tip</AlertTitle>
          <AlertDescription>
            The best advanced workflow is usually incremental: start with{" "}
            <code>--dry-run</code>, add templates or embedded instructions, and
            only then introduce <code>--yes</code> or automation once the
            results are predictable.
          </AlertDescription>
        </Alert>
      </div>
    </div>
  );
}
