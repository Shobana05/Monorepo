import type { Meta, StoryObj } from '@storybook/react';
import ImageComponent from './index';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

import disckBreak from '../../../../Apps/poc2/public/discBrake.png'


const meta: Meta<typeof ImageComponent> = {
  component: ImageComponent,
  title: 'ImageComponent',
};
export default meta;
type Story = StoryObj<typeof ImageComponent>;

// export const Primary: Story = {
//   render: () =>
//     <div >
//       <img src={disckBreak} className="w-full  h-64 rounded-t custom-styles-div" alt="Acw-64cessory " />

//     </div>
// };

export const Primary: Story = {
  args: {
    img: disckBreak,
    className: 'w-24  h-64 rounded-t custom-styles-div'
    },
};