'use client'
import React, { useEffect } from 'react';
import CardComponent from '../card';
import { CardProps } from '../card';
import { ImageComponentProps } from '../image';
interface Tab {
  tabTitle: string;
  tabContent: string;
  cardProps: (CardProps & ImageComponentProps)[];

}

const TabList: React.FC<{ tabs: Tab[];ClassName?:string;}> = ({ ClassName,tabs}) => {
  const [selectedTab, setSelectedTab] = React.useState(0);

  

  return (
    <div>
                <nav className={ClassName}>

        {tabs.map((tab, index) => (
          <div key={index} style={{marginRight:"20px",color: "#9C9C9C" }} >
            <button
              style={{
                textDecoration: "underline",
                color: index === selectedTab ? '#0068D0' : '#9C9C9C'
              }}
              onClick={() => setSelectedTab(index)}
            >{tab.tabTitle}</button>
          </div>

        ))}
               </nav>
      <div className="flex ">
        {tabs[selectedTab].cardProps.map((card, index) => (
  <CardComponent
            key={index}
           img={card.img}
          alt={card.alt}
          cardClass={card.cardClass}
            content={card.content}
className={card.className}
            buttonClass={card.buttonClass}
            buttonValue={card.buttonValue}
            textClass={card.textClass}

          />
          
        ))}

      </div>
    </div>
  );
};

export default TabList;
