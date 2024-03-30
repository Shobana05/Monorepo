import './allparts.module.css'
import ImageComponent, { ImageComponentProps } from '../image';
export interface AllpartsProps { 

  text:string;
  textClass?:string;

}


const Allparts: React.FC<AllpartsProps & ImageComponentProps > = ({img,alt,className,text,textClass }) => {
  const staticClass = 'explorerParts';
    return (
  
    <div className='flex flex-col max-w-md  items-center justify-center explorer'>
        <ImageComponent img={img} alt={alt} className={className} />
        <label className={`${textClass} ${staticClass}`}>
{text}</label>

 </div>
  );
}

export default Allparts;

