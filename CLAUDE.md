# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
npm run dev      # Start development server at localhost:4321
npm run build    # Build production site to ./dist/
npm run preview  # Preview production build locally
npm run check    # Run Astro type checking
```

## Architecture Overview

This is an **Astro 5.9.1 static site** with React components for interactivity. The site focuses on metal detecting and treasure hunting content, specifically for Michigan enthusiasts.

### Key Technologies
- **Astro**: Static site generator with component islands architecture
- **React 19.1.0**: For interactive components with selective hydration
- **TypeScript**: Strict configuration with full type checking
- **TailwindCSS 4.1.8**: Utility-first styling with custom CSS variables
- **Framer Motion & Swiper**: For animations and carousels
- **FontAwesome Pro**: Professional icon set

### Content System
- **Content Collections**: Type-safe blog posts in `src/content/blog/`
- **Frontmatter Schema**: Required fields: title, description, pubDate; Optional: heroImage, tags, author, location
- **File Formats**: Supports both Markdown (.md) and MDX (.mdx)
- **RSS & Sitemap**: Automatically generated for SEO

### Directory Structure
- `src/pages/` - File-based routing (index.astro, about.mdx, blog/)
- `src/components/` - Mix of Astro (.astro) and React (.jsx) components
- `src/content/` - Content collections with schema validation
- `src/layouts/` - Page templates (BaseLayout.astro)
- `public/` - Static assets (fonts, images, favicon)

### Performance Optimizations
The build is configured with manual chunk splitting for large libraries:
- `framer-motion` chunk for animations
- `swiper` chunk for carousels  
- `fontawesome` chunk for icons

Use `client:load` directive sparingly - only add to React components that need interactivity.

### Theme System
Uses CSS variables in `src/styles/global.css` for theme colors. The site has earth-tone branding (#A55E3F accent) matching the metal detecting theme.

### Development Notes
- Content is validated at build time via Astro's content collections
- TypeScript strict mode is enabled
- Hot module replacement works in development
- The site URL is configured for localhost:4321 in development