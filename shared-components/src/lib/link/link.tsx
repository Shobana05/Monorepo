
import React from 'react';
import ImageComponent from '../image';
export interface LinkProps {
  links: string[];
   className: string, 
   navClass: string,
    imgsrc?: string
}
const LinkComponent: React.FC<LinkProps> = ({ links, className, navClass, imgsrc }) => {
  
  return (
    <nav className={navClass}>
      {
      links.map((link: any, index) => (
        <div key={index}  className={className}>
          {imgsrc && <ImageComponent img={imgsrc} className='flex' alt={imgsrc} />}
          <a
            key={index}
            href={link.indexOf(' ') >= 0 ? `/${link.split(' ')[0].toLowerCase()}` : `/${link.toLowerCase()}`}
          >
            {link}
          </a>
        </div>
      ))}
    </nav>

  );


}

export default LinkComponent;
