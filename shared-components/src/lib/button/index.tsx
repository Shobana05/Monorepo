
import React from 'react';

const ButtonComponent: React.FC<{ value?: string; className?: string }> = ({ value, className }) => {
  return (<>
    <button className={className}>{value}
    </button>
    
  </>

  );
}

export default ButtonComponent;
