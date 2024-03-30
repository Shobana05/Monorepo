import type { Meta, StoryObj } from '@storybook/react';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import CardComponent from '../card/index';
import ImageComponent from '../image';
import ButtonComponent from '../button';
import wndShild from '../../../../Apps/poc2/public/windShield.png'
import sealedBeam from '../../../../Apps/poc2/public/sealedBeam.png'

const meta: Meta<typeof CardComponent> = {
  component: CardComponent,
  title: 'CardComponent',
};
export default meta;
type Story = StoryObj<typeof CardComponent>;




export const Primary: Story = {
  args: {
    img: sealedBeam,
    alt: 'Sealed Beam',
    className: 'w-full h-64 mt-5',
    textClass: 'mx-10 text-xl',
    cardClass: 'border-2 border-gray-200 mx-10 rounded w-3/4',
    content: 'Disc BRake Pad Set. Kit-Front',
    buttonValue: 'View',
    buttonClass: 'text-1xl font-bold text-blue-700 border-2 border-blue-700 px-7 py-2 rounded mx-10 my-5'
  },
};
