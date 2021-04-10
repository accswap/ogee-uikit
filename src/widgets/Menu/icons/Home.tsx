import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <g>
        <path d="M11.4,13.52c0,.43-.23.78-.52.78s-.51-.35-.51-.78.23-.78.51-.78S11.4,13.09,11.4,13.52Z"/>
        <path d="M13.64,13.52c0,.43-.23.78-.51.78s-.52-.35-.52-.78.23-.78.52-.78S13.64,13.09,13.64,13.52Z"/>
        <path d="M17,14.2h0a.07.07,0,0,1-.07.07H15.64a.07.07,0,0,1-.07-.07h0a2,2,0,0,0-.15-.72,1.68,1.68,0,0,0-.37-.62,2.2,2.2,0,0,0-.73-.52A6.71,6.71,0,0,1,13,11.62a4.28,4.28,0,0,1-.92-.93.07.07,0,0,0-.12,0,4.33,4.33,0,0,1-.92.94,6.24,6.24,0,0,1-1.34.73,1.94,1.94,0,0,0-.73.53,1.72,1.72,0,0,0-.37.61,1.94,1.94,0,0,0-.15.72h0a.08.08,0,0,1-.07.08h0c-.5,0-.61,0-.66,0H7.07A.07.07,0,0,1,7,14.21H7a3.58,3.58,0,0,1,.58-2A3.11,3.11,0,0,1,9.08,11a3.08,3.08,0,0,0,.75-.37,3.48,3.48,0,0,0,.52-.41,2.46,2.46,0,0,0,.4-.47c.39-.67.78-1.35,1.18-2a.07.07,0,0,1,.12,0l1.18,2h0a2.8,2.8,0,0,0,.4.47,2.54,2.54,0,0,0,.52.41,3,3,0,0,0,.74.37,3,3,0,0,1,1.51,1.24A3.42,3.42,0,0,1,17,14.2Z"/>
      </g>
      <rect width="24" height="24" fill="none"/>
      <path d="M21.69,8.29,14.53,2.86a4.17,4.17,0,0,0-5.06,0L2.31,8.33a.78.78,0,1,0,.95,1.24L4,9V15.4a4.18,4.18,0,0,0,4.18,4.18h3v1.64a.78.78,0,0,0,1.56,0V19.58h3A4.18,4.18,0,0,0,20,15.4V9l.78.59a.78.78,0,0,0,1.09-.15.79.79,0,0,0-.15-1.1ZM18.41,15.4A2.63,2.63,0,0,1,15.79,18H8.21A2.63,2.63,0,0,1,5.59,15.4V7.79L10.42,4.1a2.63,2.63,0,0,1,3.17,0l4.82,3.66Z"/>
    </Svg>
  );
};

export default Icon;
