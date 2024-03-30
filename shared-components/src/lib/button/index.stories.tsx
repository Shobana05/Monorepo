import type { Meta, StoryObj } from '@storybook/react';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

import ButtonComponent from '../button/index'

const meta: Meta<typeof ButtonComponent> = {
  component: ButtonComponent,
  title: 'ButtonComponent',
};
export default meta;
type Story = StoryObj<typeof ButtonComponent>;

export const Primary: Story = {
  args: {
    value: 'View',
    className: 'text-1xl font-bold text-blue-700 border-2 border-blue-700 px-7 py-2 rounded  my-5'
  },
};

// export const Heading: Story = {
//   args: {},
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement);
//     expect(canvas.getByText(/Welcome to ButtonComponent!/gi)).toBeTruthy();
//   },
// };
