import React from 'react';
import ImageComponent from '../image';
import { ImageComponentProps } from '../image';


  interface BannerProps {
   
   textClass?:string;
   headingText:string;
   paraText?:string;
  
  }
  const Banner: React.FC<BannerProps & ImageComponentProps> = ({ img,alt,className,textClass,headingText,paraText}) => {
    return (
    <div >
        <ImageComponent img={img} alt={alt} className={className}  />
   
      <div className="absolute top-1/2 ml-20 bannerClass">
        <h1 className={textClass}>{headingText}</h1>
        <p className="text-2xl text-white mt-2">{paraText}</p>
      </div>
    </div>
  );
};

export default Banner;
