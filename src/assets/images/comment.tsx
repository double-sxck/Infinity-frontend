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
      viewBox="0 0 23 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 0V14.2857L2.85714 11.4286H5.71429V2.85714H14.2857V0H0ZM8.57143 5.71429V17.1429H20L22.8571 20V5.71429H8.57143Z"
        fill="white"
      />
    </svg>
  );
};

export default CommentIcon;
