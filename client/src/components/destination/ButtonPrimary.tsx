// ButtonPrimary.tsx
import React from 'react';

interface ButtonPrimaryProps {
  className?: string;
  textClassName?: string;
  text: string;
  href?: string; 
}

export const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({
  className,
  textClassName,
  text,
  href, 
}) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <button className={className}>
        <span className={textClassName}>{text}</span>
      </button>
    </a>
  );
};
