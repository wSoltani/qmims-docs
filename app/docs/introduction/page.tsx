import { Badge } from "@/components/ui/badge"

export default function IntroductionPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Introduction</h1>
        <p className="text-lg text-muted-foreground mt-2">AI-Powered README Generation & Editing</p>
      </div>

      <div className="flex items-center space-x-2">
        <Badge variant="outline">Version 0.0.2</Badge>
        <Badge variant="secondary">Node.js ≥18.0.0</Badge>
        <Badge>MIT License</Badge>
      </div>

      <div className="space-y-4">
        <p>
          <strong>qmims</strong> (Q, Make It Make Sense!) is a command-line tool that leverages Amazon Q Developer CLI
          to automatically generate, update, and refine README.md files for your projects. It helps you create clear,
          comprehensive, and contextually relevant documentation with minimal effort.
        </p>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Key Features</h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>AI-Powered Content Generation</strong>: Uses Amazon Q to analyze your codebase and generate relevant
            README content
          </li>
          <li>
            <strong>Multiple Generation Modes</strong>:
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>
                <strong>Auto</strong>: Fully automatic README generation based on project analysis
              </li>
              <li>
                <strong>Template</strong>: Use built-in or custom templates to structure your README
              </li>
              <li>
                <strong>Instruct</strong>: Embedded instruction-driven processing for precise control
              </li>
            </ul>
          </li>
          <li>
            <strong>Direct File Editing</strong>: Amazon Q can make targeted modifications to your README files
          </li>
          <li>
            <strong>Custom Templates</strong>: Create and manage your own README templates
          </li>
          <li>
            <strong>Configuration Management</strong>: Customize default behaviors and settings
          </li>
          <li>
            <strong>Interactive Permissions</strong>: Review and approve AI-suggested changes before they're applied
          </li>
        </ul>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">What is qmims?</h2>

        <p>
          qmims is a command-line tool designed to streamline the creation and maintenance of README.md files for
          software projects. By leveraging the power of Amazon Q Developer CLI, qmims can analyze your codebase,
          understand its structure and purpose, and generate contextually relevant documentation.
        </p>

        <p>
          Whether you're starting a new project and need a comprehensive README, updating documentation for an existing
          project, or want to ensure your documentation is clear and up-to-date, qmims can help you create professional
          documentation with minimal effort.
        </p>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Why Use qmims?</h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Save Time</strong>: Automatically generate comprehensive documentation
          </li>
          <li>
            <strong>Improve Quality</strong>: Ensure your documentation is clear, complete, and professional
          </li>
          <li>
            <strong>Stay Up-to-Date</strong>: Easily update documentation as your project evolves
          </li>
          <li>
            <strong>Customizable</strong>: Tailor the documentation to your specific needs
          </li>
          <li>
            <strong>AI-Powered</strong>: Leverage the power of Amazon Q to create contextually relevant content
          </li>
        </ul>
      </div>
    </div>
  )
}
