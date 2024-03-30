'use client'
import React from "react";
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import CardComponent, { CardProps } from "../card";
import { ImageComponentProps } from "../image";

interface NextJsCarouselProps {
  legendClass: string;
  cardData: (CardProps & ImageComponentProps)[];
}

const NextJsCarousel: React.FC<NextJsCarouselProps> = ({ cardData, legendClass }) => {
  const items = cardData.map((data, index) => (
    <CardComponent
      key={index}
      img={data.img}
      alt={data.alt}
      className={data.className}
      content={data.content}
      buttonValue={data.buttonValue}
      buttonClass={data.buttonClass}
      cardClass={data.cardClass}
      textClass={data.textClass}
    />
  ));

  const responsive = {
    0: { items: 1 },
    576: { items: 2 },
    1024: { items: 4 },
  };

  return (
    <div>
      <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
      />
    </div>
  );
};

export default NextJsCarousel;
