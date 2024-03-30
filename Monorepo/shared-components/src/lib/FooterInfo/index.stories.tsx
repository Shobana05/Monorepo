import type { Meta, StoryObj } from '@storybook/react';
import footerInfo from '../FooterInfo/index';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import LinkComponent from '../link/link';


const footerData = [{ "heading": "All vehicles", "links": ["SUVs & Crossovers", "Trucks & Vans", "Cars", "Electrified", "Commercial vehicles", "Future vehicles", "Certicied Used", "Fleet Vehicles", "All Vehicles", "Performance Vehicles"] }, { "heading": "Shopping Tools", "links": ["Build & Price", "Search Inventory", "Get a Quote", "Curent Offers", "Trade-In Value", "TOwing Gudies", "Compare Vehicles", "Get updates", "Certified used inventory"] }, { "heading": "Finance", "links": ["Ford Credit Home", "Why Ford Credit", "Finance Options", "Payment calculator", "Credit Education", "Customer Support", "Qualify for financing", "Ford Credit Account", "Ford Insure", "Ford Interest Advantage", "Investor Center"] }, { "heading": "Support", "links": ["Support Home", "Maintenace Schedule", "Your warranty", "Coupons & offers", "Redeem Rebates", "SYNC & Technology", "Owner Manuals", "Locate a Dealer", "Ford Parts", "Contact Us", "Roadside Assistance", "Ford Protect", "Recalls", "Takata Airbag Recalls", "Tire Finder", "How-To Videos"] }, { "heading": "Experience Ford", "links": ["Corporate", "Careerws", "Investor", "Company News", "About Ford", "Racing", "Accessories Store", "Warriors in Pink", "Ford Mechandise", "Ford Motor Company Fund", "SYNC", "Connected Navigation", "FordPass", "Ford Co-Pilot360 Technology", "Ford Telematics", "Accessibility Program"] }]
const meta: Meta<typeof footerInfo> = {
  component: footerInfo,
  title: 'footerInfo',
};
export default meta;
type Story = StoryObj<typeof footerInfo>;

const footerInfoData = [{"heading":"All vehicles","links":["SUVs & Crossovers","Trucks & Vans","Cars","Electrified","Commercial vehicles","Future vehicles","Certicied Used","Fleet Vehicles","All Vehicles","Performance Vehicles"]},{"heading":"Shopping Tools","links":["Build & Price","Search Inventory","Get a Quote","Curent Offers","Trade-In Value","TOwing Gudies","Compare Vehicles","Get updates","Certified used inventory"]},{"heading":"Finance","links":["Ford Credit Home","Why Ford Credit","Finance Options","Payment calculator","Credit Education","Customer Support","Qualify for financing","Ford Credit Account","Ford Insure","Ford Interest Advantage","Investor Center"]},{"heading":"Support","links":["Support Home","Maintenace Schedule","Your warranty","Coupons & offers","Redeem Rebates","SYNC & Technology","Owner Manuals","Locate a Dealer","Ford Parts","Contact Us","Roadside Assistance","Ford Protect","Recalls","Takata Airbag Recalls","Tire Finder","How-To Videos"]},{"heading":"Experience Ford","links":["Corporate","Careerws","Investor","Company News","About Ford","Racing","Accessories Store","Warriors in Pink","Ford Mechandise","Ford Motor Company Fund","SYNC","Connected Navigation","FordPass","Ford Co-Pilot360 Technology","Ford Telematics","Accessibility Program"]}]

// export const Primary: Story = {
//   render: () =>
//     <div className="flex border-t-2 border-b-2 justify-between p-10" style={{ backgroundColor: "#F5F6F7", borderColor: '#6B7786' }}>
//       {footerData.map((data, index) => (
//         <div key={index} className="flex flex-col space-y-4 " >
//           <h1 key={index} className="font-bold text-xl" style={{ color: '#1F3047' }}>{data.heading}</h1>
//           <LinkComponent key={index} links={data.links} className=" text-l hover:underline hover:text-blue-700" navClass="flex flex-col" />
//         </div>
//       ))}
//     </div>
// };

export const Primary: Story = {
  args: {
    data: footerInfoData
  },
};

// export const Heading: Story = {
//   args: {},
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement);
//     expect(canvas.getByText(/Welcome to footerInfo!/gi)).toBeTruthy();
//   },
// };
