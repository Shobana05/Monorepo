'use client'
import React from 'react';
import TabComponent from '../../../../../../shared-components/src/lib/tab.tsx/index';

const HomeComponent: React.FC = () => {
  const tabs = [
    {
      tabTitle: 'Accessories',
      tabContent: 'Discover amazing products and services',
      cards: [
        { image: 'https://www.leifjohnsonford.com/wp-content/uploads/sites/90/2020/12/order-ford-accessories.jpg', title: 'Accessory 1', content: 'Exterior accessories',buttonClass:'text-white text-1xl font-bold bg-blue-900 px-7 py-2 rounded  mx-20 my-5',buttonValue:'View' },
        { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpj1CY4lGfdTe7KhMJUJy3wP9-X4rsB2v3UnATyFG_9-lEnrgdOZKV8XtSCD3UYtZ5IyQ&usqp=CAU', title: 'Accessory 2', content: 'Internal accessories',buttonClass:'text-white text-1xl font-bold bg-blue-900 px-7 py-2 rounded  mx-20 my-5',buttonValue:'view' },
        { image: ' https://pictures.dealer.com/l/lewishaysfordfd/1775/00148d5a4c9ba31b71e1d5044cd98770x.jpg?impolicy=downsize&w=568', title: 'Accessory 2', content: 'Safety accessories',buttonClass:'text-white text-1xl font-bold bg-blue-900 px-7 py-2 rounded  mx-20 my-5',buttonValue:'view' },

      ]
    },
    {
      tabTitle: 'Maintenance',
      tabContent: 'Discover amazing products and services',
      cards: [
        { image: 'https://images.jazelc.com/uploads/richford-m2en/header_general1.jpg', title: 'Accessory 1', content: 'Ford Auto Service' ,buttonClass:'text-white text-1xl font-bold bg-blue-900 px-7 py-2 rounded  mx-20 my-5',buttonValue:'view'},
        { image: 'https://www.india.ford.com/content/ford/in/en_in/site-wide-content/media-carousels/owner-profile-home-page-media-carousel/jcr:content/par/mediacarouselitem/image.imgs.480.high.png/1475127964969.png', title: 'Accessory 2', content: 'Ford scheduled services',buttonClass:'text-white text-1xl font-bold bg-blue-900 px-7 py-2 rounded  mx-20 my-5',buttonValue:'view' }
      ]
    },
    {
      tabTitle: 'Power train',
      tabContent: 'Discover amazing products and services',
      cards: [
        { image: 'https://www.automotivepowertraintechnologyinternational.com/wp-content/uploads/2023/02/PMW-Web-Feb-3-Ford-red-Bull-e1675442803756.jpg', title: 'Accessory 1', content: 'Redbull Powertrains',buttonClass:'text-white text-1xl font-bold bg-blue-900 px-7 py-2 rounded  mx-20 my-5',buttonValue:'view' },
        { image: 'https://www.motortrend.com/uploads/2023/02/2023-MT-FORD-RED-BULL-F1-Ford-Rendering-Livery-final.jpg', title: 'Accessory 2', content: 'Redbull Powertrains',buttonClass:'text-white text-1xl font-bold bg-blue-900 px-7 py-2 rounded  mx-20 my-5',buttonValue:'view' }
      ]
    },
   
  ];



  return (
    <div >
   
      <TabComponent tabs={tabs} className=' flex justify-around text-2xl font-bold ' imgClass='w-full h-3/4 ' />
   
    </div>
  );
};

export default HomeComponent;
