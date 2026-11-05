import type { SVGProps } from "react";
const SvgStarIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M24 7L29.2 18L41 19.4L32.2 27.6L34.6 39.4L24 33.6L13.4 39.4L15.8 27.6L7 19.4L18.8 18L24 7Z"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke="rgb(var(--icon-accent))"
    />
  </svg>
);
export default SvgStarIcon;
