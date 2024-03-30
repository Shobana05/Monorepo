
import { FaYoutube, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa'
import { FaComment } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaSearch, FaGlobe } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';

import SubHeaderMenu from '../../../../shared-components/src/lib/subheader/index'
import Footer from '../../../../shared-components/src/lib/footer/index';
import HeaderMenu from '../../../../shared-components/src/lib/header/index';
import FooterInfo from '../../../../shared-components/src/lib/FooterInfo/index'
import dynamic from 'next/dynamic'
 import data from '../../../../shared-components/src/data/data.json'
import ImageComponent from 'shared-components/src/lib/image';
const NoSSR = dynamic(() => import('../app/pages/content/index'), { ssr: false })
import img from '../../../poc2/public/Ford-Logo.png'


export default async function Index() {

  return (
   
    <div className=" flex flex-col">
      <div >
        <div style={{height:"60px"}}className='flex justify-between '>
        <HeaderMenu links={data.headerLink} className="hover:underline mr-5"
 navClass='flex text-blue-900 font-bold'
 />
        <ImageComponent img='https://www.ford.com/cmslibs/etc/designs/brand_ford/brand/skin/ford/img/bri-icons/Ford-logo.svg' className='h-full pr-60 ' alt='img'/>
     <div className='flex  mx-10 py-2'>
     <FaSearch size={20} style={{color:'navy',margin:'10px'}}/>
      <FaGlobe size={20} style={{color:'navy',margin:'10px'}}  />
      <FaUser size={20} style={{color:'navy',margin:'10px'}}/>
      </div> 
      
        </div>
    <SubHeaderMenu links={data.subHeader} className="text-white hover:underline" navClass="flex justify-between w-1/4 mx-10"/>
      </div>
    <div  >
    
    <NoSSR /> 
     </div>
   
    <div>
    <FooterInfo data={data.footerInfo}/>
    </div>
    <div style={{backgroundColor:"#F5F6F7"}}>
    <div className='flex justify-between my-5 mx-10 '  >
      <div className='flex justify-evenly w-1/4' >
      <FaEnvelope size={25}  style={{color:'#1F3047'}}/>
    <a href='' style={{color:'#1F3047',fontSize:'20px',}}>Get Updates</a>
      <FaComment size={25}  style={{color:'#1F3047'}} />
    <a href='' style={{color:'#1F3047',fontSize:'20px'}}>Comment card</a>
      </div>
     
    <div className="flex justify-evenly w-1/4">
  <h2 style={{color:'#1F3047',fontSize:'20px',fontWeight:"bold"}}>Follow Ford</h2>
<FaFacebook size={25} style={{color:'#1F3047'}}/>
<FaInstagram size={25} style={{color:'#1F3047'}}/>
<FaTwitter size={25} style={{color:'#1F3047'}}/>

      <FaYoutube size={25}  style={{color:'#1F3047'}}/>

     
   
    </div>
    </div>
   
   <div  style={{backgroundColor:"#F5F6F7"}}>
   <Footer  linkText="Change language" links={data.footer} className="hover:underline  "  navClass='flex  justify-between text-gray-900 mx-10  py-3  '/>
   </div>
   
     
    </div>
</div>
  );
}

