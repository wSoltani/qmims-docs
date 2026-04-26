# qmims Documentation Website

[![Visit Website](https://img.shields.io/badge/Visit-qmims.vercel.app-blue)](https://qmims.vercel.app)
[![Built with Next.js](https://img.shields.io/badge/Built%20with-Next.js-black)](https://nextjs.org/)
[![UI: Tailwind CSS](https://img.shields.io/badge/UI-Tailwind%20CSS-38B2AC)](https://tailwindcss.com/)
[![Components: shadcn%2Fui](https://img.shields.io/badge/Components-shadcn%2Fui-000000)](https://ui.shadcn.com/)

This repository contains the official documentation website for [qmims](https://github.com/wSoltani/qmims), an AI-powered README generation and editing CLI tool powered by **Kiro CLI**. The website provides guides, reference material, and best practices for installing, using, and troubleshooting `qmims`.

## 🌐 About the Website

The `qmims-docs` site is designed to be:

- **Comprehensive** — covering installation, command usage, configuration, templates, and troubleshooting
- **User-friendly** — with clear structure, straightforward examples, and intuitive navigation
- **Responsive** — usable across desktop and mobile devices
- **Accessible** — built with modern UI patterns and accessibility-minded components

Visit the live site at [qmims.vercel.app](https://qmims.vercel.app).

## 🛠️ Technology Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Theme Support**: [next-themes](https://github.com/pacocoursey/next-themes)
- **Icons**: [Lucide React](https://lucide.dev/)

## 📚 Documentation Content

The website documents the `qmims` CLI, including:

### Core Features

- **AI-Powered README Generation** — using Kiro CLI to generate and refine project documentation
- **Multiple Generation Modes** — Auto, Template, and Instruct modes
- **Embedded Instructions** — special `<!-- qmims: ... -->` comments for targeted README updates
- **Template Management** — built-in and custom templates
- **Configuration Management** — defaults and workflow preferences
- **Troubleshooting Guidance** — install, auth, and command diagnostics

### Guides & References

- Introduction and installation
- Command reference
- Generation modes
- Templates and embedded instructions
- Configuration system
- Advanced usage and best practices
- Troubleshooting and support guidance

## 🔄 Product Context

`qmims` originally started as an Amazon Q CLI-based tool. It has now been migrated to **Kiro CLI**.

The documentation site should reflect the current product behavior, including:

- Kiro-based installation and authentication
- `kiro-cli login`
- `kiro-cli whoami`
- `kiro-cli doctor`
- headless/CI authentication using `KIRO_API_KEY`

## 🚀 Getting Started

To run the documentation website locally:

1. Clone the repository:

   ```bash
   git clone https://github.com/wSoltani/qmims-docs.git
   cd qmims-docs
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

   Or with pnpm:

   ```bash
   pnpm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

   Or with pnpm:

   ```bash
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🧭 Related Projects

- [qmims](https://github.com/wSoltani/qmims) — the main CLI tool repository

## 📝 Contributing

Contributions to improve the documentation site are welcome. Useful contributions include:

- correcting or expanding documentation
- updating examples and workflows
- improving navigation or UX
- fixing outdated product references
- polishing styling and responsiveness

If you contribute, make sure the docs stay aligned with the current `qmims` behavior in the main repository.

## 📄 License

This project is licensed under the MIT License. See the `LICENSE` file for details.