import type { SVGProps } from "react";
const SvgSupportIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8 28V24C8 19.7565 9.68571 15.6869 12.6863 12.6863C15.6869 9.68571 19.7565 8 24 8C28.2435 8 32.3131 9.68571 35.3137 12.6863C38.3143 15.6869 40 19.7565 40 24V28"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke="rgb(var(--text))"
    />
    <path
      d="M11 26C13.2091 26 15 27.7909 15 30V34C15 36.2091 13.2091 38 11 38C8.79086 38 7 36.2091 7 34V30C7 27.7909 8.79086 26 11 26Z"
      strokeWidth={4}
      strokeLinejoin="round"
      stroke="rgb(var(--text))"
    />
    <path
      d="M37 26C39.2091 26 41 27.7909 41 30V34C41 36.2091 39.2091 38 37 38C34.7909 38 33 36.2091 33 34V30C33 27.7909 34.7909 26 37 26Z"
      strokeWidth={4}
      strokeLinejoin="round"
      stroke="rgb(var(--text))"
    />
    <path
      d="M40 38C40 42 36 43 30 43"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke="rgb(var(--icon-accent))"
    />
  </svg>
);
export default SvgSupportIcon;
