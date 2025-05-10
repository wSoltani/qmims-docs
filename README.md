# qmims Documentation Website

This repository contains the documentation website for qmims, built with Next.js and Tailwind CSS. The website provides comprehensive documentation on how to use the qmims CLI tool for generating and editing README files with AI assistance.

You can visit the hosted [documentation website](https://qmims.vercel.app/).

## Technologies Used

- Next.js
- Tailwind CSS
- Radix UI Components
- TypeScript

# qmims

A modern, AI-powered README generation and editing tool built with TypeScript, leveraging Amazon Q Developer CLI to help developers create and maintain high-quality documentation.

## Introduction

qmims is an intelligent documentation assistant designed to streamline the process of creating and maintaining README files for your projects. By harnessing the power of Amazon Q Developer CLI, qmims enables developers to generate comprehensive, well-structured documentation with minimal effort. Whether you're starting a new project or updating an existing one, qmims helps ensure your documentation remains clear, consistent, and complete.

## Features

- **Multiple Generation Modes**

  - Quick generation for simple projects
  - Detailed generation with comprehensive sections
  - Custom generation based on specific requirements

- **Template Management**

  - Pre-defined templates for different project types
  - Custom template creation and storage
  - Template sharing capabilities

- **Embedded Instructions**

  - Add special comment blocks in your README to guide future updates
  - Preserve sections during regeneration
  - Include specific instructions for AI-assisted editing

- **Interactive Editing**

  - Update specific sections without regenerating the entire document
  - Smart content suggestions based on project context
  - Markdown validation and formatting

- **Project Analysis**
  - Automatic detection of project structure and dependencies
  - Intelligent suggestions based on codebase analysis
  - Integration with package managers for accurate information

## Installation

Install qmims globally using npm:

```bash
npm install -g qmims
```

Ensure you have Amazon Q Developer CLI installed and configured.

## Usage

### Generate a new README

```bash
qmims generate
```

### Edit an existing README

```bash
qmims edit
```

### Templates

List available templates:

```bash
qmims templates list
```

### Configure qmims

```bash
qmims config setup
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.
