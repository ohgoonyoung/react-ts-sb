import React from 'react';

interface ILinkProps {
  className?: string;
  href: string;
  //children?: object;
}

const Link: React.FC<ILinkProps> = ({
  className,
  href,
  children
}) => {
  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
};

export default Link;