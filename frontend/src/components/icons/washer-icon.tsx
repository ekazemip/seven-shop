import type { SVGProps } from "react";
const SvgWasherIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M13 5H35C37.7614 5 40 7.23858 40 10V38C40 40.7614 37.7614 43 35 43H13C10.2386 43 8 40.7614 8 38V10C8 7.23858 10.2386 5 13 5Z"
      strokeWidth={4}
      strokeLinejoin="round"
      stroke="rgb(var(--text))"
    />
    <path
      d="M8 15H40"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke="rgb(var(--text))"
    />
    <path
      d="M33 29C33 33.9706 28.9706 38 24 38C19.0294 38 15 33.9706 15 29C15 24.0294 19.0294 20 24 20C28.9706 20 33 24.0294 33 29Z"
      strokeWidth={4}
      stroke="rgb(var(--text))"
    />
    <path
      d="M30 10H34"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke="rgb(var(--icon-accent))"
    />
  </svg>
);
export default SvgWasherIcon;
