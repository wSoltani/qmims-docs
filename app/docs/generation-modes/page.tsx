import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Lightbulb, FileCode, FileText } from "lucide-react"

export default function GenerationModesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Generation Modes</h1>
        <p className="text-lg text-muted-foreground mt-2">Different ways to generate README files with qmims</p>
      </div>

      <p>
        qmims supports three different modes for generating README files, each offering different levels of control and
        automation.
      </p>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Auto Mode</CardTitle>
            <Lightbulb className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Fully Automatic</div>
            <p className="text-xs text-muted-foreground">AI analyzes your project and generates a complete README</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Template Mode</CardTitle>
            <FileCode className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Structured</div>
            <p className="text-xs text-muted-foreground">Uses predefined templates with AI-generated content</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Instruct Mode</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Precise Control</div>
            <p className="text-xs text-muted-foreground">Uses embedded instructions for targeted content generation</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="auto" className="mt-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="auto">Auto Mode</TabsTrigger>
          <TabsTrigger value="template">Template Mode</TabsTrigger>
          <TabsTrigger value="instruct">Instruct Mode</TabsTrigger>
        </TabsList>
        <TabsContent value="auto" className="space-y-4">
          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Auto Mode</h2>

          <p>
            Auto mode analyzes your project structure, code, and dependencies to generate a comprehensive README file
            automatically.
          </p>

          <div className="bg-muted p-4 rounded-md">
            <pre className="text-sm font-mono">qmims generate --mode auto</pre>
          </div>

          <p>In auto mode, qmims will:</p>

          <ol className="list-decimal pl-6 space-y-2">
            <li>Analyze your project structure and files</li>
            <li>Identify the programming language(s) and frameworks used</li>
            <li>Detect dependencies and their versions</li>
            <li>Infer the project's purpose and main features</li>
            <li>Generate a README with appropriate sections based on this analysis</li>
          </ol>

          <p>
            Auto mode is ideal for quickly generating a comprehensive README for a new project or updating documentation
            for an existing project.
          </p>
        </TabsContent>
        <TabsContent value="template" className="space-y-4">
          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Template Mode</h2>

          <p>Template mode uses predefined templates to structure your README file.</p>

          <div className="bg-muted p-4 rounded-md">
            <pre className="text-sm font-mono">qmims generate --mode template:templateName</pre>
          </div>

          <p>qmims includes several built-in templates:</p>

          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>basic</strong>: Simple README with essential sections
            </li>
            <li>
              <strong>detailed</strong>: Comprehensive README with extended sections
            </li>
            <li>
              <strong>minimal</strong>: Minimal project overview
            </li>
            <li>
              <strong>library</strong>: Focused on API documentation
            </li>
            <li>
              <strong>service</strong>: Tailored for web services/APIs
            </li>
          </ul>

          <p>
            You can also create and use custom templates (see{" "}
            <a href="/docs/templates" className="text-primary underline">
              Working with Templates
            </a>
            ).
          </p>

          <p>
            Template mode is useful when you want more control over the structure of your README while still leveraging
            AI to generate the content.
          </p>
        </TabsContent>
        <TabsContent value="instruct" className="space-y-4">
          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Instruct Mode</h2>

          <p>Instruct mode uses embedded instructions in your Markdown files to guide the generation process.</p>

          <div className="bg-muted p-4 rounded-md">
            <pre className="text-sm font-mono">qmims generate --mode instruct # or qmims edit</pre>
          </div>

          <p>In instruct mode, you add HTML comments to your Markdown file with specific instructions for Amazon Q:</p>

          <div className="bg-muted p-4 rounded-md">
            <pre className="text-sm font-mono">
              # Project Title &lt;!-- qmims: Generate a concise project overview (1-2 paragraphs) based on the project's
              primary purpose. --&gt; ## Installation &lt;!-- qmims: Provide installation instructions using the
              detected package manager. --&gt;
            </pre>
          </div>

          <p>
            Instruct mode provides the most precise control over the content generation process, allowing you to specify
            exactly what you want in each section.
          </p>

          <p>
            For more details on using embedded instructions, see the{" "}
            <a href="/docs/embedded-instructions" className="text-primary underline">
              Embedded Instructions
            </a>{" "}
            section.
          </p>
        </TabsContent>
      </Tabs>

      <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-8">Choosing the Right Mode</h2>

      <div className="space-y-2">
        <p>
          <strong>Use Auto Mode when:</strong>
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>You need a quick, comprehensive README</li>
          <li>You're starting a new project</li>
          <li>You want a complete analysis of your project</li>
        </ul>
      </div>

      <div className="space-y-2">
        <p>
          <strong>Use Template Mode when:</strong>
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>You want a specific structure for your README</li>
          <li>You need consistency across multiple projects</li>
          <li>You want to use a custom template</li>
        </ul>
      </div>

      <div className="space-y-2">
        <p>
          <strong>Use Instruct Mode when:</strong>
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>You need precise control over specific sections</li>
          <li>You want to update only parts of an existing README</li>
          <li>You have specific requirements for certain sections</li>
        </ul>
      </div>
    </div>
  )
}
