import type { SVGProps } from "react";
const SvgFridgeIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M17 5H31C33.7614 5 36 7.23858 36 10V38C36 40.7614 33.7614 43 31 43H17C14.2386 43 12 40.7614 12 38V10C12 7.23858 14.2386 5 17 5Z"
      strokeWidth={4}
      strokeLinejoin="round"
      stroke="rgb(var(--text))"
    />
    <path
      d="M12 20H36"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke="rgb(var(--text))"
    />
    <path
      d="M19 11V15"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke="rgb(var(--icon-accent))"
    />
    <path
      d="M19 25V32"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke="rgb(var(--icon-accent))"
    />
  </svg>
);
export default SvgFridgeIcon;
