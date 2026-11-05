import type { SVGProps } from "react";
const SvgLocationIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M24 42C13 30 10 24 10 19C10 15.287 11.475 11.726 14.1005 9.1005C16.726 6.475 20.287 5 24 5C27.713 5 31.274 6.475 33.8995 9.1005C36.525 11.726 38 15.287 38 19C38 24 35 30 24 42Z"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke="rgb(var(--text))"
    />
    <path
      d="M29 19C29 21.7614 26.7614 24 24 24C21.2386 24 19 21.7614 19 19C19 16.2386 21.2386 14 24 14C26.7614 14 29 16.2386 29 19Z"
      strokeWidth={4}
      stroke="rgb(var(--icon-accent))"
    />
  </svg>
);
export default SvgLocationIcon;
