import React from "react";
import "../src/app/globals.css";
import { ThemeProvider } from "next-themes";

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: 'centered',
    docs: {
      toc: true,
    },
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
    (Story) => React.createElement(ThemeProvider, {
      attribute: "class",
      defaultTheme: "system",
      enableSystem: true,
    }, React.createElement('div', {
      className: "min-h-screen bg-background p-8"
    }, React.createElement(Story)))
  ],
};

export default preview; 