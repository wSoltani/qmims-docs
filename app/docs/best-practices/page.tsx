import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Terminal, Lightbulb } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function BestPracticesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Best Practices</h1>
        <p className="text-lg text-muted-foreground mt-2">Tips and recommendations for using qmims effectively</p>
      </div>

      <div className="space-y-4">
        <p>
          This section provides best practices and recommendations for using qmims effectively. Following these
          guidelines will help you create high-quality documentation for your projects.
        </p>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">README Structure</h2>

        <p>A good README typically includes:</p>

        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Essential Information</CardTitle>
              <CardDescription>Core project details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <ul className="list-disc pl-4 space-y-1">
                <li>Project title and description</li>
                <li>Badges (build status, version, license)</li>
                <li>Key features</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Usage Information</CardTitle>
              <CardDescription>How to use the project</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <ul className="list-disc pl-4 space-y-1">
                <li>Installation instructions</li>
                <li>Usage examples with code</li>
                <li>API documentation (if applicable)</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Additional Information</CardTitle>
              <CardDescription>Supporting details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <ul className="list-disc pl-4 space-y-1">
                <li>Contributing guidelines</li>
                <li>License information</li>
                <li>Acknowledgements</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-8">Using qmims Effectively</h2>

        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Lightbulb className="h-5 w-5 text-primary" />
            <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">Start with Auto Mode</h3>
          </div>
          <p>
            For new projects, start with auto mode to generate a comprehensive README. This will analyze your project
            and create a well-structured document.
          </p>
          <div className="bg-muted p-4 rounded-md">
            <pre className="text-sm font-mono">qmims generate --mode auto</pre>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Lightbulb className="h-5 w-5 text-primary" />
            <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">Refine with Templates</h3>
          </div>
          <p>
            Use templates for more structured documentation. Choose a template that matches your project type for
            consistent formatting.
          </p>
          <div className="bg-muted p-4 rounded-md">
            <pre className="text-sm font-mono">qmims generate --mode template:detailed</pre>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Lightbulb className="h-5 w-5 text-primary" />
            <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">Fine-tune with Embedded Instructions</h3>
          </div>
          <p>
            Add specific instructions for precise control over content generation. This is especially useful for
            updating specific sections of your README.
          </p>
          <div className="bg-muted p-4 rounded-md">
            <pre className="text-sm font-mono">qmims edit</pre>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Lightbulb className="h-5 w-5 text-primary" />
            <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">Set Default Configuration</h3>
          </div>
          <p>Configure qmims to match your preferences for a more streamlined workflow.</p>
          <div className="bg-muted p-4 rounded-md">
            <pre className="text-sm font-mono">qmims config setup</pre>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Lightbulb className="h-5 w-5 text-primary" />
            <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">Create Custom Templates</h3>
          </div>
          <p>For projects with specific documentation needs, create custom templates that match your requirements.</p>
          <div className="bg-muted p-4 rounded-md">
            <pre className="text-sm font-mono">qmims templates add my-template path/to/template.md</pre>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Lightbulb className="h-5 w-5 text-primary" />
            <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">Use Dry Run</h3>
          </div>
          <p>Preview changes before applying them to ensure they meet your expectations.</p>
          <div className="bg-muted p-4 rounded-md">
            <pre className="text-sm font-mono">qmims generate --dry-run</pre>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Lightbulb className="h-5 w-5 text-primary" />
            <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">Combine with Git Workflow</h3>
          </div>
          <p>Integrate README generation into your development workflow for consistent documentation.</p>
          <div className="bg-muted p-4 rounded-md">
            <pre className="text-sm font-mono">
              qmims generate && git add README.md && git commit -m "docs: update README"
            </pre>
          </div>
        </div>

        <Alert>
          <Terminal className="h-4 w-4" />
          <AlertTitle>Tip</AlertTitle>
          <AlertDescription>
            Set up a pre-commit hook to automatically update your README before committing changes. This ensures your
            documentation stays up-to-date with your code.
          </AlertDescription>
        </Alert>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-8">Writing Effective Instructions</h2>

        <p>When writing embedded instructions for qmims, follow these guidelines:</p>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="m-0 border-t p-0 even:bg-muted">
                <th className="border px-4 py-2 text-left font-bold">Guideline</th>
                <th className="border px-4 py-2 text-left font-bold">Example</th>
              </tr>
            </thead>
            <tbody>
              <tr className="m-0 border-t p-0 even:bg-muted">
                <td className="border px-4 py-2 text-left">Be specific about what you want</td>
                <td className="border px-4 py-2 text-left">
                  <code>
                    &lt;!-- qmims: Generate a step-by-step installation guide for this Node.js library, including all
                    dependencies --&gt;
                  </code>
                </td>
              </tr>
              <tr className="m-0 border-t p-0 even:bg-muted">
                <td className="border px-4 py-2 text-left">Provide context about the project</td>
                <td className="border px-4 py-2 text-left">
                  <code>
                    &lt;!-- qmims: Describe this REST API framework, highlighting its performance benefits and
                    scalability features --&gt;
                  </code>
                </td>
              </tr>
              <tr className="m-0 border-t p-0 even:bg-muted">
                <td className="border px-4 py-2 text-left">Specify the desired format</td>
                <td className="border px-4 py-2 text-left">
                  <code>
                    &lt;!-- qmims: List the API endpoints as a table with columns for Method, Endpoint, Description, and
                    Required Parameters --&gt;
                  </code>
                </td>
              </tr>
              <tr className="m-0 border-t p-0 even:bg-muted">
                <td className="border px-4 py-2 text-left">Indicate the level of detail</td>
                <td className="border px-4 py-2 text-left">
                  <code>
                    &lt;!-- qmims: Provide a concise overview (2-3 sentences) of the project's purpose and main features
                    --&gt;
                  </code>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-8">Documentation Maintenance</h2>

        <p>
          Keeping your documentation up-to-date is essential. Here are some best practices for maintaining your README:
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Regular Updates</strong>: Update your README whenever you make significant changes to your project
          </li>
          <li>
            <strong>Version Alignment</strong>: Ensure your documentation version matches your code version
          </li>
          <li>
            <strong>Automated Updates</strong>: Use CI/CD pipelines to automatically update documentation
          </li>
          <li>
            <strong>Targeted Edits</strong>: Use <code>qmims edit</code> with embedded instructions to update specific
            sections
          </li>
          <li>
            <strong>Review Generated Content</strong>: Always review AI-generated content for accuracy
          </li>
        </ul>

        <Alert>
          <Lightbulb className="h-4 w-4" />
          <AlertTitle>Pro Tip</AlertTitle>
          <AlertDescription>
            Create a documentation checklist for your project to ensure all important aspects are covered. Use this
            checklist when reviewing your README.
          </AlertDescription>
        </Alert>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-8">Example Workflow</h2>

        <p>Here's an example workflow for creating and maintaining documentation with qmims:</p>

        <ol className="list-decimal pl-6 space-y-2">
          <li>
            <strong>Initial Setup</strong>:
            <div className="bg-muted p-4 rounded-md mt-2">
              <pre className="text-sm font-mono">
                {`# Configure qmims
qmims config setup

# Set default template
qmims config set defaults.templateName detailed`}
              </pre>
            </div>
          </li>
          <li>
            <strong>Generate Initial README</strong>:
            <div className="bg-muted p-4 rounded-md mt-2">
              <pre className="text-sm font-mono">
                {`# Generate README in auto mode
qmims generate --dry-run

# Review and apply changes
qmims generate`}
              </pre>
            </div>
          </li>
          <li>
            <strong>Regular Updates</strong>:
            <div className="bg-muted p-4 rounded-md mt-2">
              <pre className="text-sm font-mono">
                {`# Add embedded instructions to README.md for sections that need updates
# Edit README with embedded instructions
qmims edit --dry-run

# Review and apply changes
qmims edit`}
              </pre>
            </div>
          </li>
          <li>
            <strong>Version Updates</strong>:
            <div className="bg-muted p-4 rounded-md mt-2">
              <pre className="text-sm font-mono">
                {`# Update version-specific information
qmims edit

# Commit changes
git add README.md
git commit -m "docs: update README for version X.Y.Z"
git push`}
              </pre>
            </div>
          </li>
        </ol>
      </div>
    </div>
  )
}
