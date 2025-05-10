import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertTriangle, Terminal } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function TroubleshootingPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Troubleshooting</h1>
        <p className="text-lg text-muted-foreground mt-2">Solutions for common issues with qmims</p>
      </div>

      <div className="space-y-4">
        <p>
          This section provides solutions for common issues you might encounter when using qmims. If you're experiencing
          a problem not covered here, please check the GitHub repository for more information.
        </p>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Common Issues</h2>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="amazon-q-auth">
            <AccordionTrigger>Amazon Q Authentication Issues</AccordionTrigger>
            <AccordionContent className="space-y-4">
              <p>If you encounter authentication issues with Amazon Q:</p>

              <div className="bg-muted p-4 rounded-md">
                <pre className="text-sm font-mono">
                  Error: Amazon Q Developer CLI is not available or not authenticated.
                </pre>
              </div>

              <p>Solution:</p>

              <ol className="list-decimal pl-6 space-y-2">
                <li>Ensure Amazon Q CLI is installed</li>
                <li>
                  Authenticate with:
                  <div className="bg-muted p-4 rounded-md mt-2">
                    <pre className="text-sm font-mono">q login</pre>
                  </div>
                </li>
                <li>
                  Verify with:
                  <div className="bg-muted p-4 rounded-md mt-2">
                    <pre className="text-sm font-mono">q chat "Hello"</pre>
                  </div>
                </li>
              </ol>

              <p>If you're still having issues, try logging out and logging back in:</p>

              <div className="bg-muted p-4 rounded-md">
                <pre className="text-sm font-mono">
                  {`q logout
q login`}
                </pre>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="file-permission">
            <AccordionTrigger>File Permission Errors</AccordionTrigger>
            <AccordionContent className="space-y-4">
              <p>If you encounter file permission errors:</p>

              <div className="bg-muted p-4 rounded-md">
                <pre className="text-sm font-mono">Error: EACCES: permission denied, open 'README.md'</pre>
              </div>

              <p>Solution:</p>

              <ol className="list-decimal pl-6 space-y-2">
                <li>Check file permissions</li>
                <li>Run with appropriate privileges</li>
                <li>Ensure the file is not open in another program</li>
              </ol>

              <p>On Linux/macOS, you can check and change file permissions:</p>

              <div className="bg-muted p-4 rounded-md">
                <pre className="text-sm font-mono">
                  {`# Check permissions
ls -l README.md

# Change permissions
chmod 644 README.md`}
                </pre>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="template-not-found">
            <AccordionTrigger>Template Not Found</AccordionTrigger>
            <AccordionContent className="space-y-4">
              <p>If a template cannot be found:</p>

              <div className="bg-muted p-4 rounded-md">
                <pre className="text-sm font-mono">Error: Template 'custom-template' not found</pre>
              </div>

              <p>Solution:</p>

              <ol className="list-decimal pl-6 space-y-2">
                <li>Check the template name</li>
                <li>
                  List available templates:
                  <div className="bg-muted p-4 rounded-md mt-2">
                    <pre className="text-sm font-mono">qmims templates list</pre>
                  </div>
                </li>
                <li>
                  Add the template if it doesn't exist:
                  <div className="bg-muted p-4 rounded-md mt-2">
                    <pre className="text-sm font-mono">qmims templates add custom-template path/to/template.md</pre>
                  </div>
                </li>
              </ol>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="installation-issues">
            <AccordionTrigger>Installation Issues</AccordionTrigger>
            <AccordionContent className="space-y-4">
              <p>If you encounter issues during installation:</p>

              <div className="bg-muted p-4 rounded-md">
                <pre className="text-sm font-mono">
                  Error: EACCES: permission denied, access '/usr/local/lib/node_modules'
                </pre>
              </div>

              <p>Solution:</p>

              <ol className="list-decimal pl-6 space-y-2">
                <li>
                  Install with sudo (Linux/macOS):
                  <div className="bg-muted p-4 rounded-md mt-2">
                    <pre className="text-sm font-mono">sudo npm install -g qmims</pre>
                  </div>
                </li>
                <li>
                  Or fix npm permissions:
                  <div className="bg-muted p-4 rounded-md mt-2">
                    <pre className="text-sm font-mono">
                      npm config set prefix ~/.npm mkdir -p ~/.npm npm install -g qmims
                    </pre>
                  </div>
                </li>
                <li>On Windows, run Command Prompt as Administrator</li>
              </ol>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="command-not-found">
            <AccordionTrigger>Command Not Found</AccordionTrigger>
            <AccordionContent className="space-y-4">
              <p>If you get a "command not found" error:</p>

              <div className="bg-muted p-4 rounded-md">
                <pre className="text-sm font-mono">command not found: qmims</pre>
              </div>

              <p>Solution:</p>

              <ol className="list-decimal pl-6 space-y-2">
                <li>
                  Ensure qmims is installed:
                  <div className="bg-muted p-4 rounded-md mt-2">
                    <pre className="text-sm font-mono">npm list -g qmims</pre>
                  </div>
                </li>
                <li>
                  Check if the npm bin directory is in your PATH:
                  <div className="bg-muted p-4 rounded-md mt-2">
                    <pre className="text-sm font-mono">echo $PATH</pre>
                  </div>
                </li>
                <li>
                  Add npm bin to PATH if needed:
                  <div className="bg-muted p-4 rounded-md mt-2">
                    <pre className="text-sm font-mono">
                      export PATH="$PATH:$(npm bin -g)" echo 'export PATH="$PATH:$(npm bin -g)"' &gt;&gt; ~/.bashrc
                    </pre>
                  </div>
                </li>
              </ol>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-8">Debugging</h2>

        <p>For detailed debugging information, use the verbose flag:</p>

        <div className="bg-muted p-4 rounded-md">
          <pre className="text-sm font-mono">qmims generate --verbose</pre>
        </div>

        <p>This will show:</p>

        <ul className="list-disc pl-6 space-y-1">
          <li>Command execution details</li>
          <li>Amazon Q interactions</li>
          <li>File operations</li>
          <li>Error messages with stack traces</li>
        </ul>

        <Alert>
          <Terminal className="h-4 w-4" />
          <AlertTitle>Tip</AlertTitle>
          <AlertDescription>
            When reporting issues, always include the output from running the command with the <code>--verbose</code>{" "}
            flag.
          </AlertDescription>
        </Alert>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Checking Dependencies</h2>

        <p>
          Many issues with qmims are related to its dependencies. You can check if all dependencies are correctly
          installed:
        </p>

        <div className="bg-muted p-4 rounded-md">
          <pre className="text-sm font-mono">
            {`# Check Node.js version
node --version

# Check Amazon Q CLI installation
q --version

# Check qmims version
qmims --version`}
          </pre>
        </div>

        <p>Make sure you have:</p>

        <ul className="list-disc pl-6 space-y-1">
          <li>Node.js version 18.x or later</li>
          <li>Amazon Q Developer CLI installed and authenticated</li>
          <li>qmims installed globally</li>
        </ul>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Getting Help</h2>

        <p>For command-specific help:</p>

        <div className="bg-muted p-4 rounded-md">
          <pre className="text-sm font-mono">
            {`qmims --help
qmims generate --help
qmims edit --help
qmims config --help
qmims templates --help`}
          </pre>
        </div>

        <Alert variant="destructive">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>Still Having Issues?</AlertTitle>
          <AlertDescription>
            If you're still experiencing problems after trying these solutions, please open an issue on the{" "}
            <a href="https://github.com/wSoltani/qmims/issues" className="underline" target="_blank" rel="noreferrer">
              GitHub repository
            </a>
            .
          </AlertDescription>
        </Alert>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Common Error Messages</h2>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="m-0 border-t p-0 even:bg-muted">
                <th className="border px-4 py-2 text-left font-bold">Error Message</th>
                <th className="border px-4 py-2 text-left font-bold">Possible Cause</th>
                <th className="border px-4 py-2 text-left font-bold">Solution</th>
              </tr>
            </thead>
            <tbody>
              <tr className="m-0 border-t p-0 even:bg-muted">
                <td className="border px-4 py-2 text-left">Amazon Q Developer CLI is not available</td>
                <td className="border px-4 py-2 text-left">Amazon Q CLI not installed or not authenticated</td>
                <td className="border px-4 py-2 text-left">Install and authenticate Amazon Q CLI</td>
              </tr>
              <tr className="m-0 border-t p-0 even:bg-muted">
                <td className="border px-4 py-2 text-left">ENOENT: no such file or directory</td>
                <td className="border px-4 py-2 text-left">File or directory not found</td>
                <td className="border px-4 py-2 text-left">Check file paths and current directory</td>
              </tr>
              <tr className="m-0 border-t p-0 even:bg-muted">
                <td className="border px-4 py-2 text-left">EACCES: permission denied</td>
                <td className="border px-4 py-2 text-left">Insufficient permissions</td>
                <td className="border px-4 py-2 text-left">Check file permissions or run with elevated privileges</td>
              </tr>
              <tr className="m-0 border-t p-0 even:bg-muted">
                <td className="border px-4 py-2 text-left">Template not found</td>
                <td className="border px-4 py-2 text-left">Template name is incorrect or template doesn't exist</td>
                <td className="border px-4 py-2 text-left">Check template name or add the template</td>
              </tr>
              <tr className="m-0 border-t p-0 even:bg-muted">
                <td className="border px-4 py-2 text-left">Invalid configuration</td>
                <td className="border px-4 py-2 text-left">Configuration file is corrupted</td>
                <td className="border px-4 py-2 text-left">Run qmims config setup to reset configuration</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
