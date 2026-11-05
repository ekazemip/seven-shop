import type { SVGProps } from "react";
const SvgCloseIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 12L36 36"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke="rgb(var(--text))"
    />
    <path
      d="M36 12L12 36"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke="rgb(var(--icon-accent))"
    />
  </svg>
);
export default SvgCloseIcon;
