import * as React from 'react';
import './Button.css';

type sizeType = "big" | "small";

interface IButton {
  size : sizeType;
}

function Button({size} : IButton) {
  return (
            <button className={size === "big" ? "button big" : "button small"}>{size === "big" ? "큰" : "작은"} 버튼</button>
  );
}

Button.defaultProps = {
  size : "big"
};

export default Button;
