// ButtonPrimary.tsx
import React from 'react';

interface ButtonPrimaryProps {
  text: string;
  className?: string;
  textClassName?: string;
  onClick?: () => void;
}

export const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({
  text,
  className = '',
  textClassName = '',
  onClick,
}) => {
  return (
    <button
      className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${className}`}
      onClick={onClick}
    >
      <span className={textClassName}>{text}</span>
    </button>
  );
};
