import React from "react";

interface SVGAttributeProps extends React.SVGAttributes<HTMLOrSVGElement> {
  width?: number;
  height?: number;
}

const CommentIcon = ({ width = 10, height = 10 }: SVGAttributeProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.5"
        y="0.5"
        width="39"
        height="39"
        rx="9.5"
        fill="white"
        stroke="#D9D9D9"
      />
      <path
        d="M16.5 32.5L16.5 25.5C30.5 25.5 34 18.325 34 8C32.18 14.93 27 18.5 20 18.5L16.5 18.5L16.5 11.5L6 22.56L16.5 32.5Z"
        fill="#9A9A9A"
      />
    </svg>
  );
};

export default CommentIcon;
