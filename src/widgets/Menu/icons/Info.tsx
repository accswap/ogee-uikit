import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path d="M13.2,2.27a.83.83,0,0,0-.84.82v7.72a.85.85,0,0,0,.84.84h7.68a.83.83,0,0,0,.82-.84A8.53,8.53,0,0,0,13.2,2.27ZM20,10H14V4A7,7,0,0,1,20,10Z" />
      <path d="M14.07,20.12,11.43,13V5.49a.84.84,0,0,0-.84-.83,8.54,8.54,0,1,0,0,17.07,8.46,8.46,0,0,0,3-.54A.84.84,0,0,0,14.07,20.12ZM9.77,6.37v6.81a.92.92,0,0,0,0,.29l2.39,6.41a6.63,6.63,0,0,1-1.61.19,6.87,6.87,0,0,1-.82-13.7Z" />
      <path d="M21.18,12.55H13.49a.8.8,0,0,0-.68.36.79.79,0,0,0-.09.77l2.69,7.23a.83.83,0,0,0,.78.53,1,1,0,0,0,.29,0,8.59,8.59,0,0,0,5.52-8A.83.83,0,0,0,21.18,12.55Zm-.89,1.66a6.88,6.88,0,0,1-3.63,5.28l-2-5.28Z" />
      <rect width="24" height="24" fill="none" />
    </Svg>
  );
};

export default Icon;
