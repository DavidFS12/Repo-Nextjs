import { SVGProps } from "react";

const IconBurger = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path 
        fill="#5243c2"
        d=""
      />
    </g>
    <defs>
      <clipPath id="a">
        <path
          fill = "#fff"
          d = "M0 0h16v16H0z"
        />
      </clipPath>
    </defs>
  </svg>
);
export default IconBurger