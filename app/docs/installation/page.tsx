import Link from "next/link";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Terminal, AlertTriangle, Info } from "lucide-react";

export default function InstallationPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          Installation
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          How to install and set up qmims with Kiro CLI
        </p>
      </div>

      <div className="space-y-4">
        <p>
          <strong>qmims</strong> requires <strong>Node.js 18+</strong> and an
          available, authenticated <strong>Kiro CLI</strong> installation. Once
          both are ready, you can install <code>qmims</code> globally and start
          generating or editing README files.
        </p>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Prerequisites
        </h2>

        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
              1. Node.js
            </h3>
            <p>Install Node.js version 18 or later.</p>
            <div className="rounded-md bg-muted p-4">
              <pre className="text-sm font-mono overflow-auto">
                node --version
              </pre>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
              2. Kiro CLI
            </h3>
            <p>
              Kiro CLI must be installed and authenticated before using qmims.
            </p>

            <Alert>
              <Info className="h-4 w-4" />
              <AlertTitle>Kiro migration note</AlertTitle>
              <AlertDescription>
                qmims was originally built around Amazon Q CLI and has now been
                migrated to <strong>Kiro CLI</strong>. Current setup, auth, and
                troubleshooting guidance all use Kiro commands.
              </AlertDescription>
            </Alert>

            <Tabs defaultValue="windows" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="windows">Windows</TabsTrigger>
                <TabsTrigger value="macos">macOS</TabsTrigger>
                <TabsTrigger value="linux">Linux</TabsTrigger>
              </TabsList>

              <TabsContent value="windows" className="space-y-4">
                <div className="space-y-2">
                  <p>
                    <strong>Windows 11</strong>: run the official installer
                    command in <strong>PowerShell</strong> or{" "}
                    <strong>Windows Terminal</strong>, not Command Prompt.
                  </p>
                  <div className="rounded-md bg-muted p-4">
                    <pre className="text-sm font-mono overflow-auto">
                      irm &apos;https://cli.kiro.dev/install.ps1&apos; | iex
                    </pre>
                  </div>
                </div>

                <div className="space-y-2">
                  <p>
                    <strong>Windows 10</strong>: use the downloads page instead
                    of the Windows 11 installer flow.
                  </p>
                  <p>
                    <a
                      href="https://kiro.dev/downloads/"
                      className="text-primary underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Open Kiro downloads
                    </a>
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="macos" className="space-y-4">
                <p>Install Kiro CLI using the official script:</p>
                <div className="rounded-md bg-muted p-4">
                  <pre className="text-sm font-mono overflow-auto">
                    curl -fsSL https://cli.kiro.dev/install | bash
                  </pre>
                </div>
              </TabsContent>

              <TabsContent value="linux" className="space-y-4">
                <p>
                  Kiro provides Linux installation options through the official
                  installation docs, including packaged distribution guidance.
                </p>
                <p>
                  <a
                    href="https://kiro.dev/docs/cli/installation/"
                    className="text-primary underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Linux installation instructions
                  </a>
                </p>
              </TabsContent>
            </Tabs>
          </div>

          <div className="space-y-2">
            <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
              3. Authenticate Kiro CLI
            </h3>
            <p>Sign in interactively:</p>
            <div className="rounded-md bg-muted p-4">
              <pre className="text-sm font-mono overflow-auto">
                kiro-cli login
              </pre>
            </div>

            <p>Verify that Kiro CLI is available and authenticated:</p>
            <div className="rounded-md bg-muted p-4">
              <pre className="text-sm font-mono overflow-auto">{`kiro-cli --version
kiro-cli whoami`}</pre>
            </div>

            <p>
              For remote or SSH environments, device-flow login may be more
              convenient:
            </p>
            <div className="rounded-md bg-muted p-4">
              <pre className="text-sm font-mono overflow-auto">
                kiro-cli login --use-device-flow
              </pre>
            </div>

            <Alert>
              <Terminal className="h-4 w-4" />
              <AlertTitle>Headless / CI usage</AlertTitle>
              <AlertDescription>
                If you are running qmims in CI or another non-interactive
                environment, set <code>KIRO_API_KEY</code> instead of relying on
                browser login.
                <div className="mt-3 space-y-3">
                  <div className="rounded-md bg-muted p-4">
                    <pre className="text-sm font-mono overflow-auto">{`# Linux / macOS
export KIRO_API_KEY=your_api_key_here`}</pre>
                  </div>
                  <div className="rounded-md bg-muted p-4">
                    <pre className="text-sm font-mono overflow-auto">{`# Windows PowerShell
$env:KIRO_API_KEY = "your_api_key_here"`}</pre>
                  </div>
                </div>
              </AlertDescription>
            </Alert>
          </div>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-8">
          Install qmims
        </h2>

        <Tabs defaultValue="npm">
          <TabsList>
            <TabsTrigger value="npm">npm</TabsTrigger>
            <TabsTrigger value="pnpm">pnpm</TabsTrigger>
            <TabsTrigger value="source">From Source</TabsTrigger>
          </TabsList>

          <TabsContent value="npm" className="space-y-4">
            <p>Install qmims globally with npm:</p>
            <div className="rounded-md bg-muted p-4">
              <pre className="text-sm font-mono overflow-auto">
                npm install -g qmims
              </pre>
            </div>
          </TabsContent>

          <TabsContent value="pnpm" className="space-y-4">
            <p>Install qmims globally with pnpm:</p>
            <div className="rounded-md bg-muted p-4">
              <pre className="text-sm font-mono overflow-auto">
                pnpm add -g qmims
              </pre>
            </div>
          </TabsContent>

          <TabsContent value="source" className="space-y-4">
            <p>To run or build qmims from source:</p>
            <div className="rounded-md bg-muted p-4">
              <pre className="text-sm font-mono overflow-auto">{`git clone https://github.com/wSoltani/qmims.git
cd qmims
pnpm install
pnpm build
pnpm link --global`}</pre>
            </div>
          </TabsContent>
        </Tabs>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-8">
          Verify the installation
        </h2>

        <p>After installation, confirm that qmims is available:</p>
        <div className="rounded-md bg-muted p-4">
          <pre className="text-sm font-mono overflow-auto">qmims --version</pre>
        </div>

        <p>Then verify your Kiro-backed workflow is ready:</p>
        <div className="rounded-md bg-muted p-4">
          <pre className="text-sm font-mono overflow-auto">{`kiro-cli whoami
qmims generate --dry-run`}</pre>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-8">
          Recommended first run
        </h2>

        <p>Once everything is installed, a simple first run looks like this:</p>
        <div className="rounded-md bg-muted p-4">
          <pre className="text-sm font-mono overflow-auto">{`qmims generate
qmims edit`}</pre>
        </div>

        <Alert>
          <Terminal className="h-4 w-4" />
          <AlertTitle>Troubleshooting commands</AlertTitle>
          <AlertDescription>
            If qmims reports that Kiro is missing or not authenticated, these
            are the main commands to check:
            <div className="mt-3 rounded-md bg-muted p-4">
              <pre className="text-sm font-mono overflow-auto">{`kiro-cli whoami
kiro-cli login
kiro-cli doctor`}</pre>
            </div>
          </AlertDescription>
        </Alert>

        <Alert variant="destructive" className="mt-6">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>Need help?</AlertTitle>
          <AlertDescription>
            If installation or authentication fails, check the{" "}
            <Link href="/docs/troubleshooting" className="underline">
              Troubleshooting
            </Link>{" "}
            guide for common Kiro and qmims setup issues.
          </AlertDescription>
        </Alert>
      </div>
    </div>
  );
}
