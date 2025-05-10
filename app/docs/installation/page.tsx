import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Terminal, AlertTriangle } from "lucide-react"

export default function InstallationPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Installation</h1>
        <p className="text-lg text-muted-foreground mt-2">How to install and set up qmims</p>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Prerequisites</h2>

        <p>Before installing qmims, ensure you have:</p>

        <div className="space-y-4">
          <div className="space-y-2">
            <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">1. Node.js</h3>
            <p>Version 18.x or later</p>
            <div className="bg-muted p-4 rounded-md">
              <pre className="text-sm font-mono">node --version</pre>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">2. Amazon Q Developer CLI</h3>
            <p>Must be installed and authenticated</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <a
                  href="https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/command-line-installing.html"
                  className="text-primary underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Install Amazon Q Developer CLI
                </a>
              </li>
              <li>
                Authenticate with:
                <div className="bg-muted p-4 rounded-md mt-2">
                  <pre className="text-sm font-mono">q login</pre>
                </div>
              </li>
              <li>
                Verify installation:
                <div className="bg-muted p-4 rounded-md mt-2">
                  <pre className="text-sm font-mono">q chat "What is Amazon Q Developer?"</pre>
                </div>
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">3. pnpm (for source installation)</h3>
            <p>qmims uses pnpm as its package manager for source installation</p>
            <div className="bg-muted p-4 rounded-md">
              <pre className="text-sm font-mono">
                # Install pnpm if not already installed npm install -g pnpm # Verify pnpm installation pnpm --version
              </pre>
            </div>
          </div>
        </div>

        <Alert>
          <Terminal className="h-4 w-4" />
          <AlertTitle>Important</AlertTitle>
          <AlertDescription>
            Make sure Amazon Q Developer CLI is properly authenticated before using qmims.
          </AlertDescription>
        </Alert>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-8">Installation Methods</h2>

        <Tabs defaultValue="npm">
          <TabsList>
            <TabsTrigger value="npm">npm</TabsTrigger>
            <TabsTrigger value="source">From Source</TabsTrigger>
          </TabsList>
          <TabsContent value="npm" className="space-y-4">
            <p>Install qmims globally using npm:</p>
            <div className="bg-muted p-4 rounded-md">
              <pre className="text-sm font-mono">npm install -g qmims</pre>
            </div>
            <p>Or using pnpm:</p>
            <div className="bg-muted p-4 rounded-md">
              <pre className="text-sm font-mono">pnpm add -g qmims</pre>
            </div>
          </TabsContent>
          <TabsContent value="source" className="space-y-4">
            <p>To install from source:</p>
            <div className="bg-muted p-4 rounded-md">
              <pre className="text-sm font-mono">
                git clone https://github.com/wSoltani/qmims.git cd qmims pnpm install pnpm build pnpm link --global
              </pre>
            </div>
          </TabsContent>
        </Tabs>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-8">Verifying Installation</h2>

        <p>After installation, verify that qmims is correctly installed:</p>

        <div className="bg-muted p-4 rounded-md">
          <pre className="text-sm font-mono">qmims --version</pre>
        </div>

        <p>You should see the current version number (0.0.2) displayed.</p>

        <Alert variant="destructive" className="mt-6">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>Troubleshooting</AlertTitle>
          <AlertDescription>
            If you encounter any issues during installation, please refer to the{" "}
            <a href="/docs/troubleshooting" className="underline">
              Troubleshooting
            </a>{" "}
            section.
          </AlertDescription>
        </Alert>
      </div>
    </div>
  )
}
