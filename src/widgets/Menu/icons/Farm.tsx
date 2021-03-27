import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <g>
        <g>
          <path
            d="M21.34,11.11,17.76,10V4.65A2.72,2.72,0,0,0,16,2.1a.93.93,0,0,0-1.3,1.12,1,1,0,0,0,.52.56.92.92,0,0,1,.65.87V9.47l-1.78-.53V6.86a3,3,0,0,0-3-3.05H2.93a.93.93,0,1,0,0,1.85H3.2v7.86a5.17,5.17,0,0,0,4,8.48A5.23,5.23,0,0,0,12,18.64l2.12.38a3.34,3.34,0,0,0,6.53.55h.42a.93.93,0,0,0,.93-.92V12A.94.94,0,0,0,21.34,11.11ZM9.89,5.66h1.2a1.19,1.19,0,0,1,1.18,1.2V8.38L9.89,7.67ZM7.16,20.14a3.31,3.31,0,1,1,3.3-3.3A3.31,3.31,0,0,1,7.16,20.14Zm10.28,0a1.5,1.5,0,0,1,0-3,1.5,1.5,0,0,1,1.49,1.5A1.49,1.49,0,0,1,17.44,20.14Zm2.7-3.46a3.34,3.34,0,0,0-2.7-1.38,3.39,3.39,0,0,0-3,1.89l-2.11-.37a5.16,5.16,0,0,0-7.25-4.7V5.66H8v2.7a1,1,0,0,0,.67.9l11.43,3.42Z"
            transform="translate(-2 -2)"
          />
          <path
            d="M18.37,18.65a.93.93,0,1,1-.93-.93A.93.93,0,0,1,18.37,18.65Z"
            transform="translate(-2 -2)"
          />
          <path
            d="M7.16,14.1a2.74,2.74,0,1,0,2.73,2.74A2.73,2.73,0,0,0,7.16,14.1Zm0,3.62A.89.89,0,1,1,8,16.84.88.88,0,0,1,7.16,17.72Z"
            transform="translate(-2 -2)"
          />
        </g>
        <path
          d="M18.65,15a.56.56,0,0,0,.56-.56V13.21a.56.56,0,1,0-1.12,0v1.21a.56.56,0,0,0,.56.56Zm0,0Z"
          transform="translate(-2 -2)"
        />
        <path
          d="M15,13.83a.57.57,0,0,0,.56-.57V12.05a.56.56,0,0,0-1.12,0v1.21a.57.57,0,0,0,.56.57Zm0,0Z"
          transform="translate(-2 -2)"
        />
        <path
          d="M16.84,14.38a.57.57,0,0,0,.56-.57V12.6a.57.57,0,0,0-1.13,0v1.21a.57.57,0,0,0,.57.57Zm0,0Z"
          transform="translate(-2 -2)"
        />
      </g>
    </Svg>
  );
};

export default Icon;