import type { Meta, StoryObj } from "@storybook/react";
import { DatePicker } from "../../components/ui/date-picker";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-day-picker";

const meta = {
  title: "UI/DatePicker",
  component: DatePicker,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

const DefaultDatePicker = () => {
  const [date, setDate] = useState<Date | undefined>();
  return (
    <div className="space-y-4">
      <DatePicker
        selected={date}
        onSelect={(newDate) => {
          if (newDate && !('from' in newDate)) {
            setDate(newDate as Date);
          }
        }}
        placeholder="Pick a date"
      />
      {date && (
        <p className="text-sm text-muted-foreground">
          Selected: {format(date, "PPP")}
        </p>
      )}
    </div>
  );
};

const RangeDatePicker = () => {
  const [range, setRange] = useState<DateRange | undefined>();
  return (
    <div className="space-y-4">
      <DatePicker
        selected={range}
        onSelect={(newRange) => {
          if (newRange && 'from' in newRange) {
            setRange(newRange as DateRange);
          }
        }}
        mode="range"
        placeholder="Pick a date range"
      />
      {range?.from && (
        <p className="text-sm text-muted-foreground">
          Selected: {format(range.from, "PPP")}
          {range.to && ` - ${format(range.to, "PPP")}`}
        </p>
      )}
    </div>
  );
};

export const Default: Story = {
  render: () => <DefaultDatePicker />,
};

export const Range: Story = {
  render: () => <RangeDatePicker />,
};

export const Disabled: Story = {
  render: () => (
    <DatePicker
      selected={new Date()}
      onSelect={() => {}}
      placeholder="Pick a date"
      disabled
    />
  ),
}; 