import React from 'react';
import './Button.css';

export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  style?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  onClick,
  type = 'button',
  className = '',
  style,
}) => {
  const baseClass = 'btn';
  const variantClass = `btn--${variant}`;
  const sizeClass = `btn--${size}`;
  const disabledClass = disabled ? 'btn--disabled' : '';

  const buttonClass = [
    baseClass,
    variantClass,
    sizeClass,
    disabledClass,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      type={type}
      className={buttonClass}
      onClick={onClick}
      disabled={disabled}
      style={style}
    >
      {children}
    </button>
  );
};

export default Button;
