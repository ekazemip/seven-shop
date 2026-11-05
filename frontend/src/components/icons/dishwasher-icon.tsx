import type { SVGProps } from "react";
const SvgDishwasherIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M13 6H35C37.7614 6 40 8.23858 40 11V37C40 39.7614 37.7614 42 35 42H13C10.2386 42 8 39.7614 8 37V11C8 8.23858 10.2386 6 13 6Z"
      strokeWidth={4}
      strokeLinejoin="round"
      stroke="rgb(var(--text))"
    />
    <path
      d="M8 16H40"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke="rgb(var(--text))"
    />
    <path
      d="M31 29C31 32.866 27.866 36 24 36C20.134 36 17 32.866 17 29C17 25.134 20.134 22 24 22C27.866 22 31 25.134 31 29Z"
      strokeWidth={4}
      stroke="rgb(var(--text))"
    />
    <path
      d="M18 11H30"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke="rgb(var(--icon-accent))"
    />
  </svg>
);
export default SvgDishwasherIcon;
