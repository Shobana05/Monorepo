import type { Meta, StoryObj } from '@storybook/react';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

import NextJsCarousel from '../carousel/index';




const meta: Meta<typeof NextJsCarousel> = {
  component: NextJsCarousel,
  title: 'NextJsCarousel',
};


const cardData: any = [
  {
    "className": "w-full h-64 mt-5",
    "content": "Windshield Wiper Blade-24\",Left",
    "buttonClass": "text-xl font-bold text-blue-700 border-2 border-blue-700 px-7 py-2 rounded mx-10 my-5",
    "buttonValue": "View",
    "cardClass": "border-2 border-gray-200 mx-10 rounded w-3/4",
    "textClass": "mx-10  text-xl h-56"
  },
  {
    "className": "w-full h-64 mt-5",
    "content": "Disc BRake Pad Set. Kit-Front",
    "buttonClass": "text-1xl font-bold text-blue-700 border-2 border-blue-700 px-7 py-2 rounded mx-10 my-5",
    "buttonValue": "View",
    "cardClass": "border-2 border-gray-200 mx-10 rounded w-3/4",
    "textClass": "mx-10  text-xl  "
  },
  {
    "className": "w-full h-64 mt-5",
    "content": "Sealed Beam HeadLight-Left, Front(Base,GT)",
    "buttonClass": "text-xl bg-black font-bold text-blue-700 border-2 border-blue-700 px-7 py-2 rounded mx-10 my-5",
    "buttonValue": "View",
    "cardClass": "border-2 border-gray-200 mx-10 rounded w-3/4",
    "textClass": "mx-10 h-32 text-xl"
  },
  {
    "className": "w-full h-64 mt-5",
    "content": "Cabin Air FIlter. Filter ODOUR and P.",
    "buttonClass": "text-1xl font-bold text-blue-700 border-2 border-blue-700 px-7 py-2 rounded mx-10 my-5",
    "buttonValue": "View",
    "cardClass": "border-2 border-gray-200 mx-10 rounded w-3/4",
    "textClass": "mx-10 h-32 text-xl"
  },
  {
    "className": "w-full h-64 mt-5",
    "content": "Disc BRake Pad Set. Kit-Front",
    "buttonClass": "text-1xl font-bold text-blue-700 border-2 border-blue-700 px-7 py-2 rounded mx-10 my-5",
    "buttonValue": "View",
    "cardClass": "border-2 border-gray-200 mx-10 rounded w-3/4",
    "textClass": "mx-10 text-xl"
  }
]

export default meta;
type Story = StoryObj<typeof NextJsCarousel>;


export const Primary: Story = {
  args: {
    cardData: cardData
  },
};
