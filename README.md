# Borealis Prototyping System

A modern environment for building and testing UI prototypes with Next.js, Tailwind CSS, and Storybook.

## Features

- **Next.js 15** with App Router
- **Tailwind CSS 4** for styling
- **shadcn/ui** component library integration
- **Storybook** for component development and testing
- **TypeScript** for type safety

## Getting Started

```bash
# Install dependencies
pnpm install

# Run the development server
pnpm dev

# Run Storybook
pnpm storybook
```

## Project Structure

```
borealis/
├── src/
│   ├── app/          # Next.js app router files
│   ├── components/   
│   │   ├── ui/       # shadcn/ui components
│   │   └── common/   # Custom wrappers and utilities
│   └── lib/          # Utility functions and helpers
├── public/           # Static assets
├── stories/          # Storybook stories (structured by component)
├── .storybook/       # Storybook configuration
├── tailwind.config.js
└── postcss.config.js
```

## Initial Setup Instructions

If you're setting up the project from scratch:

```bash
# Create Next.js project
npx create-next-app@latest borealis

# Install core dependencies
pnpm install next react react-dom
pnpm install tailwindcss postcss autoprefixer
pnpm install @storybook/nextjs @storybook/react vite
pnpm install class-variance-authority lucide-react tailwind-merge
pnpm install shadcn-ui

# Initialize TailwindCSS
npx tailwindcss init -p

# Setup Storybook
pnpx storybook init

# Initialize shadcn-ui
npx shadcn-ui@latest init
```

## Configuration

### Tailwind Configuration (tailwind.config.js)

```js
import { fontFamily } from "tailwindcss/defaultTheme"

export default {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./stories/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
}
```

### Storybook Configuration (.storybook/main.ts)

```ts
import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  stories: ["../stories/**/*.stories.@(ts|tsx)"],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  core: {
    builder: "@storybook/builder-vite",
  },
};

export default config;
```

## Included shadcn/ui Components

The following shadcn/ui components are installed:

- Accordion
- Alert
- Alert Dialog
- Avatar
- Badge
- Button
- Card
- Checkbox
- Dialog
- Dropdown Menu
- Input
- Label
- Modal
- Navigation Menu
- Popover
- Progress
- Radio Group
- Select
- Separator
- Sheet
- Slider
- Switch
- Table
- Tabs
- Textarea
- Toast
- Toggle
- Tooltip

Add more components as needed with:

```bash
npx shadcn-ui@latest add [component-name]
```

## Using the Prototyping System

This system is designed to help you quickly prototype UI components and flows:

1. **Component Development**:
   - Place shadcn/ui components in `/src/components/ui/`
   - Place custom wrappers and utility components in `/src/components/common/`
   - Create stories for your components in `/stories/` using the naming pattern `ComponentName.stories.tsx`

2. **Running Storybook**:
   ```bash
   pnpm storybook
   ```
   This will start Storybook on port 6006 (http://localhost:6006)

3. **Building Pages**:
   - Use the Next.js App Router structure in `/src/app/`
   - Import your components from `@/components/ui` and `@/components/common`

## License

MIT
