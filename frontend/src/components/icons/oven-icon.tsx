import type { SVGProps } from "react";
const SvgOvenIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 6H36C38.7614 6 41 8.23858 41 11V37C41 39.7614 38.7614 42 36 42H12C9.23858 42 7 39.7614 7 37V11C7 8.23858 9.23858 6 12 6Z"
      strokeWidth={4}
      strokeLinejoin="round"
      stroke="rgb(var(--text))"
    />
    <path
      d="M7 16H41"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke="rgb(var(--text))"
    />
    <path
      d="M16 22H32C33.6569 22 35 23.3431 35 25V33C35 34.6569 33.6569 36 32 36H16C14.3431 36 13 34.6569 13 33V25C13 23.3431 14.3431 22 16 22Z"
      strokeWidth={4}
      strokeLinejoin="round"
      stroke="rgb(var(--text))"
    />
    <path
      d="M16 11H16.02"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke="rgb(var(--icon-accent))"
    />
    <path
      d="M24 11H24.02"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke="rgb(var(--icon-accent))"
    />
  </svg>
);
export default SvgOvenIcon;
