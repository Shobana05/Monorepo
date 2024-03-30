import type { Meta, StoryObj } from '@storybook/react';
import SubHeaderMenu from './index';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { FaCar, FaShoppingCart, FaMapMarker, FaLandmark, FaMapPin } from 'react-icons/fa';
import SearchBar from '../Search';
import LinkComponent from '../link/link';


const meta: Meta<typeof SubHeaderMenu> = {
  component: SubHeaderMenu,
  title: 'SubHeaderMenu',
};
export default meta;
type Story = StoryObj<typeof SubHeaderMenu>;

const links = ['Shop Parts', 'Resources']


// export const Primary: Story = {
//   render: () =>
//     <header className="bg-blue-900 py-4 px-10  flex justify-between items-center">
//       <div className="flex justify-between items-center w-1/2">
//       <LinkComponent links={links} className="hover:underline mr-5" navClass="flex text-blue-900 font-bold" />

//         <SearchBar className='w-1/2' />
//       </div>

//       <div className='flex justify-evenly item-center w-1/4'>
//         <FaCar size={20} style={{ color: "white" }} />
//         <h3 className='text-white'>2017 Ford Edge SEL</h3>
//         <FaMapMarker size={20} style={{ color: "white" }} />
//         <h3 className='text-white'>Village Ford Inc.</h3>
//         <FaShoppingCart size={25} style={{ color: "white" }} />
//       </div>
//     </header>
// };


export const Primary: Story = {
  args: {
    links: links,
    className: 'hover:underline mr-5 text-white',
    navClass: 'flex text-blue-900 font-bold'
  },
};

// export const Heading: Story = {
//   args: {},
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement);
//     expect(canvas.getByText(/Welcome to SubHeaderMenu!/gi)).toBeTruthy();
//   },
// };
