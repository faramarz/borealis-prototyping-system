import type { Meta, StoryObj } from "@storybook/react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const meta: Meta<typeof Tabs> = {
  title: "UI/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  argTypes: {
    defaultValue: {
      control: "text",
      description: "The default selected tab value",
    },
    onValueChange: {
      action: "value changed",
      description: "Event handler for when the tab value changes",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  args: {
    defaultValue: "account",
    className: "w-[400px]",
    children: (
      <>
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <div className="p-4 rounded-lg border mt-2">
            <h3 className="text-lg font-medium">Account</h3>
            <p className="text-sm text-gray-500 mt-1">
              Make changes to your account settings here.
            </p>
          </div>
        </TabsContent>
        <TabsContent value="password">
          <div className="p-4 rounded-lg border mt-2">
            <h3 className="text-lg font-medium">Password</h3>
            <p className="text-sm text-gray-500 mt-1">
              Change your password here.
            </p>
          </div>
        </TabsContent>
      </>
    ),
  },
};

export const MultipleTabs: Story = {
  args: {
    defaultValue: "tab1",
    className: "w-[400px]",
    children: (
      <>
        <TabsList className="grid grid-cols-3">
          <TabsTrigger value="tab1">Tab 1</TabsTrigger>
          <TabsTrigger value="tab2">Tab 2</TabsTrigger>
          <TabsTrigger value="tab3">Tab 3</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">
          <div className="p-4 rounded-lg border mt-2">
            Content for Tab 1
          </div>
        </TabsContent>
        <TabsContent value="tab2">
          <div className="p-4 rounded-lg border mt-2">
            Content for Tab 2
          </div>
        </TabsContent>
        <TabsContent value="tab3">
          <div className="p-4 rounded-lg border mt-2">
            Content for Tab 3
          </div>
        </TabsContent>
      </>
    ),
  },
}; 