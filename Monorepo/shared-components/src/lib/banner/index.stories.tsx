import type { Meta, StoryObj } from '@storybook/react';
import Banner from './index'

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import ImageComponent from '../image';


import bannerImg from '../../../../Apps/poc2/public/bannerImg.png'
const meta: Meta<typeof Banner> = {
  component: Banner,
  title: 'Banner',
};
export default meta;
type Story = StoryObj<typeof Banner>;


// export const Primary: Story = {
//   render: () =>
//     <div >

//       <Banner textClass="text-6xl text-white" img={bannerImg} alt="Ford parts"
//         headingText="FORD PARTS" className="w-full " paraText="Right for your vehicle" />

//     </div>
// };

export const Primary: Story = {
  args: {
    img: bannerImg,
    alt: 'Ford parts',
    className: 'w-full',
    textClass: 'text-6xl text-white',
    headingText: 'FORD PARTS',
    paraText: 'Right for your vehicle'
  },
};

// export const Heading: Story = {
//   args: {},
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement);
//     expect(canvas.getByText(/Welcome to Banner!/gi)).toBeTruthy();
//   },
// };
