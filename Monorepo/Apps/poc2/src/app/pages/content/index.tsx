'use client'

import data from '../../../../../../shared-components/src/data/data.json'
import NextJsCarousel from "../../../../../../shared-components/src/lib/carousel/index"
import TabComponent from '../../../../../../shared-components/src/lib/tab.tsx/index';
import LinkComponent from "shared-components/src/lib/link/link";
import Banner from "../../../../../../shared-components/src/lib/banner/index"
import BannerFooter from '../../../../../../shared-components/src/lib/bannerFooter/index'

// import SearchBar from "shared-components/src/lib/Search";
import Allparts from "../../../../../../shared-components/src/lib/allparts/allparts"

import SelectWithSearch from "shared-components/src/lib/Select";


const HomeContent: React.FC = () => {
  const more = {
    "links": ['Learn More']
  }

  // const tabs:any=data.tabData;

  const tabs: any = [
    {
      "tabTitle": "Accessories",
      "tabContent": "Discover amazing products and services",
      "cardProps": [
        { "img": "/interiorAccessories.png", "cardClass": "border-2 border-gray-200 mx-10 rounded w-full  ", "alt": "Acw-64cessory", "className": "w-full  h-64 rounded-t custom-styles-div", "content": "Interior Accessories-Mustang Floor Mats", "buttonClass": "custom-btn-cls text-1xl font-bold text-blue-700 border-2 border-blue-700 px-7 py-2 rounded  my-5", "buttonValue": "view", "textClass": "text-xl cardText " },
        { "img": "/exteriorAccessories.png", "cardClass": "mx-10 border-2 border-gray-200 rounded w-full", "className": "w-full h-64 rounded-t custom-styles-div", "content": "Exterior Accessories-20' Machined-Face Wheel", "buttonClass": "custom-btn-cls text-1xl font-bold text-blue-700 border-2 border-blue-700 px-7 py-2 rounded   my-5", "buttonValue": "view", "textClass": "text-xl h-32 cardText " },
        { "img": "/safetyAccessories.png", "cardClass": "mx-10 border-2 border-gray-200 rounded w-full", "alt": "Accessory 1", "className": " w-full h-64 rounded-t  custom-styles-div", "content": "Safety Accessories-Premium Safety Kit", "buttonClass": "custom-btn-cls text-1xl font-bold text-blue-700 border-2 border-blue-700 px-7 py-2 rounded   my-5", "buttonValue": "view", "textClass": "text-xl h-32 cardText " },
        { "img": "/otherAccessories.png", "cardClass": "mx-10 border-2 border-gray-200 rounded w-full", "alt": "Accessory 1", "className": "w-full  h-64 rounded-t  custom-styles-div", "content": "Other Accessories-Bronco S Cargo Area Mat", "buttonClass": "custom-btn-cls text-1xl font-bold text-blue-700 border-2 border-blue-700 px-7 py-2 rounded  my-5", "buttonValue": "view", "textClass": "text-xl h-32 cardText " }


      ]
    },
    {
      "tabTitle": "Maintenance",
      "tabContent": "Discover amazing products and services",

      "cardProps": [
        { "img": "/blackBrakes.png", "cardClass": "border-2 border-gray-200 mx-10 rounded w-full ", "alt": "Accessory", "className": "w-full  h-64 rounded-t custom-styles-div", "content": "F56DRW- Platinum Black Brakes", "buttonClass": "custom-btn-cls text-1xl font-bold text-blue-700 border-2 border-blue-700 px-7 py-2 rounded  my-5", "buttonValue": "view", "textClass": "text-xl h-32 cardText " },
        { "img": "/engineFilter.png", "cardClass": "border-2 border-gray-200 mx-10 rounded w-full ", "alt": "Accessory 1", "className": "w-full  h-64 rounded-t  custom-styles-div", "content": "Engine Air Filter", "buttonClass": "custom-btn-cls text-1xl font-bold text-blue-700 border-2 border-blue-700 px-7 py-2 rounded   my-5", "buttonValue": "view", "textClass": "text-xl h-32 cardText " },
        { "img": "/fluids.png", "cardClass": "border-2 border-gray-200 mx-10 rounded w-full ", "alt": "Accessory 1", "className": "w-full  h-64  rounded-t custom-styles-div", "content": "Fluids, Chemicals & Lubricants", "buttonClass": "custom-btn-cls text-1xl font-bold text-blue-700 border-2 border-blue-700 px-7 py-2 rounded   my-5", "buttonValue": "view", "textClass": "text-xl h-32 cardText " },
        { "img": "/wipers.png", "cardClass": "border-2 border-gray-200 mx-10 rounded w-full ", "alt": "Accessory 1", "className": "w-full  h-64 rounded-t custom-styles-div ", "content": "Wipers and Washers", "buttonClass": "custom-btn-cls text-1xl font-bold text-blue-700 border-2 border-blue-700 px-7 py-2 rounded   my-5", "buttonValue": "view", "textClass": "text-xl h-32 cardText " }


      ]
    },
    {
      "tabTitle": "Power Train",
      "tabContent": "Discover amazing products and services",
      "cardProps": [
        { "img": "/performanceEngine.png", "cardClass": "border-2 border-gray-200 mx-10 rounded w-full", "alt": "Accessory", "className": "w-full  h-64 rounded-t custom-styles-div", "content": "Ford Performacne-Engine", "buttonClass": "custom-btn-cls text-1xl font-bold text-blue-700 border-2 border-blue-700 px-7 py-2 rounded   my-5", "buttonValue": "view", "textClass": "text-xl h-32 cardText  " },
        { "img": "/Transmission.png", "cardClass": "border-2 border-gray-200 mx-10 rounded w-full", "alt": "Accessory 1", "className": "w-full  h-64 rounded-t custom-styles-div ", "content": "Transmission", "buttonClass": "custom-btn-cls text-1xl font-bold text-blue-700 border-2 border-blue-700 px-7 py-2 rounded   my-5", "buttonValue": "view", "textClass": "text-xl h-32 cardText " },
        { "img": "/exhaust.png", "cardClass": "border-2 border-gray-200 mx-10 rounded w-full ", "alt": "Accessory 1", "className": "w-full  h-64 rounded-t custom-styles-div", "content": "Exhaust", "buttonClass": "custom-btn-cls text-1xl font-bold text-blue-700 border-2 border-blue-700 px-7 py-2 rounded   my-5", "buttonValue": "view", "textClass": "text-xl h-32 cardText " },
        { "img": "/suspension.png", "cardClass": "border-2 border-gray-200 mx-10 rounded w-full ", "alt": "Accessory 1", "className": "w-full  h-64 rounded-t custom-styles-div", "content": "Suspension", "buttonClass": "custom-btn-cls text-1xl font-bold text-blue-700 border-2 border-blue-700 px-7 py-2 rounded   my-5", "buttonValue": "view", "textClass": "text-xl h-32 cardText " }


      ]
    }
  ]



  return (


    <div >

      <Banner textClass="text-6xl text-white" img="/bannerImg.png" alt="Ford parts" headingText="FORD PARTS" className="w-full " paraText="Right for your vehicle" />
      <div className="flex justify-evenly items-center" style={{ backgroundColor: "#F2F2F2" }}>
        <div className="">
          <BannerFooter text={data.bannerFooter} />
        </div>
        <div className="">
          <LinkComponent links={more.links} className="" navClass="font-bold text-blue-900" />
        </div>
      </div>



      <h2 className='text-blue-900 font-bold text-2xl text-center mb-5 mt-5'>Popular Parts</h2>

      <div >

        <NextJsCarousel cardData={data.CarouselData} legendClass="" />
      </div>


      <h2 className='text-blue-900 font-bold text-2xl text-center mb-5'>Top Categories</h2>
      <TabComponent tabs={tabs} ClassName="flex text-2xl mb-10  mx-32" />
      <h2 className='text-blue-900 font-bold text-2xl text-center my-5' id="ExpolorParts">Explore all parts</h2>
      <div className="stripcolor w-screen">
        <div className="p-3 w-screen h-24 md:h-32 lg:h-40 stripcolor grid grid-cols-6 divide-x text-sm text-center font-bold  rounded-sm shadow-sm overflow-hidden dark:divide-slate-300">

          {data.explorerData.map((item, index) => (
            <Allparts key={item.imgsrc} img={item.imgsrc} alt={item.alt} className=
              "shadow-md w-6 md:w-8 lg:w-10h-10 justify-center" textClass="block text-gray-700 text-xs md:text-base lg:text-lg" text={item.text} />

          ))}
        </div>
      </div>
      <div className="grid grid-cols-4 w-full my-5 custom-grid-div" style={{ color: '#1F3047' }} >
        {/* <SearchBar className="w-1/4 mx-10 col-span-3" /> */}
        <div className='custom-search-div'>
        <SelectWithSearch className="w-1/4 mx-10 col-span-3 search-txt-cls" />
        </div>
        <div className="flex justify-around custom-pop-div">
          <p className="font-bold " >Popular</p>
          <p>Lightning</p>
          <p>Bronco</p>
          <p>Experience Ford</p>
        </div>
      </div>


    </div>



  );
};

export default HomeContent;

