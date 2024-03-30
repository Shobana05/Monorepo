// HeaderMenu.tsx
import React from 'react';
import LinkComponent from '../link/link';
import { LinkProps } from '../link/link';

const HeaderMenu: React.FC<LinkProps> = ({links,className,navClass,imgsrc }) => {
  return (
    <header className="py-4 px-10">
      <div className="mx-10 flex justify-between text-base sm:text-lg md:text-xl lg:text-1xl">
        <div className='mx=20'>
          <LinkComponent links={links} className={className} navClass={navClass} imgsrc={imgsrc} />
        </div>
      </div>
    </header>
  );
}

export default HeaderMenu;
