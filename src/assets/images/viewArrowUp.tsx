import React from "react";

interface SVGAttributeProps extends React.SVGAttributes<HTMLOrSVGElement> {
  width?: number;
  height?: number;
  color?: string;
}

const ViewArrowhIcon = ({}: SVGAttributeProps) => {
  return (
    <svg
      width="16"
      height="15"
      viewBox="0 0 16 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.1875 10.3125L15 7.5L7.5 0L0 7.5L2.8125 10.3125L7.5 5.625L12.1875 10.3125Z"
        fill="black"
      ></path>
    </svg>
  );
};

export default ViewArrowhIcon;
