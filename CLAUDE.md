# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
- `pnpm dev` - Start development server with Turbopack
- `pnpm build` - Build for production with Turbopack  
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

### Package Management
This project uses pnpm as the package manager (pnpm-lock.yaml present).

## Architecture

This is a Next.js 15 application using the App Router architecture with the following key technologies:

### Framework & Build
- Next.js 15.5.2 with App Router
- Turbopack for faster development builds
- React 19.1.0

### Styling
- Tailwind CSS 4 with PostCSS integration
- CSS custom properties for theming (light/dark mode support)
- Geist font family (sans and mono variants) from Google Fonts

### Code Organization
- `app/` - App Router pages and layouts
  - `layout.js` - Root layout with font configuration and metadata
  - `page.js` - Home page component
  - `globals.css` - Global styles with Tailwind and theme variables
- `public/` - Static assets (SVG icons)
- ESLint configured with Next.js core web vitals rules

### Path Aliases
- `@/*` maps to project root for cleaner imports (configured in jsconfig.json)

### Styling Patterns
- Uses CSS custom properties for theme variables (--background, --foreground)
- Automatic dark mode support via `prefers-color-scheme`
- Tailwind classes with custom theme integration
- Font variables applied via CSS classes on body element