import type { Meta, StoryObj } from '@storybook/react';
import HeaderMenu from '../header/index';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import LinkComponent from '../link/link';
import ImageComponent from '../image';
import fordLogo from '../../../../Apps/poc2/public/Ford-Logo.png'


const meta: Meta<typeof HeaderMenu> = {
  component: HeaderMenu,
  title: 'HeaderMenu',
};
export default meta;
type Story = StoryObj<typeof HeaderMenu>;

const links = ['Vehicles', 'Shop', 'Services']
// const imgsrc: any = '../test.png'
// export const Primary: Story = {
//   render: () =>
//     <div className=" flex flex-col">
//       <div className="mx-10 flex justify-between text-base sm:text-lg md:text-xl lg:text-1xl">
//         <div className='mx=20'>
//           <LinkComponent links={links} className="hover:underline mr-5" navClass="flex text-blue-900 font-bold" />
//           <ImageComponent img={fordLogo} className='h-full pr-60 ' alt='img' />
//         </div>
//       </div>
//     </div>
// };
export const Primary: Story = {
  args: {
    links: links,
    className: 'hover:underline mr-5',
    navClass: 'flex text-blue-900 font-bold'
  },
};
