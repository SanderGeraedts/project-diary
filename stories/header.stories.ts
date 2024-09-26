import Header from "@/components/header";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/Header",
  component: Header,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  args: {
    label: "Add Project",
    href: "/project/new",
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
  args: {
    label: "Add Project",
    href: "/project/new",
  },
};
