
import React from 'react';
import Image from 'next/image';
export interface ImageComponentProps {
  img: string,
  alt: string ;
  className: string;
 
}

const ImageComponent: React.FC<ImageComponentProps> = ({ img, alt, className}) => {
  return (
    <div >
        <img src={img} className={className} alt={alt as string} />
    
    </div>
  );
}

export default ImageComponent;
