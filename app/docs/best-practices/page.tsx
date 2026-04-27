import Link from "next/link";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Terminal, Lightbulb, ShieldCheck, FileText } from "lucide-react";

export default function BestPracticesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          Best Practices
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Practical guidance for getting high-quality results from qmims and
          Kiro CLI
        </p>
      </div>

      <div className="space-y-4">
        <p>
          qmims works best when you treat README generation as an iterative
          workflow rather than a one-click final step. Use Kiro-backed
          generation to create a strong draft, then refine structure,
          instructions, and examples until the documentation matches the real
          behavior of your project.
        </p>

        <Alert>
          <Lightbulb className="h-4 w-4" />
          <AlertTitle>Core idea</AlertTitle>
          <AlertDescription>
            Start broad, then get specific. Use <code>generate</code> for the
            first pass, templates for structure, and embedded instructions for
            precision.
          </AlertDescription>
        </Alert>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Build a Strong README Structure
        </h2>

        <p>A useful README usually answers these questions quickly:</p>

        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>What is this?</CardTitle>
              <CardDescription>Project overview and purpose</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <ul className="list-disc space-y-1 pl-4">
                <li>Project title</li>
                <li>Concise summary</li>
                <li>Main use case</li>
                <li>Key features</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>How do I use it?</CardTitle>
              <CardDescription>Installation and usage flow</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <ul className="list-disc space-y-1 pl-4">
                <li>Prerequisites</li>
                <li>Installation steps</li>
                <li>Commands or examples</li>
                <li>Common workflows</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>What else should I know?</CardTitle>
              <CardDescription>Supporting details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <ul className="list-disc space-y-1 pl-4">
                <li>Configuration</li>
                <li>Contributing notes</li>
                <li>License</li>
                <li>Troubleshooting links</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Choose the Right qmims Workflow
        </h2>

        <div className="space-y-4">
          <div className="rounded-lg border p-4">
            <h3 className="text-xl font-semibold tracking-tight">
              Start with Auto Mode
            </h3>
            <p className="mt-2 text-muted-foreground">
              Use auto mode when you want qmims and Kiro to inspect the project
              and produce a full README draft quickly.
            </p>
            <div className="mt-3 rounded-md bg-muted p-4">
              <pre className="text-sm font-mono overflow-auto">
                qmims generate --mode auto
              </pre>
            </div>
          </div>

          <div className="rounded-lg border p-4">
            <h3 className="text-xl font-semibold tracking-tight">
              Use Templates for Consistency
            </h3>
            <p className="mt-2 text-muted-foreground">
              If you want a predictable structure across multiple repositories,
              generate from a built-in or custom template.
            </p>
            <div className="mt-3 rounded-md bg-muted p-4">
              <pre className="text-sm font-mono overflow-auto">
                qmims generate --mode template:detailed
              </pre>
            </div>
          </div>

          <div className="rounded-lg border p-4">
            <h3 className="text-xl font-semibold tracking-tight">
              Use Embedded Instructions for Precision
            </h3>
            <p className="mt-2 text-muted-foreground">
              Once the document exists, add targeted{" "}
              <code>{`<!-- qmims: ... -->`}</code> comments to control exactly
              what specific sections should say.
            </p>
            <div className="mt-3 rounded-md bg-muted p-4">
              <pre className="text-sm font-mono overflow-auto">qmims edit</pre>
            </div>
          </div>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Write Better Embedded Instructions
        </h2>

        <p>
          Kiro can only be as specific as the instruction you provide. The more
          grounded your instruction is in your project context and desired
          format, the better the output tends to be.
        </p>

        <div className="space-y-4">
          <div className="rounded-lg border p-4">
            <h3 className="font-semibold">1. Be specific about the task</h3>
            <div className="mt-3 grid gap-4 md:grid-cols-2">
              <div>
                <p className="mb-2 font-medium text-destructive">
                  Less effective
                </p>
                <div className="rounded-md bg-muted p-4">
                  <pre className="text-sm font-mono overflow-auto">
                    {`<!-- qmims: Write about installation -->`}
                  </pre>
                </div>
              </div>
              <div>
                <p className="mb-2 font-medium text-green-600">
                  More effective
                </p>
                <div className="rounded-md bg-muted p-4">
                  <pre className="text-sm font-mono overflow-auto">
                    {`<!-- qmims: Provide step-by-step installation instructions using the detected package manager, including prerequisites and a verification command. -->`}
                  </pre>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-lg border p-4">
            <h3 className="font-semibold">2. Add project context</h3>
            <div className="mt-3 grid gap-4 md:grid-cols-2">
              <div>
                <p className="mb-2 font-medium text-destructive">
                  Less effective
                </p>
                <div className="rounded-md bg-muted p-4">
                  <pre className="text-sm font-mono overflow-auto">
                    {`<!-- qmims: List the features -->`}
                  </pre>
                </div>
              </div>
              <div>
                <p className="mb-2 font-medium text-green-600">
                  More effective
                </p>
                <div className="rounded-md bg-muted p-4">
                  <pre className="text-sm font-mono overflow-auto">
                    {`<!-- qmims: List the main user-facing features of this CLI tool based on the commands, options, and workflows implemented in the src directory. -->`}
                  </pre>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-lg border p-4">
            <h3 className="font-semibold">
              3. Ask for a format when it matters
            </h3>
            <div className="mt-3 grid gap-4 md:grid-cols-2">
              <div>
                <p className="mb-2 font-medium text-destructive">
                  Less effective
                </p>
                <div className="rounded-md bg-muted p-4">
                  <pre className="text-sm font-mono overflow-auto">
                    {`<!-- qmims: Document the API -->`}
                  </pre>
                </div>
              </div>
              <div>
                <p className="mb-2 font-medium text-green-600">
                  More effective
                </p>
                <div className="rounded-md bg-muted p-4">
                  <pre className="text-sm font-mono overflow-auto">
                    {`<!-- qmims: Document the exported API as a table with columns for name, purpose, parameters, and return value. -->`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Review AI-Generated Output Carefully
        </h2>

        <p>
          qmims helps you move faster, but you should still review the generated
          content before treating it as final documentation.
        </p>

        <ul className="list-disc space-y-2 pl-6">
          <li>
            Check installation commands against the actual package manager and
            runtime
          </li>
          <li>Verify code examples still match the current API</li>
          <li>Remove claims that are too broad or speculative</li>
          <li>Make sure feature lists reflect real implemented behavior</li>
          <li>Confirm links, filenames, and command names are correct</li>
        </ul>

        <Alert>
          <ShieldCheck className="h-4 w-4" />
          <AlertTitle>Especially important after major changes</AlertTitle>
          <AlertDescription>
            After migrations, renames, or CLI behavior changes, review docs for
            stale commands, outdated screenshots, and old platform guidance.
          </AlertDescription>
        </Alert>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Use Dry Runs and Verbose Output
        </h2>

        <p>
          Before changing important documentation, preview the workflow and use
          diagnostic output when you need more visibility.
        </p>

        <div className="rounded-md bg-muted p-4">
          <pre className="text-sm font-mono overflow-auto">{`qmims generate --dry-run
qmims edit --dry-run
qmims generate --verbose`}</pre>
        </div>

        <ul className="list-disc space-y-2 pl-6">
          <li>
            Use <code>--dry-run</code> to confirm the planned action and target
            file
          </li>
          <li>
            Use <code>--verbose</code> when debugging auth, file resolution, or
            generation behavior
          </li>
          <li>Prefer previewing before overwriting existing docs</li>
        </ul>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Keep Kiro Ready
        </h2>

        <p>
          Since qmims depends on Kiro CLI, a good documentation workflow also
          means keeping your Kiro setup healthy.
        </p>

        <div className="rounded-md bg-muted p-4">
          <pre className="text-sm font-mono overflow-auto">{`kiro-cli whoami
kiro-cli login
kiro-cli doctor`}</pre>
        </div>

        <p>
          For automation or CI, prefer a headless setup using{" "}
          <code>KIRO_API_KEY</code> rather than relying on an interactive login
          session.
        </p>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Prefer Explicit Git Workflows
        </h2>

        <p>
          qmims does not currently expose Git auto-commit as a supported
          feature. If you want generated documentation committed, do it
          explicitly in your normal workflow.
        </p>

        <div className="rounded-md bg-muted p-4">
          <pre className="text-sm font-mono overflow-auto">
            {`qmims generate
git add README.md
git commit -m "docs: update README"`}
          </pre>
        </div>

        <p>
          This keeps generated documentation changes visible and reviewable
          instead of hiding them behind an automatic commit step.
        </p>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Suggested Documentation Workflow
        </h2>

        <ol className="list-decimal space-y-3 pl-6">
          <li>
            <strong>Generate a first draft</strong>
            <div className="mt-2 rounded-md bg-muted p-4">
              <pre className="text-sm font-mono overflow-auto">
                qmims generate --dry-run{"\n"}qmims generate
              </pre>
            </div>
          </li>
          <li>
            <strong>Improve structure if needed</strong>
            <div className="mt-2 rounded-md bg-muted p-4">
              <pre className="text-sm font-mono overflow-auto">
                qmims generate --mode template:detailed
              </pre>
            </div>
          </li>
          <li>
            <strong>Add targeted embedded instructions</strong>
            <div className="mt-2 rounded-md bg-muted p-4">
              <pre className="text-sm font-mono overflow-auto">
                {`<!-- qmims: Update this section based on the latest CLI behavior. -->`}
              </pre>
            </div>
          </li>
          <li>
            <strong>Process those instructions</strong>
            <div className="mt-2 rounded-md bg-muted p-4">
              <pre className="text-sm font-mono overflow-auto">qmims edit</pre>
            </div>
          </li>
          <li>
            <strong>Review and commit the result</strong>
          </li>
        </ol>

        <Alert>
          <FileText className="h-4 w-4" />
          <AlertTitle>Good documentation is iterative</AlertTitle>
          <AlertDescription>
            The best results usually come from a short review cycle: generate,
            refine, verify, and commit.
          </AlertDescription>
        </Alert>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Related Docs
        </h2>

        <ul className="list-disc space-y-2 pl-6">
          <li>
            <Link
              href="/docs/generation-modes"
              className="text-primary underline"
            >
              Generation Modes
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
            <Link
              href="/docs/advanced-usage"
              className="text-primary underline"
            >
              Advanced Usage
            </Link>
          </li>
          <li>
            <Link
              href="/docs/troubleshooting"
              className="text-primary underline"
            >
              Troubleshooting
            </Link>
          </li>
        </ul>

        <Alert>
          <Terminal className="h-4 w-4" />
          <AlertTitle>Pro tip</AlertTitle>
          <AlertDescription>
            If a generated README feels too generic, the fix is usually better
            structure or better instructions, not just rerunning the same
            command unchanged.
          </AlertDescription>
        </Alert>
      </div>
    </div>
  );
}
