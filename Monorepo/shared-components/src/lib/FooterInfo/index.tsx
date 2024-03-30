'use client'
import React from "react";
import LinkComponent from '../link/link'
interface FooterInfoProps {
    data: {
      heading: string;
      links: string[];
    }[];
  }
const footerInfo: React.FC<FooterInfoProps> = ({data}) => {
    return (
        <div className="flex border-t-2 border-b-2 justify-between p-10" style={{backgroundColor:"#F5F6F7",borderColor:'#6B7786'}}>
            {data.map((data, index) => (
                <div key={data.heading}className="flex flex-col space-y-4 " >
                    <h1 className="font-bold text-xl footerHeading" style={{color:'#1F3047'}}>{data.heading}</h1>
                    <LinkComponent links={data.links} className=" text-l hover:underline hover:text-blue-700" navClass="flex flex-col" />
                </div>
            ))}
        </div>
    )
}
export default footerInfo;