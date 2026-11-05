import type { SVGProps } from "react";
const SvgAirConditionerIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path
      d="M11 10H37C39.7614 10 42 12.2386 42 15V21C42 23.7614 39.7614 26 37 26H11C8.23858 26 6 23.7614 6 21V15C6 12.2386 8.23858 10 11 10Z"
      strokeWidth={4}
      strokeLinejoin="round"
      stroke="rgb(var(--text))"
    />
    <path
      d="M14 18H34"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke="rgb(var(--icon-accent))"
    />
    <path
      d="M14 34V38M24 33V40M34 34V38"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke="rgb(var(--text))"
    />
  </svg>
);
export default SvgAirConditionerIcon;
