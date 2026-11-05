import type { SVGProps } from "react";
const SvgProductsIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11 7H17C19.2091 7 21 8.79086 21 11V17C21 19.2091 19.2091 21 17 21H11C8.79086 21 7 19.2091 7 17V11C7 8.79086 8.79086 7 11 7Z"
      strokeWidth={4}
      strokeLinejoin="round"
      stroke="rgb(var(--text))"
    />
    <path
      d="M31 7H37C39.2091 7 41 8.79086 41 11V17C41 19.2091 39.2091 21 37 21H31C28.7909 21 27 19.2091 27 17V11C27 8.79086 28.7909 7 31 7Z"
      strokeWidth={4}
      strokeLinejoin="round"
      stroke="rgb(var(--icon-accent))"
    />
    <path
      d="M11 27H17C19.2091 27 21 28.7909 21 31V37C21 39.2091 19.2091 41 17 41H11C8.79086 41 7 39.2091 7 37V31C7 28.7909 8.79086 27 11 27Z"
      strokeWidth={4}
      strokeLinejoin="round"
      stroke="rgb(var(--text))"
    />
    <path
      d="M31 27H37C39.2091 27 41 28.7909 41 31V37C41 39.2091 39.2091 41 37 41H31C28.7909 41 27 39.2091 27 37V31C27 28.7909 28.7909 27 31 27Z"
      strokeWidth={4}
      strokeLinejoin="round"
      stroke="rgb(var(--text))"
    />
  </svg>
);
export default SvgProductsIcon;
