import type { Meta, StoryObj } from '@storybook/react';
import Allparts from '../allparts/allparts';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

import battery from '../../../../Apps/poc2/public/icons/battery.png'

const meta: Meta<typeof Allparts> = {
  component: Allparts,
  title: 'Allparts',
};
export default meta;
type Story = StoryObj<typeof Allparts>;


export const Primary: Story = {
  // render: () => <div className="stripcolor w-screen">
  //   <div className="p-3 w-screen h-24 md:h-32 lg:h-40 stripcolor grid grid-cols-6 divide-x font-mono text-sm text-center font-bold leading-6 rounded-sm shadow-sm overflow-hidden dark:divide-slate-300">
  //     <div className='flex flex-col max-w-md h-20 md:h-32 lg:h-40 items-center justify-center'>
  //       <img src={barrtyImg} alt="Batteries" className="shadow-md w-6 md:w-8 lg:w-10 h-10 justify-center" />
  //       <label className="block text-gray-700 text-xs md:text-base lg:text-lg text-wrap">Batteries</label>
  //     </div >
  //     <div className='flex flex-col max-w-md  items-center justify-center'>
  //       <img src={transImg} alt="Transmission" className="shadow-md w-6 md:w-8 lg:w-10 h-10 justify-center" />
  //       <label className="block text-gray-700 text-xs md:text-base lg:text-lg text-wrap">Transmission</label>
  //     </div>
  //     <div className='flex flex-col max-w-md  items-center justify-center'>
  //       <img src={wiperImg} alt="Wipers" className="shadow-md w-6 md:w-8 lg:w-10h-10 justify-center" />
  //       <label className="block text-gray-700 text-xs md:text-base lg:text-lg">Wiper</label>
  //     </div>
  //     <div className='flex flex-col max-w-md  items-center justify-center'>
  //       <img src={airfilterImg} alt="Air Filters" className="shadow-md w-6 md:w-8 lg:w-10 h-10 justify-center" />
  //       <label className="block text-gray-700 text-xs md:text-base lg:text-lg">Air Filters</label>
  //     </div>
  //     <div className='flex flex-col max-w-md items-center justify-center'>
  //       <img src={brakcImg} alt="Brakes" className="shadow-md w-6 md:w-8 lg:w-10 h-10 justify-center" />
  //       <label className="block text-gray-700 text-xs md:text-base lg:text-lg">Brakes</label>
  //     </div>
  //     <div className='flex flex-col max-w-md  items-center justify-center'>
  //       <img src={mirrorImg} alt="Mirror" className="shadow-md w-6 md:w-8 lg:w-10 h-10 justify-center" />
  //       <label className="block text-gray-700 text-xs md:text-base lg:text-lg">Mirror</label>
  //     </div>
  //   </div>
  // </div>
  args:{
    img:battery,
    alt:'battery',
    className:"shadow-md w-6 md:w-8 lg:w-10h-10 justify-center",
    text:'Battery',
    textClass:"block text-gray-700 text-xs md:text-base lg:text-lg",
  
  }
};

// export const Primary = {
//   args: {},
// };

// export const Heading: Story = {
//   args: {},
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement);
//     expect(canvas.getByText(/Welcome to Allparts!/gi)).toBeTruthy();
//   },
// };
