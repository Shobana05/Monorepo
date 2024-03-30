import type { Meta, StoryObj } from '@storybook/react';
import TabList from './index';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';



const meta: Meta<typeof TabList> = {
  component: TabList,
  title: 'TabList',
};
export default meta;
type Story = StoryObj<typeof TabList>;


const tabs: any = [
  {
    "tabTitle": "Accessories",
    "tabContent": "Discover amazing products and services",
    "cardProps": [
      {
        "cardClass": "border-2 border-gray-200 mx-10 rounded w-full  ",
        "className": "w-full  h-64 rounded-t custom-styles-div",
        "content": "Interior Accessories-Mustang Floor Mats",
        "buttonClass": "text-1xl font-bold text-blue-700 border-2 border-blue-700 px-7 py-2 rounded  my-5",
        "buttonValue": "view",
        "textClass": "text-xl "
      }
    ]
  },
  {
    "tabTitle": "Maintenance",
    "tabContent": "Discover amazing products and services",
    "cardProps": [
      {
        "cardClass": "border-2 border-gray-200 mx-10 rounded w-full ",
        "className": "w-full  h-64 rounded-t custom-styles-div",
        "content": "F56DRW- Platinum Black Brakes",
        "buttonClass": "ml-2 text-1xl font-bold text-blue-700 border-2 border-blue-700 px-7 py-2 rounded  my-5",
        "buttonValue": "view",
        "textClass": "text-xl h-32"
      }
    ]
  },
  {
    "tabTitle": "Power Train",
    "tabContent": "Discover amazing products and services",
    "cardProps": [
      {
        "cardClass": "border-2 border-gray-200 mx-10 rounded w-full",
        "className": "w-full  h-64 rounded-t custom-styles-div",
        "content": "Ford Performacne-Engine",
        "buttonClass": "text-1xl font-bold text-blue-700 border-2 border-blue-700 px-7 py-2 rounded   my-5",
        "buttonValue": "view",
        "textClass": "text-xl h-32  "
      }
    ]
  }
]

export const Primary: Story = {
  args: {
    ClassName: 'flex text-2xl mb-10  mx-32',
    tabs: tabs
  },
};
