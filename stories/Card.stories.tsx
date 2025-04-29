import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "@/components/common/Card";

const meta: Meta<typeof Card> = {
  title: "Common/Card",
  component: Card,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "bordered", "elevated"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    children: <p>Default Card Content</p>,
    variant: "default",
  },
};

export const Bordered: Story = {
  args: {
    children: <p>Bordered Card Content</p>,
    variant: "bordered",
  },
};

export const Elevated: Story = {
  args: {
    children: <p>Elevated Card Content</p>,
    variant: "elevated",
  },
};

export const WithCustomContent: Story = {
  args: {
    children: (
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Card Title</h3>
        <p className="text-gray-500">Card description with custom content</p>
        <button className="bg-borealis-600 text-white px-4 py-2 rounded">
          Action Button
        </button>
      </div>
    ),
    variant: "bordered",
  },
}; 