import type { SVGProps } from "react";
const SvgDeliveryIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6 12H28V33H6V12Z"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke="rgb(var(--text))"
    />
    <path
      d="M28 19H36L42 25V33H28"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke="rgb(var(--text))"
    />
    <path
      d="M19 35C19 37.2091 17.2091 39 15 39C12.7909 39 11 37.2091 11 35C11 32.7909 12.7909 31 15 31C17.2091 31 19 32.7909 19 35Z"
      strokeWidth={4}
      stroke="rgb(var(--icon-accent))"
    />
    <path
      d="M39 35C39 37.2091 37.2091 39 35 39C32.7909 39 31 37.2091 31 35C31 32.7909 32.7909 31 35 31C37.2091 31 39 32.7909 39 35Z"
      strokeWidth={4}
      stroke="rgb(var(--icon-accent))"
    />
  </svg>
);
export default SvgDeliveryIcon;
