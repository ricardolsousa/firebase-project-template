import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { ComponentProps } from "react";
import Button from "../components/utils/button/Button";

type StoryProps = ComponentProps<typeof Button> & {
  buttonText: string;
};

const meta: Meta<StoryProps> = {
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      options: ["primary", "secondary"],
      control: {
        type: "select",
      },
    },
    size: {
      options: ["sm", "md", "lg"],
      control: {
        type: "select",
      },
    },
  },
  args: {
    onClick: fn(),
  },
};

export default meta;

// Type of individual story
type Story = StoryObj<StoryProps>;

// Export story
export const Primary: Story = {
  // Give arguments to story
  args: {
    buttonText: "Hello",
    variant: "primary",
    size: "sm",
  },
  render: ({ buttonText, ...args }) => {
    return <Button {...args}>{buttonText}</Button>;
  },
};

// Export story
export const Secondary: Story = {
  // Give arguments to story
  args: {
    buttonText: "Hello",
    variant: "secondary",
    size: "sm",
  },
  render: ({ buttonText, ...args }) => {
    return <Button {...args}>{buttonText}</Button>;
  },
};
