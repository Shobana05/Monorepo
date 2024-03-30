import type { Meta, StoryObj } from '@storybook/react';
import SelectWithSearch from './index';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof SelectWithSearch> = {
  component: SelectWithSearch,
  title: 'Select',
};
export default meta;
type Story = StoryObj<typeof SelectWithSearch>;

export const Primary: Story = {
  args: {
    className: 'w-1/4 mx-10 col-span-3'
  },
};

