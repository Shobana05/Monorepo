import React from "react";

interface BannerFooterProps {
  text: string[];
}

const BannerFooter: React.FC<BannerFooterProps> = ({ text }) => {
  return (
    <footer className=" py-4 flex ">
      {text.map((item, index) => (
        <div key={item} >
          <h2  className=" text-xl ml-10 " style={{ color: '#00095B' }}>{item}</h2>

        </div>
      ))}

    </footer>
  );
};

export default BannerFooter;
