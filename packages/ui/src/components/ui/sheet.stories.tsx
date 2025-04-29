import type { Meta, StoryObj } from "@storybook/react"
import { Button } from "../button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./sheet"

const meta: Meta<typeof Sheet> = {
  title: "UI/Sheet",
  component: Sheet,
  tags: ["autodocs"],
  argTypes: {
    side: {
      control: "select",
      options: ["top", "right", "bottom", "left"],
    },
  },
}

export default meta
type Story = StoryObj<typeof Sheet>

export const Default: Story = {
  render: (args) => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Sheet</Button>
      </SheetTrigger>
      <SheetContent {...args}>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="name" className="text-right">
              Name
            </label>
            <input
              id="name"
              defaultValue="Pedro Duarte"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="username" className="text-right">
              Username
            </label>
            <input
              id="username"
              defaultValue="@peduarte"
              className="col-span-3"
            />
          </div>
        </div>
        <SheetFooter>
          <Button type="submit">Save changes</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
  args: {
    side: "right",
  },
}

export const Left: Story = {
  render: (args) => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Left Sheet</Button>
      </SheetTrigger>
      <SheetContent {...args}>
        <SheetHeader>
          <SheetTitle>Navigation</SheetTitle>
          <SheetDescription>
            Browse through different sections of the application.
          </SheetDescription>
        </SheetHeader>
        <nav className="mt-4 space-y-2">
          <a href="#" className="block px-2 py-1 hover:bg-accent">
            Dashboard
          </a>
          <a href="#" className="block px-2 py-1 hover:bg-accent">
            Settings
          </a>
          <a href="#" className="block px-2 py-1 hover:bg-accent">
            Profile
          </a>
        </nav>
      </SheetContent>
    </Sheet>
  ),
  args: {
    side: "left",
  },
}

export const Top: Story = {
  render: (args) => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Top Sheet</Button>
      </SheetTrigger>
      <SheetContent {...args}>
        <SheetHeader>
          <SheetTitle>Notifications</SheetTitle>
          <SheetDescription>
            Your recent notifications will appear here.
          </SheetDescription>
        </SheetHeader>
        <div className="mt-4 space-y-4">
          <div className="rounded-lg border p-4">
            <p className="font-medium">New message from John</p>
            <p className="text-sm text-muted-foreground">
              Hey, how's the project going?
            </p>
          </div>
          <div className="rounded-lg border p-4">
            <p className="font-medium">Task completed</p>
            <p className="text-sm text-muted-foreground">
              You've completed the design review
            </p>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  ),
  args: {
    side: "top",
  },
}

export const Bottom: Story = {
  render: (args) => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Bottom Sheet</Button>
      </SheetTrigger>
      <SheetContent {...args}>
        <SheetHeader>
          <SheetTitle>Quick Actions</SheetTitle>
          <SheetDescription>
            Common actions you can take right now.
          </SheetDescription>
        </SheetHeader>
        <div className="mt-4 grid grid-cols-2 gap-4">
          <Button variant="outline">New Project</Button>
          <Button variant="outline">Share</Button>
          <Button variant="outline">Export</Button>
          <Button variant="outline">Settings</Button>
        </div>
      </SheetContent>
    </Sheet>
  ),
  args: {
    side: "bottom",
  },
} 