import type { SVGProps } from "react";
const SvgPaymentIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11 11H37C39.7614 11 42 13.2386 42 16V32C42 34.7614 39.7614 37 37 37H11C8.23858 37 6 34.7614 6 32V16C6 13.2386 8.23858 11 11 11Z"
      strokeWidth={4}
      strokeLinejoin="round"
      stroke="rgb(var(--text))"
    />
    <path
      d="M6 20H42"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke="rgb(var(--icon-accent))"
    />
    <path
      d="M14 30H20"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke="rgb(var(--text))"
    />
  </svg>
);
export default SvgPaymentIcon;
