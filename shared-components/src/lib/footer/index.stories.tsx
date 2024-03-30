import type { Meta, StoryObj } from '@storybook/react';
import  Footer  from '../footer/index';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Footer> = {
  component: Footer,
  title: 'Footer',
};
export default meta;
type Story = StoryObj<typeof Footer>;
const footerLink= ["2023 Ford Motor Company", "Site Map", "Glossary","Contact Us","Accessibility","Terms & Conditions","Privacy Notice","Cookie Settings","Your Privacy Choices","Interest Based Ads","Third Party Trademarks"]

export const Primary = {
  args: {
   linkText:'Change language',
   navClass:'flex  justify-between text-gray-900 mx-10  py-3  ',
   className:"hover:underline  ",
   links:footerLink
  },
};
