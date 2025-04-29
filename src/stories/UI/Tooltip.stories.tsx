import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../../components/ui/tooltip'
import { Button } from '../../components/ui/button'

const meta: Meta<typeof Tooltip> = {
  title: 'UI/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Tooltip>

const Template = (args) => (
  <TooltipProvider>
    <Tooltip {...args}>
      <TooltipTrigger asChild>
        <Button variant="outline">Hover me</Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Add to library</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
)

export const Default = Template.bind({})
Default.args = {}

export const WithIcon: Story = {
  render: () => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Next page</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
}

export const WithLongContent: Story = {
  render: () => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Hover me</Button>
        </TooltipTrigger>
        <TooltipContent className="max-w-[200px]">
          <p>
            This is a longer tooltip message that might contain more detailed
            information about the action or element it's attached to.
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
}

export const WithDelay: Story = {
  render: () => {
    const Component = () => (
      <TooltipProvider delayDuration={500}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">Hover me (500ms delay)</Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>This tooltip appears after a 500ms delay</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    )
    return <Component />
  },
} 