import React from "react";

interface SVGAttributeProps extends React.SVGAttributes<HTMLOrSVGElement> {
  width?: number;
  height?: number;
}

const ProvIcon = ({ width = 10, height = 10 }: SVGAttributeProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="40"
        cy="40"
        r="38"
        transform="rotate(90 40 40)"
        stroke="black"
        stroke-width="4"
      />
      <path
        d="M56 40L34 18L25.75 26.25L39.5 40L25.75 53.75L34 62L56 40Z"
        fill="black"
      />
    </svg>
  );
};

export default ProvIcon;
