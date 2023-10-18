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
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M60 30C60 46.5685 46.5685 60 30 60C13.4315 60 0 46.5685 0 30C0 13.4315 13.4315 0 30 0C46.5685 0 60 13.4315 60 30Z"
        fill="#D9D9D9"
      />
      <path
        d="M20 16C17.25 16 14.8 17.15 12.95 18.95C11.15 20.75 10 23.2 10 26C10 28.75 11.15 31.2 12.95 33.05L30 50.1L47.05 33.05C48.85 31.25 50 28.8 50 26C50 23.25 48.85 20.8 47.05 18.95C45.25 17.15 42.8 16 40 16C37.25 16 34.8 17.15 32.95 18.95C31.15 20.75 30 23.2 30 26C30 23.25 28.85 20.8 27.05 18.95C25.25 17.15 22.8 16 20 16Z"
        fill="white"
      />
    </svg>
  );
};

export default CommentIcon;
