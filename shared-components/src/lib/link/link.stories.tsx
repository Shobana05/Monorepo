import type { Meta, StoryObj } from '@storybook/react';
import LinkComponent  from './link';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof LinkComponent> = {
  component: LinkComponent,
  title: 'LinkComponent',
};
export default meta;
type Story = StoryObj<typeof LinkComponent>;

const links = ['SUVs & Crossovers', 'Trucks & Vans']
// const imgsrc: any =  '../test.png'
// export const Primary: Story = {
//   render: () =>
//     <header className="py-4 px-10">
//       <div className="mx-10 flex justify-between text-base sm:text-lg md:text-xl lg:text-1xl">
//         <div className='mx=20'>
//           <LinkComponent links={links} className="hover:underline mr-5" navClass="flex text-blue-900 font-bold"  />
//         </div>
//       </div>
//     </header>
// };

export const Primary: Story = {
  args: {
    links: links,
    className: 'mx-10 flex justify-between text-base sm:text-lg md:text-xl lg:text-1xl',
    navClass: 'flex text-blue-900 font-bold'
  },
};
