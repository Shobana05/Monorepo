import ImageComponent from "../image";
import LinkComponent from "../link/link";
import { LinkProps } from "../link/link";
import { FaGlobe } from "react-icons/fa";
export interface footerProps{
  linkText:any;
}
const Footer: React.FC<footerProps & LinkProps> = ({linkText,links,navClass,className}) => {
    return (
        <footer style={{backgroundColor:"#F5F6F7"}}>
      <div className="flex justify-between mx-10 items-center">
        <div className="flex items-center">
        <FaGlobe size={25} style={{marginRight:"10px",color:"#1F3047"}}/>
        <a
        className="text-xl"
      
            href={linkText.indexOf(' ') >= 0 ? `/${linkText.split(' ')[0].toLowerCase()}` : `/${linkText.toLowerCase()}`}
          >{linkText}</a>
        </div>
      
        <ImageComponent img='https://www.ford.com/cmslibs/etc/designs/brand_ford/brand/skin/ford/img/bri-icons/Ford-logo.svg' className='w-1/2 ml-auto ' alt='img'/>
      </div>
      
          <LinkComponent  links={links}className={className} navClass={navClass}/>
       
      </footer>
    );
  };
  
  export default Footer;
  