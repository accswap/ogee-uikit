import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 128 128" {...props}>
      <path
        d="M128,64a63.85,63.85,0,0,1-6.63,28.41.25.25,0,0,0,0,.07A64,64,0,0,1,64,128H64A64,64,0,0,1,6.67,92.48a.25.25,0,0,0,0-.07A64,64,0,0,1,64,0H64A64,64,0,0,1,128,64Z"
        fill="#282e5b"
      />
      <path
        d="M73.79,45.54c0-13.76-6.63-25.62-11.71-29.5,0,0-.35-.21-.35.35C61.3,43,47.82,50.26,40.34,59.93c-17.14,22.44-1.2,47,15,51.52,9.1,2.54-2.12-4.52-3.53-19.34-1.7-18,21.94-31.68,21.94-46.57"
        fill="#fff"
      />
      <path
        d="M82.68,54.64a.31.31,0,0,0-.35,0l-.07.07c-.28,3.32-4,10.51-8.54,17.08-15.59,22.3-6.7,33-1.69,38.81,2.89,3.39,0,0,7.27-3.46.56-.28,14.11-7.48,15.59-23.78,1.48-15.88-8.61-25.83-12.21-28.72"
        fill="#fff"
      />
    </Svg>
  );
};

export default Icon;
