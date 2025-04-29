# Borealis Prototyping System

A modern environment for building and testing UI prototypes with Next.js, Tailwind CSS, and Storybook.

## Overview

This project provides a complete setup for quickly prototyping and designing UI components, with:

- **Monorepo Structure**: Using Turborepo for efficient workspace management
- **UI Package**: Reusable components built with React and Tailwind CSS
- **Web Application**: Next.js application for real-world usage of components
- **Storybook Integration**: For component development, testing, and documentation

## Features

- **Next.js 15** with App Router
- **Tailwind CSS 4** for styling
- **shadcn/ui** component library integration
- **Storybook** for component development and testing
- **TypeScript** for type safety

## Project Structure

```
borealis-prototyping-system/
├── apps/
│   └── web/               # Next.js application
│       ├── .storybook/    # Storybook configuration
│       ├── src/
│       │   ├── app/       # Next.js app router
│       │   └── stories/   # Storybook stories for components
│       └── package.json   # Web app dependencies
├── packages/
│   └── ui/                # UI component library
│       ├── src/
│       │   ├── components/ui/  # UI components
│       │   └── lib/            # Utility functions
│       └── package.json   # UI library dependencies
├── src/
│   ├── app/          # Main Next.js app router files
│   ├── components/   
│   │   ├── ui/       # shadcn/ui components
│   │   └── common/   # Custom wrappers and utilities
│   └── lib/          # Utility functions and helpers
├── .storybook/           # Root Storybook configuration
├── public/               # Static assets
├── tailwind.config.js
└── postcss.config.js
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or newer)
- [pnpm](https://pnpm.io/) (v8 or newer)

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/your-username/borealis-prototyping-system.git
   cd borealis-prototyping-system
   ```

2. Install dependencies
   ```bash
   pnpm install
   ```

3. Build the UI package
   ```bash
   pnpm build
   ```

### Running Storybook

To start Storybook for component development:

```bash
# From the root directory
pnpm storybook

# Or from the web app directory
cd apps/web && pnpm storybook
```

This will launch Storybook at http://localhost:6006 (or another port if 6006 is in use).

### Running the Web Application

To start the Next.js development server:

```bash
# From the root directory
pnpm dev

# Or from the web app directory
cd apps/web && pnpm dev
```

This will launch the web application at http://localhost:3000.

## Available Components

The UI package includes the following components:

- **Basic UI Elements**: Button, Input, Checkbox, Radio, Switch, etc.
- **Layout Components**: Card, Sheet, Dialog, etc.
- **Navigation**: Tabs, Pagination, Navigation Menu, etc.
- **Data Display**: Table, Avatar, Badge, etc.
- **Feedback**: Progress, Skeleton, etc.
- **Advanced Components**: Date Picker, Carousel, Form, etc.

### Included shadcn/ui Components

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

## Component Development

### Adding a New Component

1. Create a new component file in `packages/ui/src/components/ui/`
2. Export the component in `packages/ui/src/index.ts`
3. Create a story in `apps/web/src/stories/UI/`
4. Rebuild the UI package: `cd packages/ui && pnpm build`

### Component Example

```tsx
// packages/ui/src/components/ui/my-component.tsx
import * as React from 'react'
import { cn } from '../../lib/utils'

interface MyComponentProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'outline'
}

const MyComponent = React.forwardRef<HTMLDivElement, MyComponentProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'rounded-md p-4',
          variant === 'default' && 'bg-primary text-primary-foreground',
          variant === 'outline' && 'border border-input',
          className
        )}
        {...props}
      />
    )
  }
)
MyComponent.displayName = 'MyComponent'

export { MyComponent }
```

### Story Example

```tsx
// apps/web/src/stories/UI/MyComponent.stories.tsx
import type { Meta, StoryObj } from '@storybook/react'
import { MyComponent } from '@workspace/ui'

const meta: Meta<typeof MyComponent> = {
  title: 'UI/MyComponent',
  component: MyComponent,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'radio',
      options: ['default', 'outline'],
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'My Component',
    variant: 'default',
  },
}

export const Outline: Story = {
  args: {
    children: 'Outline Variant',
    variant: 'outline',
  },
}
```

## Storybook Setup

### Configuration Files

#### main.ts
```typescript
import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  staticDirs: ["../public"],
};

export default config;
```

#### preview.ts
```typescript
import type { Preview } from "@storybook/react";
import "../src/app/globals.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    nextjs: {
      appDirectory: true,
    },
  },
};

export default preview;
```

### Best Practices for Stories
1. **File Organization**
   - Keep stories close to their components
   - Use consistent naming: `ComponentName.stories.tsx`
   - Group stories by category in the sidebar

2. **Documentation**
   - Use the `autodocs` feature
   - Add JSDoc comments to components
   - Include usage examples and prop descriptions

3. **Testing**
   - Use `@storybook/test` for interaction testing
   - Add accessibility tests with `@storybook/addon-a11y`
   - Include visual regression tests when possible

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

## Troubleshooting

### Common Issues

1. **Module Resolution Errors**: If you see errors about missing modules:
   - Ensure you've built the UI package: `cd packages/ui && pnpm build`
   - Check that the component is exported in `packages/ui/src/index.ts`

2. **TypeScript Errors**: If you encounter type errors:
   - Check import paths for correct naming
   - Ensure proper type definitions for components
   - Verify the UI package has been built with the latest changes

3. **Storybook Not Loading**: If Storybook fails to load:
   - Check for console errors in the terminal
   - Verify that all dependencies are installed
   - Ensure port 6006 is available (or use a different port)

## Changelog

### [Unreleased]

#### Added
- Initial project setup with Next.js
- Storybook integration with Next.js
- Basic page component
- Documentation for Storybook setup and usage
- Essential Storybook addons:
  - @storybook/addon-a11y
  - @storybook/addon-essentials
  - @storybook/addon-interactions
  - @storybook/addon-links
  - @storybook/addon-onboarding

#### Changed
- Updated Next.js to version 15.3.1
- Configured Storybook for Next.js app directory
- Organized project structure for better maintainability

#### Fixed
- Resolved Storybook configuration issues
- Fixed dependency conflicts
- Corrected file paths in Storybook configuration

### [0.1.0] - 2024-03-21

#### Added
- Initial release
- Basic project structure
- Essential development tools and configurations

## License

MIT
