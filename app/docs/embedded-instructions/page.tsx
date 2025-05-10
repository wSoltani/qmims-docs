import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Terminal, Info } from "lucide-react"

export default function EmbeddedInstructionsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Embedded Instructions</h1>
        <p className="text-lg text-muted-foreground mt-2">
          Using embedded instructions to precisely control content generation
        </p>
      </div>

      <div className="space-y-4">
        <p>
          Embedded instructions allow you to precisely control what content Amazon Q generates in your README files.
          They are HTML comments with specific instructions that tell Amazon Q exactly what content to generate and
          where.
        </p>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Instruction Syntax</h2>

        <p>Embedded instructions use HTML comments with a specific prefix:</p>

        <div className="bg-muted p-4 rounded-md">
          <pre className="text-sm font-mono">&lt;!-- qmims: Your instruction here --&gt;</pre>
        </div>

        <p>Amazon Q will process these instructions and replace them with generated content.</p>

        <Alert>
          <Info className="h-4 w-4" />
          <AlertTitle>Note</AlertTitle>
          <AlertDescription>
            The instructions are removed from the final document and replaced with the generated content.
          </AlertDescription>
        </Alert>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Instruction Placement</h2>

        <p>
          Instructions should be placed at the exact location where you want the generated content to appear. For
          example:
        </p>

        <div className="bg-muted p-4 rounded-md">
          <pre className="text-sm font-mono">
            {`# Project Title

<!-- qmims: Generate a concise project overview based on the codebase -->

## Features

<!-- qmims: List the main features of the project based on the code structure -->`}
          </pre>
        </div>

        <p>
          When you run <code>qmims edit</code>, the instructions will be replaced with the generated content:
        </p>

        <div className="bg-muted p-4 rounded-md">
          <pre className="text-sm font-mono">
            {`# Project Title

This project is a Node.js library for processing CSV files with support for streaming, transformation, and validation. It provides a simple API for reading, writing, and manipulating CSV data.

## Features

- Fast streaming CSV parsing and generation
- Data transformation with customizable pipelines
- Schema validation for CSV data
- Support for various CSV dialects and formats
- Automatic type detection and conversion`}
          </pre>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Instruction Types</h2>

        <p>You can use different types of instructions:</p>

        <h3 className="scroll-m-20 text-lg font-semibold tracking-tight">1. Generate content</h3>

        <div className="bg-muted p-4 rounded-md">
          <pre className="text-sm font-mono">&lt;!-- qmims: Generate a list of API endpoints from the code --&gt;</pre>
        </div>

        <h3 className="scroll-m-20 text-lg font-semibold tracking-tight">2. Update existing content</h3>

        <div className="bg-muted p-4 rounded-md">
          <pre className="text-sm font-mono">
            &lt;!-- qmims: Update this installation section based on the package.json file --&gt;
          </pre>
        </div>

        <h3 className="scroll-m-20 text-lg font-semibold tracking-tight">3. Add specific sections</h3>

        <div className="bg-muted p-4 rounded-md">
          <pre className="text-sm font-mono">&lt;!-- qmims: Add a "Contributing" section with guidelines --&gt;</pre>
        </div>

        <h3 className="scroll-m-20 text-lg font-semibold tracking-tight">4. Format content</h3>

        <div className="bg-muted p-4 rounded-md">
          <pre className="text-sm font-mono">&lt;!-- qmims: Format this API documentation as a table --&gt;</pre>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Processing Instructions</h2>

        <p>To process embedded instructions:</p>

        <div className="bg-muted p-4 rounded-md">
          <pre className="text-sm font-mono">
            {`# For existing README files
qmims edit

# For generating new README files with instructions
qmims generate --mode instruct`}
          </pre>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Writing Effective Instructions</h2>

        <p>To get the best results from Amazon Q, follow these guidelines for writing instructions:</p>

        <h3 className="scroll-m-20 text-lg font-semibold tracking-tight">Be Specific</h3>

        <div className="flex space-x-4">
          <div className="flex-1">
            <p className="font-semibold text-destructive">❌ Less Effective:</p>
            <div className="bg-muted p-4 rounded-md">
              <pre className="text-sm font-mono">&lt;!-- qmims: Write about installation --&gt;</pre>
            </div>
          </div>
          <div className="flex-1">
            <p className="font-semibold text-green-600">✅ More Effective:</p>
            <div className="bg-muted p-4 rounded-md">
              <pre className="text-sm font-mono">
                &lt;!-- qmims: Provide step-by-step installation instructions using npm, including any prerequisites and
                verification steps --&gt;
              </pre>
            </div>
          </div>
        </div>

        <h3 className="scroll-m-20 text-lg font-semibold tracking-tight">Provide Context</h3>

        <div className="flex space-x-4">
          <div className="flex-1">
            <p className="font-semibold text-destructive">❌ Less Effective:</p>
            <div className="bg-muted p-4 rounded-md">
              <pre className="text-sm font-mono">&lt;!-- qmims: List the features --&gt;</pre>
            </div>
          </div>
          <div className="flex-1">
            <p className="font-semibold text-green-600">✅ More Effective:</p>
            <div className="bg-muted p-4 rounded-md">
              <pre className="text-sm font-mono">
                &lt;!-- qmims: List the main features of this authentication library based on the code in the src/auth
                directory --&gt;
              </pre>
            </div>
          </div>
        </div>

        <h3 className="scroll-m-20 text-lg font-semibold tracking-tight">Specify Format</h3>

        <div className="flex space-x-4">
          <div className="flex-1">
            <p className="font-semibold text-destructive">❌ Less Effective:</p>
            <div className="bg-muted p-4 rounded-md">
              <pre className="text-sm font-mono">&lt;!-- qmims: Document the API --&gt;</pre>
            </div>
          </div>
          <div className="flex-1">
            <p className="font-semibold text-green-600">✅ More Effective:</p>
            <div className="bg-muted p-4 rounded-md">
              <pre className="text-sm font-mono">
                &lt;!-- qmims: Document the API as a table with columns for Function Name, Parameters, Return Value, and
                Description --&gt;
              </pre>
            </div>
          </div>
        </div>

        <Alert>
          <Terminal className="h-4 w-4" />
          <AlertTitle>Tip</AlertTitle>
          <AlertDescription>
            You can use the <code>--dry-run</code> option to preview the changes without modifying the file:
            <div className="bg-muted p-4 rounded-md mt-2">
              <pre className="text-sm font-mono">qmims edit --dry-run</pre>
            </div>
          </AlertDescription>
        </Alert>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Example Use Cases</h2>

        <h3 className="scroll-m-20 text-lg font-semibold tracking-tight">Updating Installation Instructions</h3>

        <div className="bg-muted p-4 rounded-md">
          <pre className="text-sm font-mono">
            {`## Installation

<!-- qmims: Update the installation instructions based on the latest package.json, including all required dependencies and peer dependencies -->`}
          </pre>
        </div>

        <h3 className="scroll-m-20 text-lg font-semibold tracking-tight">Generating API Documentation</h3>

        <div className="bg-muted p-4 rounded-md">
          <pre className="text-sm font-mono">
            {`## API Reference

<!-- qmims: Generate comprehensive API documentation for all exported functions in src/api.js, including parameters, return values, and examples -->`}
          </pre>
        </div>

        <h3 className="scroll-m-20 text-lg font-semibold tracking-tight">Creating Usage Examples</h3>

        <div className="bg-muted p-4 rounded-md">
          <pre className="text-sm font-mono">
            {`## Usage Examples

<!-- qmims: Create 3-5 practical usage examples showing common use cases for this library, with code snippets and explanations -->`}
          </pre>
        </div>
      </div>
    </div>
  )
}
