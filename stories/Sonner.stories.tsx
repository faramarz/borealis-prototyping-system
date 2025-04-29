import type { Meta, StoryObj } from "@storybook/react";
import { Toaster } from "@/components/ui/sonner";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";

const meta: Meta<typeof Toaster> = {
  title: "UI/Sonner",
  component: Toaster,
  tags: ["autodocs"],
  argTypes: {
    position: {
      control: "select",
      options: [
        "top-left",
        "top-center",
        "top-right",
        "bottom-left",
        "bottom-center",
        "bottom-right",
      ],
      description: "The position of the toast",
    },
    theme: {
      control: "select",
      options: ["light", "dark", "system"],
      description: "The theme of the toast",
    },
    closeButton: {
      control: "boolean",
      description: "Whether to show the close button",
    },
    richColors: {
      control: "boolean",
      description: "Whether to use rich colors",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Toaster>;

const ToastDemo = ({ position, theme, closeButton, richColors }: any) => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col gap-2">
      <Button
        onClick={() => {
          setCount((count) => count + 1);
          toast(`Toast message ${count + 1}`, {
            description: "This is a description of the toast.",
          });
        }}
      >
        Show Toast
      </Button>
      
      <Button
        variant="outline"
        onClick={() => {
          setCount((count) => count + 1);
          toast.success(`Success message ${count + 1}`, {
            description: "This is a success toast.",
          });
        }}
      >
        Show Success Toast
      </Button>
      
      <Button
        variant="destructive"
        onClick={() => {
          setCount((count) => count + 1);
          toast.error(`Error message ${count + 1}`, {
            description: "This is an error toast.",
          });
        }}
      >
        Show Error Toast
      </Button>
      
      <Toaster
        position={position || "bottom-right"}
        theme={theme || "system"} 
        closeButton={closeButton || true}
        richColors={richColors || false}
      />
    </div>
  );
};

export const Default: Story = {
  render: ({ position, theme, closeButton, richColors }) => (
    <ToastDemo
      position={position}
      theme={theme}
      closeButton={closeButton}
      richColors={richColors}
    />
  ),
  args: {
    position: "bottom-right",
    theme: "system",
    closeButton: true,
    richColors: false,
  },
}; 