import React from "react";
import type { Preview } from "@storybook/react";
import { ThemeProvider } from "next-themes";
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
    layout: "centered",
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: 'hsl(var(--background))',
        },
        {
          name: 'dark',
          value: 'hsl(var(--background))',
        },
      ],
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <div className="min-h-screen bg-background p-8">
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
};

export default preview; 