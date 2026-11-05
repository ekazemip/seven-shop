import type { SVGProps } from "react";
const SvgLoginIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M28 8H36C37.0609 8 38.0783 8.42143 38.8284 9.17157C39.5786 9.92172 40 10.9391 40 12V36C40 37.0609 39.5786 38.0783 38.8284 38.8284C38.0783 39.5786 37.0609 40 36 40H28"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke="rgb(var(--text))"
    />
    <path
      d="M8 24H30M22 32L30 24L22 16"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke="rgb(var(--icon-accent))"
    />
  </svg>
);
export default SvgLoginIcon;
