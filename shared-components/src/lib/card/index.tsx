import React from 'react';
import ButtonComponent from '../button';
import ImageComponent from '../image';
import { ImageComponentProps } from '../image';
export interface CardProps {
  content: string;
  buttonValue?:string;
  buttonClass?:string;
  cardClass?:string;
  textClass?:string;
}

const CardComponent: React.FC<CardProps & ImageComponentProps> = ({img,alt,className, textClass,cardClass,content,buttonValue ,buttonClass}) => {
  return (
    <div className={cardClass}>
      <ImageComponent img={img} alt={alt} className={className} />
      <h2 className={textClass} style={{height:"50px",marginLeft:"10px"}}>{content}</h2>
      <ButtonComponent className={buttonClass} value={buttonValue}/>
    </div>
  );
};

export default CardComponent;
