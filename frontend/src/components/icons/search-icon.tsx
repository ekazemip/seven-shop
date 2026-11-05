import type { SVGProps } from "react";
const SvgSearchIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M35 22C35 29.1797 29.1797 35 22 35C14.8203 35 9 29.1797 9 22C9 14.8203 14.8203 9 22 9C29.1797 9 35 14.8203 35 22Z"
      strokeWidth={4}
      stroke="rgb(var(--text))"
    />
    <path
      d="M32 32L41 41"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke="rgb(var(--icon-accent))"
    />
  </svg>
);
export default SvgSearchIcon;
