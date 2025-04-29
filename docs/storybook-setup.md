# Storybook Setup and Guidelines

## Project Structure
Storybook is configured in the `apps/web` directory with the following structure:
```
apps/web/
├── .storybook/
│   ├── main.ts        # Main Storybook configuration
│   └── preview.ts     # Preview configuration
├── src/
│   └── app/
│       └── page.stories.tsx  # Example story file
└── package.json
```

## Configuration Files

### main.ts
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

### preview.ts
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

## Required Dependencies
Ensure these dependencies are in your `package.json`:
```json
{
  "devDependencies": {
    "@storybook/addon-a11y": "^8.6.12",
    "@storybook/addon-essentials": "^8.6.12",
    "@storybook/addon-interactions": "^8.6.12",
    "@storybook/addon-links": "^8.6.12",
    "@storybook/addon-onboarding": "^8.6.12",
    "@storybook/blocks": "^8.6.12",
    "@storybook/nextjs": "^8.6.12",
    "@storybook/react": "^8.6.12",
    "@storybook/react-webpack5": "^8.6.12",
    "@storybook/test": "^8.6.12",
    "storybook": "^8.6.12"
  }
}
```

## Running Storybook
1. Navigate to the web app directory:
   ```bash
   cd apps/web
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Start Storybook:
   ```bash
   pnpm storybook
   ```

## Creating Stories
1. Create story files with the `.stories.tsx` extension
2. Place them next to the component they document
3. Follow this basic structure:
```typescript
import type { Meta, StoryObj } from "@storybook/react";
import YourComponent from "./YourComponent";

const meta: Meta<typeof YourComponent> = {
  title: "Category/ComponentName",
  component: YourComponent,
  parameters: {
    layout: "centered", // or "fullscreen" for pages
  },
};

export default meta;
type Story = StoryObj<typeof YourComponent>;

export const Default: Story = {
  args: {
    // Component props
  },
};
```

## Best Practices
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

4. **Performance**
   - Keep stories focused and minimal
   - Use `parameters` to control rendering options
   - Implement proper loading states

## Troubleshooting
1. If Storybook fails to start:
   - Check for duplicate `.storybook` directories
   - Verify all dependencies are installed
   - Ensure Next.js version compatibility

2. If stories don't appear:
   - Check the story file pattern in `main.ts`
   - Verify file extensions match the pattern
   - Ensure stories are properly exported

3. If styles are missing:
   - Verify CSS imports in `preview.ts`
   - Check Tailwind configuration
   - Ensure static files are properly configured

## Changelog

### 2024-03-21
- Initial Storybook setup
- Added Next.js integration
- Configured essential addons:
  - @storybook/addon-a11y
  - @storybook/addon-essentials
  - @storybook/addon-interactions
  - @storybook/addon-links
  - @storybook/addon-onboarding
- Set up documentation with autodocs
- Added basic story structure guidelines
- Created troubleshooting guide

## Additional Resources
- [Storybook Documentation](https://storybook.js.org/docs)
- [Next.js Integration Guide](https://storybook.js.org/docs/8.0/configure/frameworks/nextjs)
- [Testing Documentation](https://storybook.js.org/docs/8.0/writing-tests/introduction) 