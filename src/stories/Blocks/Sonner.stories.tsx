import type { Meta, StoryObj } from '@storybook/react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'

const meta: Meta<typeof toast> = {
  title: 'UI/Sonner',
  component: () => null,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof toast>

export const Default: Story = {
  render: () => {
    const Component = () => (
      <Button
        variant="outline"
        onClick={() =>
          toast('Event has been created', {
            description: 'Sunday, December 03, 2023 at 9:00 AM',
            action: {
              label: 'Undo',
              onClick: () => console.log('Undo'),
            },
          })
        }
      >
        Show Toast
      </Button>
    )
    return <Component />
  },
}

export const Success: Story = {
  render: () => {
    const Component = () => (
      <Button
        variant="outline"
        onClick={() => toast.success('Event has been created')}
      >
        Show Success Toast
      </Button>
    )
    return <Component />
  },
}

export const Error: Story = {
  render: () => {
    const Component = () => (
      <Button
        variant="outline"
        onClick={() => toast.error('Event has been created')}
      >
        Show Error Toast
      </Button>
    )
    return <Component />
  },
}

export const Promise: Story = {
  render: () => {
    const Component = () => (
      <Button
        variant="outline"
        onClick={() => {
          const promise = () => new Promise((resolve) => setTimeout(resolve, 2000))

          toast.promise(promise, {
            loading: 'Loading...',
            success: 'Successfully saved!',
            error: 'Something went wrong.',
          })
        }}
      >
        Show Promise Toast
      </Button>
    )
    return <Component />
  },
}

export const Custom: Story = {
  render: () => (
    <div className="space-y-4">
      <Button
        onClick={() => {
          toast.custom((t) => (
            <div className="rounded-md bg-white p-4 shadow-lg">
              <h3 className="text-lg font-medium">Custom Toast</h3>
              <p className="text-sm text-muted-foreground">
                This is a custom toast component
              </p>
              <Button
                variant="outline"
                size="sm"
                className="mt-2"
                onClick={() => toast.dismiss(t)}
              >
                Dismiss
              </Button>
            </div>
          ))
        }}
      >
        Show Custom Toast
      </Button>
    </div>
  ),
} 