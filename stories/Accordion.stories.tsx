import type { Meta, StoryObj } from "@storybook/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const meta: Meta<typeof Accordion> = {
  title: "UI/Accordion",
  component: Accordion,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["single", "multiple"],
      description: "Allow one or multiple items to be opened at the same time",
    },
    collapsible: {
      control: "boolean",
      description: "Allow items to be collapsed",
    },
    defaultValue: {
      control: "text",
      description: "The value of the item to expand by default",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Single: Story = {
  args: {
    type: "single",
    collapsible: true,
    className: "w-full",
    children: (
      <>
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other components.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is it animated?</AccordionTrigger>
          <AccordionContent>
            Yes. It's animated by default, but you can disable it if you prefer.
          </AccordionContent>
        </AccordionItem>
      </>
    ),
  },
};

export const Multiple: Story = {
  args: {
    type: "multiple",
    className: "w-full",
    children: (
      <>
        <AccordionItem value="item-1">
          <AccordionTrigger>First Section</AccordionTrigger>
          <AccordionContent>
            This is the first section of the accordion.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Second Section</AccordionTrigger>
          <AccordionContent>
            This is the second section of the accordion.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Third Section</AccordionTrigger>
          <AccordionContent>
            This is the third section of the accordion.
          </AccordionContent>
        </AccordionItem>
      </>
    ),
  },
}; 