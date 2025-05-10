import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Terminal, Info } from "lucide-react"

export default function AdvancedUsagePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Advanced Usage</h1>
        <p className="text-lg text-muted-foreground mt-2">Advanced techniques and options for using qmims</p>
      </div>

      <div className="space-y-4">
        <p>
          This section covers advanced usage scenarios and options for qmims, allowing you to customize and optimize
          your documentation workflow.
        </p>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Dry Run Mode</h2>

        <p>
          Dry run mode shows what would be done without making any actual changes. This is useful for previewing changes
          before applying them.
        </p>

        <div className="bg-muted p-4 rounded-md">
          <pre className="text-sm font-mono">
            {`qmims generate --dry-run
qmims edit --dry-run`}
          </pre>
        </div>

        <p>
          In dry run mode, qmims will analyze your project, process instructions, and show the content that would be
          generated, but it won't write any files.
        </p>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Verbose Output</h2>

        <p>Verbose mode provides detailed output for debugging:</p>

        <div className="bg-muted p-4 rounded-md">
          <pre className="text-sm font-mono">
            {`qmims generate --verbose
qmims edit --verbose`}
          </pre>
        </div>

        <p>This will show:</p>

        <ul className="list-disc pl-6 space-y-1">
          <li>Command execution details</li>
          <li>Amazon Q interactions</li>
          <li>File operations</li>
          <li>Error messages with stack traces</li>
        </ul>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Force Overwrite</h2>

        <p>Force mode overwrites existing files without prompting:</p>

        <div className="bg-muted p-4 rounded-md">
          <pre className="text-sm font-mono">qmims generate --force</pre>
        </div>

        <Alert variant="destructive">
          <Info className="h-4 w-4" />
          <AlertTitle>Caution</AlertTitle>
          <AlertDescription>
            Use the <code>--force</code> option with care, as it will overwrite existing files without confirmation.
          </AlertDescription>
        </Alert>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Automatic Approval</h2>

        <p>
          The <code>--yes</code> flag automatically approves all permission requests:
        </p>

        <div className="bg-muted p-4 rounded-md">
          <pre className="text-sm font-mono">
            {`qmims generate --yes
qmims edit --yes`}
          </pre>
        </div>

        <p>
          This is useful for scripting or automation, but should be used with caution as it will apply all changes
          without confirmation.
        </p>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Custom Output Path</h2>

        <p>You can specify a custom output filename:</p>

        <div className="bg-muted p-4 rounded-md">
          <pre className="text-sm font-mono">qmims generate --output docs/DOCUMENTATION.md</pre>
        </div>

        <p>
          This allows you to generate documentation in a specific location or with a different filename than the default
          README.md.
        </p>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Combining Options</h2>

        <p>Options can be combined for more complex operations:</p>

        <div className="bg-muted p-4 rounded-md">
          <pre className="text-sm font-mono">
            qmims generate --mode template:library --output API.md --force --verbose
          </pre>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Environment Variables</h2>

        <p>
          You can use environment variables to override configuration settings. This is useful for CI/CD pipelines or
          when you want to temporarily change a setting.
        </p>

        <div className="bg-muted p-4 rounded-md">
          <pre className="text-sm font-mono">
            {`# Linux/macOS
QMIMS_DEFAULTS_MODE=template QMIMS_DEFAULTS_TEMPLATE_NAME=minimal qmims generate

# Windows (PowerShell)
$env:QMIMS_DEFAULTS_MODE="template"; $env:QMIMS_DEFAULTS_TEMPLATE_NAME="minimal"; qmims generate`}
          </pre>
        </div>

        <p>Environment variables follow this naming convention:</p>

        <ul className="list-disc pl-6 space-y-1">
          <li>
            Prefix: <code>QMIMS_</code>
          </li>
          <li>Configuration key with dots replaced by underscores and converted to uppercase</li>
        </ul>

        <p>For example:</p>

        <ul className="list-disc pl-6 space-y-1">
          <li>
            <code>defaults.mode</code> becomes <code>QMIMS_DEFAULTS_MODE</code>
          </li>
          <li>
            <code>q.autoApproveEdits</code> becomes <code>QMIMS_Q_AUTO_APPROVE_EDITS</code>
          </li>
        </ul>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Git Integration</h2>

        <p>
          qmims can automatically commit changes to git if you enable the <code>git.autoCommit</code> setting:
        </p>

        <div className="bg-muted p-4 rounded-md">
          <pre className="text-sm font-mono">
            {`qmims config set git.autoCommit true
qmims config set git.commitMessageFormat "docs: update README.md using qmims"`}
          </pre>
        </div>

        <p>
          With these settings, qmims will automatically commit changes to git after generating or editing a README file.
        </p>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">CI/CD Integration</h2>

        <p>
          You can integrate qmims into your CI/CD pipeline to automatically generate or update documentation when your
          code changes.
        </p>

        <h3 className="scroll-m-20 text-lg font-semibold tracking-tight">GitHub Actions Example</h3>

        <div className="bg-muted p-4 rounded-md">
          <pre className="text-sm font-mono">
            {`name: Update Documentation

on:
  push:
    branches: [ main ]
    paths:
      - 'src/**'
      - 'package.json'

jobs:
  update-docs:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - name: Install Amazon Q CLI
        run: npm install -g @aws/amazon-q-cli
      - name: Login to Amazon Q
        run: q login --token \${{ secrets.Q_TOKEN }}
      - name: Install qmims
        run: npm install -g qmims
      - name: Update README
        run: qmims generate --force --yes
      - name: Commit changes
        uses: stefanzweifel/git-auto-commit-action@v4
        with:
          commit_message: "docs: update README.md using qmims"`}
          </pre>
        </div>

        <Alert>
          <Terminal className="h-4 w-4" />
          <AlertTitle>Tip</AlertTitle>
          <AlertDescription>
            For CI/CD integration, you'll need to set up authentication for Amazon Q Developer CLI. Consult the Amazon Q
            documentation for details on how to authenticate in a CI/CD environment.
          </AlertDescription>
        </Alert>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Scripting with qmims</h2>

        <p>
          You can create scripts to automate documentation tasks with qmims. Here's an example shell script that updates
          documentation for multiple projects:
        </p>

        <div className="bg-muted p-4 rounded-md">
          <pre className="text-sm font-mono">
            {`#!/bin/bash

# Update documentation for multiple projects
projects=("project1" "project2" "project3")

for project in "\${projects[@]}"; do
  echo "Updating documentation for $project"
  cd "$project" || continue
  qmims generate --force --yes
  cd ..
done

echo "Documentation update complete"`}
          </pre>
        </div>
      </div>
    </div>
  )
}
