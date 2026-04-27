import Link from "next/link";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertTriangle, Terminal, Info, Wrench } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function TroubleshootingPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          Troubleshooting
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Common setup, authentication, and workflow issues with qmims and Kiro
          CLI
        </p>
      </div>

      <div className="space-y-4">
        <p>
          qmims depends on <strong>Kiro CLI</strong> for generation and editing
          workflows. Most runtime issues fall into one of four categories:
          installation problems, authentication problems, file/path issues, or
          template/configuration mistakes.
        </p>

        <Alert>
          <Info className="h-4 w-4" />
          <AlertTitle>First things to verify</AlertTitle>
          <AlertDescription>
            Before debugging anything deeper, make sure all three of these work:
            <div className="mt-3 rounded-md bg-muted p-4">
              <pre className="text-sm font-mono overflow-auto">{`node --version
kiro-cli --version
kiro-cli whoami`}</pre>
            </div>
          </AlertDescription>
        </Alert>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Common Issues
        </h2>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="kiro-not-installed">
            <AccordionTrigger>Kiro CLI is not installed</AccordionTrigger>
            <AccordionContent className="space-y-4">
              <p>You may see an error indicating that Kiro CLI is missing.</p>

              <div className="rounded-md bg-muted p-4">
                <pre className="text-sm font-mono overflow-auto">{`Error: Kiro CLI is not installed.
qmims requires Kiro CLI to function.`}</pre>
              </div>

              <p>Verify whether Kiro CLI is available:</p>

              <div className="rounded-md bg-muted p-4">
                <pre className="text-sm font-mono overflow-auto">
                  kiro-cli --version
                </pre>
              </div>

              <p>If that fails, install Kiro CLI for your platform:</p>

              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong>Windows 11</strong>: run the installer in PowerShell
                  or Windows Terminal
                </li>
                <li>
                  <strong>Windows 10</strong>: use the downloads page
                </li>
                <li>
                  <strong>macOS</strong>: use the official install script
                </li>
                <li>
                  <strong>Linux</strong>: use the official installation docs for
                  supported options
                </li>
              </ul>

              <div className="space-y-3">
                <div className="rounded-md bg-muted p-4">
                  <pre className="text-sm font-mono overflow-auto">
                    irm &apos;https://cli.kiro.dev/install.ps1&apos; | iex
                  </pre>
                </div>
                <div className="rounded-md bg-muted p-4">
                  <pre className="text-sm font-mono overflow-auto">
                    curl -fsSL https://cli.kiro.dev/install | bash
                  </pre>
                </div>
              </div>

              <p>
                If you are unsure which installer flow applies, check the
                official Kiro installation docs from the{" "}
                <Link href="/docs/installation" className="underline">
                  Installation
                </Link>{" "}
                page.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="kiro-not-authenticated">
            <AccordionTrigger>
              Kiro CLI is installed but not authenticated
            </AccordionTrigger>
            <AccordionContent className="space-y-4">
              <p>
                qmims can only run if Kiro CLI is authenticated through a login
                session or an API key.
              </p>

              <div className="rounded-md bg-muted p-4">
                <pre className="text-sm font-mono overflow-auto">{`Error: Kiro CLI is installed but you are not signed in.`}</pre>
              </div>

              <p>Start with the documented Kiro auth commands:</p>

              <div className="rounded-md bg-muted p-4">
                <pre className="text-sm font-mono overflow-auto">{`kiro-cli login
kiro-cli whoami
kiro-cli doctor`}</pre>
              </div>

              <p>
                If you are on a remote machine or SSH session, device-flow login
                may work better:
              </p>

              <div className="rounded-md bg-muted p-4">
                <pre className="text-sm font-mono overflow-auto">
                  kiro-cli login --use-device-flow
                </pre>
              </div>

              <p>
                For headless or CI environments, use <code>KIRO_API_KEY</code>{" "}
                instead of browser login:
              </p>

              <div className="space-y-3">
                <div className="rounded-md bg-muted p-4">
                  <pre className="text-sm font-mono overflow-auto">{`# Linux / macOS
export KIRO_API_KEY=your_api_key_here`}</pre>
                </div>
                <div className="rounded-md bg-muted p-4">
                  <pre className="text-sm font-mono overflow-auto">{`# Windows PowerShell
$env:KIRO_API_KEY = "your_api_key_here"`}</pre>
                </div>
              </div>

              <Alert>
                <Terminal className="h-4 w-4" />
                <AlertTitle>Important</AlertTitle>
                <AlertDescription>
                  A successful <code>kiro-cli whoami</code> check is usually the
                  fastest confirmation that qmims should be able to proceed.
                </AlertDescription>
              </Alert>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="kiro-doctor">
            <AccordionTrigger>
              Kiro CLI is installed and logged in, but qmims still fails
            </AccordionTrigger>
            <AccordionContent className="space-y-4">
              <p>
                If Kiro appears to be installed and authenticated but qmims
                still exits early, run Kiro&apos;s built-in diagnostics.
              </p>

              <div className="rounded-md bg-muted p-4">
                <pre className="text-sm font-mono overflow-auto">{`kiro-cli whoami
kiro-cli doctor`}</pre>
              </div>

              <p>Things to check:</p>

              <ul className="list-disc space-y-2 pl-6">
                <li>Whether the Kiro login session has expired</li>
                <li>Whether the API key is missing or malformed</li>
                <li>
                  Whether the shell environment differs from your usual terminal
                </li>
                <li>Whether qmims is running in a restricted environment</li>
              </ul>

              <p>
                If you switch between interactive login and API-key auth, verify
                which environment your terminal session is actually using before
                re-running qmims.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="file-permission-errors">
            <AccordionTrigger>File permission or write errors</AccordionTrigger>
            <AccordionContent className="space-y-4">
              <p>
                If qmims or Kiro cannot write the output file, the issue is
                usually filesystem permissions or a locked file.
              </p>

              <div className="rounded-md bg-muted p-4">
                <pre className="text-sm font-mono overflow-auto">{`Error: EACCES: permission denied, open 'README.md'`}</pre>
              </div>

              <p>Try the following:</p>

              <ol className="list-decimal space-y-2 pl-6">
                <li>Make sure the file is not open in another program</li>
                <li>Confirm that the directory is writable</li>
                <li>Run the command from the intended project folder</li>
                <li>Check that your terminal has access to the target path</li>
              </ol>

              <p>On Linux or macOS, inspect file permissions with:</p>

              <div className="rounded-md bg-muted p-4">
                <pre className="text-sm font-mono overflow-auto">{`ls -l README.md
chmod 644 README.md`}</pre>
              </div>

              <p>
                On Windows, check whether the file is read-only or owned by a
                different user context.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="template-not-found">
            <AccordionTrigger>Template not found</AccordionTrigger>
            <AccordionContent className="space-y-4">
              <p>
                This happens when a template name does not exist or a custom
                template was never added properly.
              </p>

              <div className="rounded-md bg-muted p-4">
                <pre className="text-sm font-mono overflow-auto">{`Error: Template 'custom-template' not found`}</pre>
              </div>

              <p>Start by listing available templates:</p>

              <div className="rounded-md bg-muted p-4">
                <pre className="text-sm font-mono overflow-auto">{`qmims templates list
qmims generate --mode template --list-available-templates`}</pre>
              </div>

              <p>If you need to add a custom template:</p>

              <div className="rounded-md bg-muted p-4">
                <pre className="text-sm font-mono overflow-auto">
                  qmims templates add custom-template path/to/template.md
                </pre>
              </div>

              <p>Then generate with it explicitly:</p>

              <div className="rounded-md bg-muted p-4">
                <pre className="text-sm font-mono overflow-auto">
                  qmims generate --mode template:custom-template
                </pre>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="instruction-file-issues">
            <AccordionTrigger>
              Instruct mode finds no embedded instructions
            </AccordionTrigger>
            <AccordionContent className="space-y-4">
              <p>
                Instruct mode requires comments that start with the qmims
                prefix. If none are found, generation cannot proceed.
              </p>

              <div className="rounded-md bg-muted p-4">
                <pre className="text-sm font-mono overflow-auto">{`No embedded instructions found in 'README.md'. Add instructions using <!-- qmims: ... --> syntax.`}</pre>
              </div>

              <p>Make sure your file contains comments like:</p>

              <div className="rounded-md bg-muted p-4">
                <pre className="text-sm font-mono overflow-auto">{`# Project Title

<!-- qmims: Generate a concise project overview based on the repository's main purpose. -->

## Installation

<!-- qmims: Provide installation steps using the detected package manager. -->`}</pre>
              </div>

              <p>
                Also confirm that you are pointing instruct mode at the right
                file:
              </p>

              <div className="rounded-md bg-muted p-4">
                <pre className="text-sm font-mono overflow-auto">
                  qmims generate --mode instruct:path/to/README.md
                </pre>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="readme-fallback">
            <AccordionTrigger>
              qmims edit is targeting the wrong file
            </AccordionTrigger>
            <AccordionContent className="space-y-4">
              <p>
                The <code>edit</code> command defaults to <code>README.md</code>
                . If the requested file is missing, qmims may fall back to a
                discovered README in the same directory.
              </p>

              <p>Use dry run to verify the resolved target before editing:</p>

              <div className="rounded-md bg-muted p-4">
                <pre className="text-sm font-mono overflow-auto">
                  qmims edit --dry-run
                </pre>
              </div>

              <p>
                If you want a specific file, pass the path explicitly instead of
                relying on fallback discovery:
              </p>

              <div className="rounded-md bg-muted p-4">
                <pre className="text-sm font-mono overflow-auto">
                  qmims edit docs/README.md
                </pre>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="command-not-found-qmims">
            <AccordionTrigger>The qmims command is not found</AccordionTrigger>
            <AccordionContent className="space-y-4">
              <p>
                If your shell cannot find <code>qmims</code>, the package may
                not be installed globally or your global bin directory may not
                be on <code>PATH</code>.
              </p>

              <div className="rounded-md bg-muted p-4">
                <pre className="text-sm font-mono overflow-auto">
                  command not found: qmims
                </pre>
              </div>

              <p>Check whether qmims is installed:</p>

              <div className="rounded-md bg-muted p-4">
                <pre className="text-sm font-mono overflow-auto">{`npm list -g qmims
pnpm list -g qmims`}</pre>
              </div>

              <p>If needed, reinstall it globally:</p>

              <div className="rounded-md bg-muted p-4">
                <pre className="text-sm font-mono overflow-auto">{`npm install -g qmims
# or
pnpm add -g qmims`}</pre>
              </div>

              <p>
                On some systems, you may also need to ensure your package
                manager&apos;s global bin directory is included in your shell
                PATH.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="install-permissions">
            <AccordionTrigger>
              Global install permission problems
            </AccordionTrigger>
            <AccordionContent className="space-y-4">
              <p>
                Some environments block global package installation with
                permission errors.
              </p>

              <div className="rounded-md bg-muted p-4">
                <pre className="text-sm font-mono overflow-auto">{`Error: EACCES: permission denied, access '/usr/local/lib/node_modules'`}</pre>
              </div>

              <p>Common approaches:</p>

              <ul className="list-disc space-y-2 pl-6">
                <li>Use a Node version manager</li>
                <li>Adjust npm or pnpm global package configuration</li>
                <li>Use a user-owned install location</li>
                <li>
                  On Windows, run the terminal with appropriate privileges
                </li>
              </ul>

              <p>
                In many cases, using a version manager is safer than forcing
                elevated global installs.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-8">
          Debugging with Verbose Output
        </h2>

        <p>
          When a command fails unexpectedly, add <code>--verbose</code> to see
          more detail about what qmims is doing before it hands off to Kiro.
        </p>

        <div className="rounded-md bg-muted p-4">
          <pre className="text-sm font-mono overflow-auto">{`qmims generate --verbose
qmims edit --verbose`}</pre>
        </div>

        <p>Verbose output is useful for checking:</p>

        <ul className="list-disc space-y-1 pl-6">
          <li>Whether qmims resolved the expected target path</li>
          <li>Whether Kiro availability and auth checks succeeded</li>
          <li>Which mode or template qmims selected</li>
          <li>Whether the issue happens before or during Kiro execution</li>
        </ul>

        <Alert>
          <Wrench className="h-4 w-4" />
          <AlertTitle>Helpful debugging sequence</AlertTitle>
          <AlertDescription>
            A good escalation path is:
            <div className="mt-3 rounded-md bg-muted p-4">
              <pre className="text-sm font-mono overflow-auto">{`kiro-cli whoami
kiro-cli doctor
qmims generate --dry-run
qmims generate --verbose`}</pre>
            </div>
          </AlertDescription>
        </Alert>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-8">
          Dependency Checklist
        </h2>

        <p>
          If you are not sure whether the environment is ready, verify each
          dependency explicitly:
        </p>

        <div className="rounded-md bg-muted p-4">
          <pre className="text-sm font-mono overflow-auto">{`# Check Node.js
node --version

# Check Kiro CLI
kiro-cli --version

# Check Kiro authentication
kiro-cli whoami

# Check qmims
qmims --version`}</pre>
        </div>

        <ul className="list-disc space-y-1 pl-6">
          <li>Node.js version 18 or later</li>
          <li>Kiro CLI installed</li>
          <li>Kiro CLI authenticated or `KIRO_API_KEY` configured</li>
          <li>qmims installed and available on PATH</li>
        </ul>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-8">
          Getting Help
        </h2>

        <p>For command-specific usage, use built-in help:</p>

        <div className="rounded-md bg-muted p-4">
          <pre className="text-sm font-mono overflow-auto">{`qmims --help
qmims generate --help
qmims edit --help
qmims config --help
qmims templates --help`}</pre>
        </div>

        <p>
          For setup walkthroughs, see the{" "}
          <Link href="/docs/installation" className="underline">
            Installation
          </Link>{" "}
          guide. For command behavior details, use the{" "}
          <Link href="/docs/command-reference" className="underline">
            Command Reference
          </Link>
          .
        </p>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-8">
          Common Error Messages
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="m-0 border-t p-0 even:bg-muted">
                <th className="border px-4 py-2 text-left font-bold">
                  Error Message
                </th>
                <th className="border px-4 py-2 text-left font-bold">
                  Likely Cause
                </th>
                <th className="border px-4 py-2 text-left font-bold">
                  Typical Fix
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="m-0 border-t p-0 even:bg-muted">
                <td className="border px-4 py-2 text-left">
                  Kiro CLI is not installed
                </td>
                <td className="border px-4 py-2 text-left">
                  Kiro CLI is missing from the system
                </td>
                <td className="border px-4 py-2 text-left">
                  Install Kiro CLI and verify with{" "}
                  <code>kiro-cli --version</code>
                </td>
              </tr>
              <tr className="m-0 border-t p-0 even:bg-muted">
                <td className="border px-4 py-2 text-left">
                  Kiro CLI is installed but you are not signed in
                </td>
                <td className="border px-4 py-2 text-left">
                  Auth session missing or expired
                </td>
                <td className="border px-4 py-2 text-left">
                  Run <code>kiro-cli login</code> and confirm with{" "}
                  <code>kiro-cli whoami</code>
                </td>
              </tr>
              <tr className="m-0 border-t p-0 even:bg-muted">
                <td className="border px-4 py-2 text-left">
                  No embedded instructions found
                </td>
                <td className="border px-4 py-2 text-left">
                  The target Markdown file has no{" "}
                  <code>{`<!-- qmims: ... -->`}</code> comments
                </td>
                <td className="border px-4 py-2 text-left">
                  Add embedded qmims instructions to the file
                </td>
              </tr>
              <tr className="m-0 border-t p-0 even:bg-muted">
                <td className="border px-4 py-2 text-left">
                  Template not found
                </td>
                <td className="border px-4 py-2 text-left">
                  Wrong template name or missing custom template
                </td>
                <td className="border px-4 py-2 text-left">
                  List templates or add the custom template first
                </td>
              </tr>
              <tr className="m-0 border-t p-0 even:bg-muted">
                <td className="border px-4 py-2 text-left">
                  EACCES: permission denied
                </td>
                <td className="border px-4 py-2 text-left">
                  Filesystem or installation permissions issue
                </td>
                <td className="border px-4 py-2 text-left">
                  Fix permissions or use a writable environment
                </td>
              </tr>
              <tr className="m-0 border-t p-0 even:bg-muted">
                <td className="border px-4 py-2 text-left">
                  command not found: qmims
                </td>
                <td className="border px-4 py-2 text-left">
                  qmims is not installed globally or not on PATH
                </td>
                <td className="border px-4 py-2 text-left">
                  Reinstall qmims and verify the global bin path
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <Alert variant="destructive">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>Still stuck?</AlertTitle>
          <AlertDescription>
            If you still cannot resolve the problem, capture:
            <ul className="mt-2 list-disc space-y-1 pl-6">
              <li>the exact command you ran</li>
              <li>the full error output</li>
              <li>
                the result of <code>kiro-cli whoami</code>
              </li>
              <li>
                the result of <code>kiro-cli doctor</code>
              </li>
              <li>the verbose output from qmims</li>
            </ul>
            <p className="mt-3">
              Then open an issue on the{" "}
              <a
                href="https://github.com/wSoltani/qmims/issues"
                className="underline"
                target="_blank"
                rel="noreferrer"
              >
                qmims GitHub repository
              </a>
              .
            </p>
          </AlertDescription>
        </Alert>
      </div>
    </div>
  );
}
