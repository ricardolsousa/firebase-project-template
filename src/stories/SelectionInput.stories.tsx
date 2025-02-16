import { ComponentProps, useState } from "react";
import SelectionInput from "../components/utils/selection-input/SelectionInput";
import { Meta, StoryObj } from "@storybook/react";

type StoryProps = ComponentProps<typeof SelectionInput>;

const meta: Meta<StoryProps> = {
  component: SelectionInput,
  tags: ["autodocs"],
};

export default meta;

// Type of individual story
type Story = StoryObj<StoryProps>;

// Export story
export const Selection: Story = {
  // Give arguments to story
  args: {
    label: "Selection",
    options: [
      {
        label: "1",
        value: 1,
      },
      {
        label: "2",
        value: 2,
      },
    ],
  },
  render: (args) => {
    const [selectedValue, setSelectedValue] = useState(args.options[0].value);
    return (
      <SelectionInput
        {...args}
        value={selectedValue}
        setValue={setSelectedValue}
      />
    );
  },
};
