import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  target?: string;
  rel?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  target,
  rel,
}) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:opacity-50';
  
  const variants = {
    primary: 'bg-blue-800 text-white hover:bg-blue-700',
    secondary: 'bg-pink-600 text-white hover:bg-pink-500',
    outline: 'bg-transparent border border-blue-800 text-blue-800 hover:bg-blue-50'
  };
  
  const sizes = {
    sm: 'py-1 px-3 text-sm',
    md: 'py-2 px-4 text-md',
    lg: 'py-3 px-6 text-lg'
  };
  
  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;
  
  if (href) {
    return (
      <Link 
        href={href}
        className={classes}
        target={target}
        rel={rel}
      >
        {children}
      </Link>
    );
  }
  
  return (
    <button className={classes} onClick={onClick} type="button">
      {children}
    </button>
  );
};

export default Button;