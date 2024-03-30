
import React from 'react';

import LinkComponent from '../link/link'
// import SearchBar from '../Search/index'
import { LinkProps } from '../link/link';
import { FaCar, FaShoppingCart, FaMapMarker, FaLandmark, FaMapPin } from 'react-icons/fa';
import SelectWithSearch from '../Select';


const SubHeaderMenu: React.FC<LinkProps> = ({links,className,navClass,imgsrc}) => {
      
    
  return (
    <header className="bg-blue-900 py-4 px-10  flex justify-between items-center">
    <div className="flex justify-between items-center w-1/2">
        <LinkComponent links={links} className={className} navClass={navClass} />

        {/* <SearchBar className='w-1/2' /> */}
        <SelectWithSearch className="w-1/2 search-with-cls" />
    </div>
   
    <div className='flex justify-evenly item-center w-1/4'>
      <FaCar size={20 } style={{color:"white"}}/>
        <h3 className='text-white'>2017 Ford Edge SEL</h3>
        <FaMapMarker size={20} style={{color:"white"}}/>
        <h3 className='text-white'>Village Ford Inc.</h3>
        <FaShoppingCart size={25}style={{color:"white"}}/>
    </div>
</header>

  );
}





export default SubHeaderMenu;
