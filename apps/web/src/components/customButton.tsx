import React, { useState, ReactNode } from 'react';
import { RippleButton } from './ui/shadcn-io/ripple-button';

type CustomRippleButtonProps = {
  children: ReactNode;
  onClick?: () => void;
};

const CustomRippleButton: React.FC<CustomRippleButtonProps> = ({ children, onClick }) => {
  const [hover, setHover] = useState(false);

  return (
    <RippleButton
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        fontSize: '20px',
        padding: '15px',
        width: '300px',
        backgroundColor: 'white',
        color: 'black',
        border: '1px solid #ccc',
        borderRadius: '8px',
        cursor: 'pointer',
        boxShadow: hover ? '0px 4px 12px rgba(0, 0, 0, 0.2)' : 'none',
        transition: 'box-shadow 0.2s ease'
      }}
    >
      {children}
    </RippleButton>
  );
};

export default CustomRippleButton;