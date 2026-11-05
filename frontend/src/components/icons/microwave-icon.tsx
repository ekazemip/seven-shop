import type { SVGProps } from "react";
const SvgMicrowaveIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10 11H38C40.7614 11 43 13.2386 43 16V32C43 34.7614 40.7614 37 38 37H10C7.23858 37 5 34.7614 5 32V16C5 13.2386 7.23858 11 10 11Z"
      strokeWidth={4}
      strokeLinejoin="round"
      stroke="rgb(var(--text))"
    />
    <path
      d="M14 17H26C27.6569 17 29 18.3431 29 20V28C29 29.6569 27.6569 31 26 31H14C12.3431 31 11 29.6569 11 28V20C11 18.3431 12.3431 17 14 17Z"
      strokeWidth={4}
      strokeLinejoin="round"
      stroke="rgb(var(--text))"
    />
    <path
      d="M36 19H36.02"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke="rgb(var(--icon-accent))"
    />
    <path
      d="M36 25H36.02"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke="rgb(var(--icon-accent))"
    />
    <path
      d="M36 31H36.02"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke="rgb(var(--icon-accent))"
    />
  </svg>
);
export default SvgMicrowaveIcon;
