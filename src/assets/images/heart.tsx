import React from "react";

interface SVGAttributeProps extends React.SVGAttributes<HTMLOrSVGElement> {
  width?: number;
  height?: number;
  color?: string;
}

const HeartIcon = ({ width = 32, height = 32 }: SVGAttributeProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.8651 0C4.2522 0 2.81525 0.674487 1.73021 1.73021C0.674487 2.78592 0 4.22287 0 5.8651C0 7.47801 0.674487 8.91496 1.73021 10L11.7302 20L21.7302 10C22.7859 8.94428 23.4604 7.50733 23.4604 5.8651C23.4604 4.2522 22.7859 2.81525 21.7302 1.73021C20.6745 0.674487 19.2375 0 17.5953 0C15.9824 0 14.5455 0.674487 13.4604 1.73021C12.4047 2.78592 11.7302 4.22287 11.7302 5.8651C11.7302 4.2522 11.0557 2.81525 10 1.73021C8.94428 0.674487 7.50733 0 5.8651 0Z"
        fill="white"
      />
    </svg>
  );
};

export default HeartIcon;
