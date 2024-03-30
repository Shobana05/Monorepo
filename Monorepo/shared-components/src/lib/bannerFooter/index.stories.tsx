import type { Meta, StoryObj } from '@storybook/react';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import BannerFooter from '../bannerFooter/index'

const meta: Meta<typeof BannerFooter> = {
  component: BannerFooter,
  title: 'BannerFooter',
};

const bannerFooter = ["Save $20 on orders", "Free shipping!, that right, Shipping is on us.", "Order now and we ll give five"];
export default meta;
type Story = StoryObj<typeof BannerFooter>;

export const Primary: Story = {
  args: {
    text: bannerFooter
  },
};
