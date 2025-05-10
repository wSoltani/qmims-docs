import { FileCode, Terminal } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function TemplatesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Working with Templates</h1>
        <p className="text-lg text-muted-foreground mt-2">
          Using and creating templates for structured README generation
        </p>
      </div>

      <div className="space-y-4">
        <p>
          Templates provide a structured way to generate README files with consistent formatting and sections. They
          allow you to define the structure of your README while letting Amazon Q generate the content.
        </p>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Using Templates</h2>

        <p>To generate a README using a template:</p>

        <div className="bg-muted p-4 rounded-md">
          <pre className="text-sm font-mono">qmims generate --mode template:templateName</pre>
        </div>

        <p>For example, to use the "detailed" template:</p>

        <div className="bg-muted p-4 rounded-md">
          <pre className="text-sm font-mono">qmims generate --mode template:detailed</pre>
        </div>

        <p>To list all available templates:</p>

        <div className="bg-muted p-4 rounded-md">
          <pre className="text-sm font-mono">qmims templates list</pre>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Built-in Templates</h2>

        <p>qmims includes five built-in templates:</p>

        <Tabs defaultValue="basic">
          <TabsList>
            <TabsTrigger value="basic">Basic</TabsTrigger>
            <TabsTrigger value="detailed">Detailed</TabsTrigger>
            <TabsTrigger value="minimal">Minimal</TabsTrigger>
            <TabsTrigger value="library">Library</TabsTrigger>
            <TabsTrigger value="service">Service</TabsTrigger>
          </TabsList>
          <TabsContent value="basic" className="space-y-4">
            <div className="flex items-center space-x-2">
              <FileCode className="h-5 w-5" />
              <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">Basic Template</h3>
            </div>
            <p>Simple README with essential sections:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Project title and description</li>
              <li>Installation</li>
              <li>Usage</li>
              <li>License</li>
            </ul>
            <div className="bg-muted p-4 rounded-md">
              <pre className="text-sm font-mono">
                {`# {{projectName}}

<!-- qmims:generate: Write a concise description of the project based on its structure and purpose -->

## Installation

<!-- qmims:generate: Provide installation instructions based on the detected package manager -->

## Usage

<!-- qmims:generate: Create usage examples based on the project's main functionality -->

## License

<!-- qmims:generate: Add license information based on the detected license file or package.json -->`}
              </pre>
            </div>
          </TabsContent>
          <TabsContent value="detailed" className="space-y-4">
            <div className="flex items-center space-x-2">
              <FileCode className="h-5 w-5" />
              <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">Detailed Template</h3>
            </div>
            <p>Comprehensive README with extended sections:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Project title and description</li>
              <li>Features</li>
              <li>Installation</li>
              <li>Usage</li>
              <li>API Reference</li>
              <li>Contributing</li>
              <li>License</li>
              <li>Acknowledgements</li>
            </ul>
            <div className="bg-muted p-4 rounded-md">
              <pre className="text-sm font-mono">
                {`# {{projectName}}

<!-- qmims:generate: Write a comprehensive description of the project -->

## Features

<!-- qmims:generate: List the main features of the project based on the code structure -->

## Installation

<!-- qmims:generate: Provide detailed installation instructions -->

## Usage

<!-- qmims:generate: Create detailed usage examples with code snippets -->

## API Reference

<!-- qmims:generate: Document the main API functions and classes -->

## Contributing

<!-- qmims:generate: Add contributing guidelines -->

## License

<!-- qmims:generate: Add license information -->

## Acknowledgements

<!-- qmims:generate: Add acknowledgements for libraries and tools used -->`}
              </pre>
            </div>
          </TabsContent>
          <TabsContent value="minimal" className="space-y-4">
            <div className="flex items-center space-x-2">
              <FileCode className="h-5 w-5" />
              <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">Minimal Template</h3>
            </div>
            <p>Minimal project overview:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Project title and description</li>
              <li>Quick start</li>
              <li>License</li>
            </ul>
            <div className="bg-muted p-4 rounded-md">
              <pre className="text-sm font-mono">
                {`# {{projectName}}

<!-- qmims:generate: Write a brief description of the project -->

## Quick Start

<!-- qmims:generate: Provide minimal instructions to get started -->

## License

<!-- qmims:generate: Add license information -->`}
              </pre>
            </div>
          </TabsContent>
          <TabsContent value="library" className="space-y-4">
            <div className="flex items-center space-x-2">
              <FileCode className="h-5 w-5" />
              <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">Library Template</h3>
            </div>
            <p>Focused on API documentation:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Project title and description</li>
              <li>Installation</li>
              <li>API Reference</li>
              <li>Examples</li>
              <li>License</li>
            </ul>
            <div className="bg-muted p-4 rounded-md">
              <pre className="text-sm font-mono">
                {`# {{projectName}}

<!-- qmims:generate: Write a description focused on the library's purpose -->

## Installation

<!-- qmims:generate: Provide installation instructions -->

## API Reference

<!-- qmims:generate: Document the library's API in detail -->

## Examples

<!-- qmims:generate: Provide usage examples for common scenarios -->

## License

<!-- qmims:generate: Add license information -->`}
              </pre>
            </div>
          </TabsContent>
          <TabsContent value="service" className="space-y-4">
            <div className="flex items-center space-x-2">
              <FileCode className="h-5 w-5" />
              <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">Service Template</h3>
            </div>
            <p>Tailored for web services/APIs:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Project title and description</li>
              <li>Features</li>
              <li>API Endpoints</li>
              <li>Authentication</li>
              <li>Deployment</li>
              <li>License</li>
            </ul>
            <div className="bg-muted p-4 rounded-md">
              <pre className="text-sm font-mono">
                {`# {{projectName}}

<!-- qmims:generate: Write a description focused on the service's purpose -->

## Features

<!-- qmims:generate: List the main features of the service -->

## API Endpoints

<!-- qmims:generate: Document the API endpoints with request/response examples -->

## Authentication

<!-- qmims:generate: Explain the authentication mechanism -->

## Deployment

<!-- qmims:generate: Provide deployment instructions -->

## License

<!-- qmims:generate: Add license information -->`}
              </pre>
            </div>
          </TabsContent>
        </Tabs>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-8">Creating Custom Templates</h2>

        <p>
          You can create your own custom templates to match your project's specific needs. Templates are Markdown files
          with special comments that serve as placeholders for generated content.
        </p>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">Template Syntax</h3>

        <p>Templates can include:</p>

        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Placeholders</strong>: Variables like <code>{"{{projectName}}"}</code> that are replaced with actual
            values
          </li>
          <li>
            <strong>Generation Instructions</strong>: HTML comments that tell Amazon Q what content to generate
          </li>
          <li>
            <strong>Static Content</strong>: Regular Markdown content that remains unchanged
          </li>
        </ul>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">Steps to Create a Custom Template</h3>

        <ol className="list-decimal pl-6 space-y-2">
          <li>Create a Markdown file with your desired structure</li>
          <li>
            Add placeholders and generation instructions:
            <div className="bg-muted p-4 rounded-md mt-2">
              <pre className="text-sm font-mono">
                {`# {{projectName}}

<!-- qmims:generate: Write a description based on the project's purpose -->

## Features

<!-- qmims:generate: List the main features based on the code structure -->`}
              </pre>
            </div>
          </li>
          <li>
            Add the template to qmims:
            <div className="bg-muted p-4 rounded-md mt-2">
              <pre className="text-sm font-mono">qmims templates add my-template path/to/template.md</pre>
            </div>
          </li>
          <li>
            Use your custom template:
            <div className="bg-muted p-4 rounded-md mt-2">
              <pre className="text-sm font-mono">qmims generate --mode template:my-template</pre>
            </div>
          </li>
        </ol>

        <Alert>
          <Terminal className="h-4 w-4" />
          <AlertTitle>Tip</AlertTitle>
          <AlertDescription>
            You can set a default template to use when no template is specified:
            <div className="bg-muted p-4 rounded-md mt-2">
              <pre className="text-sm font-mono">qmims config set defaults.templateName my-template</pre>
            </div>
          </AlertDescription>
        </Alert>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-8">Template Best Practices</h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Be Specific in Instructions</strong>: Provide clear instructions to Amazon Q about what content to
            generate
          </li>
          <li>
            <strong>Include Essential Sections</strong>: Make sure your template includes all the sections that are
            important for your project type
          </li>
          <li>
            <strong>Use Consistent Formatting</strong>: Maintain consistent heading levels and formatting throughout the
            template
          </li>
          <li>
            <strong>Keep It Modular</strong>: Organize your template into logical sections that can be easily maintained
          </li>
          <li>
            <strong>Test Your Template</strong>: Generate READMEs with your template for different projects to ensure it
            works well in various contexts
          </li>
        </ul>
      </div>
    </div>
  )
}
