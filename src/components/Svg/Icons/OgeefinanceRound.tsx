import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 128 128" {...props}>
      <defs>
        <linearGradient
          id="New_Gradient_Swatch_3"
          data-name="New Gradient Swatch 3"
          x1="96.01"
          y1="119.43"
          x2="31.99"
          y2="8.57"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#76a4ff" />
          <stop offset="1" stop-color="#d7e7ff" />
        </linearGradient>
        <linearGradient
          id="linear-gradient"
          x1="92.8"
          y1="113.89"
          x2="35.2"
          y2="14.11"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#9fc2ff" />
          <stop offset="1" stop-color="#d7e7ff" />
        </linearGradient>
      </defs>
      <circle cx="64" cy="64" r="64" fill="url(#New_Gradient_Swatch_3)" />
      <path
        d="M121.6,64a57.43,57.43,0,0,1-6,25.57l0,.06A57.61,57.61,0,0,1,64,121.6H64a57.61,57.61,0,0,1-51.57-32l0-.06A57.63,57.63,0,0,1,64,6.4H64A57.6,57.6,0,0,1,121.6,64Z"
        fill="url(#linear-gradient)"
      />
      <path
        d="M112,88.79v.7h-.7c-3.93,0-5.06,0-5.49,0h-.49l-6.32,0h-.73l0-.73a20.2,20.2,0,0,0-1.38-7A19.06,19.06,0,0,0,93.36,76a19.77,19.77,0,0,0-7.09-5,61.7,61.7,0,0,1-12.81-7A41.94,41.94,0,0,1,64,54.16,42.39,42.39,0,0,1,54.54,64a61.26,61.26,0,0,1-12.81,7,19.8,19.8,0,0,0-7.09,5,18.87,18.87,0,0,0-3.54,5.87,20.2,20.2,0,0,0-1.38,7l0,.73H29l-6.32,0H16v-.7A34,34,0,0,1,21.64,70,29.56,29.56,0,0,1,36.12,58.09a34.47,34.47,0,0,0,7.13-3.51,34,34,0,0,0,5-3.95,26.11,26.11,0,0,0,3.88-4.56L64,25.6,75.89,46a26.11,26.11,0,0,0,3.88,4.56A33.63,33.63,0,0,0,91.88,58,29.61,29.61,0,0,1,106.36,70,34,34,0,0,1,112,88.79Z"
        fill="#4444c6"
      />
      <path d="M115.63,89.57l0,.06H12.4l0-.06Z" fill="#4444c6" />
      <rect x="63.97" y="6.4" width="0.06" height="115.2" fill="#4444c6" />
    </Svg>
  );
};

export default Icon;
