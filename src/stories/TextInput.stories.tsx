import { ComponentProps, useState } from "react";
import TextInput from "../components/utils/text-input/TextInput";
import { Meta, StoryObj } from "@storybook/react/*";

// Define Story props of the component
type StoryProps = ComponentProps<typeof TextInput>;

// Configure storybook for the component
const meta: Meta<StoryProps> = {
  component: TextInput,
};

export default meta;

// Define the type of individual story
type Story = StoryObj<StoryProps>;

// Export story
export const TextInp: Story = {
  // Give arguments to story
  args: {
    value: "Hello",
  },
  render: (args) => {
    const [value, setValue] = useState(args.value || "");
    return (
      <TextInput
        {...args}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    );
  },
};
