import * as React from 'react';
import './Box.css';

type sizeType = "big" | "small";

interface IBox {
  size : sizeType;
}

function Box({size} : IBox) {
  return (
              <div className={size === "big" ? "box big" : "box small"}>{size === "big" ? "큰" : "작은"} 박스</div>
    );

  // return (
  //           <div className={size === "big" ? cn(style.box, style.big) : cn(style.box, style.small)}>{size === "big" ? "큰" : "작은"} 박스</div>
  // );
}

Box.defaultProps = {
  size : "big"
};

export default Box;
