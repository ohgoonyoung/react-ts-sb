import * as React from 'react';
import defaultStyle from './Button.module.scss';
import cn from 'classnames';

type SizeTypes = "big" | "small";
type colorTypes = "default" | "primary" | "secondary" | "brownishGrey"

interface IProps {
  size: SizeTypes;
  color: colorTypes;
  bordered?: boolean;
}

const Button: React.FC<IProps> = ({ size, color, bordered, children }) => {
  return (
    <button className={cn(defaultStyle.button, defaultStyle[size], bordered ? defaultStyle.bordered : null, defaultStyle[color])}>{children}</button>
  );
}

Button.defaultProps = {
  size: "big"
};

export default Button;
