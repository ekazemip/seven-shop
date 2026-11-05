import type { SVGProps } from "react";
const SvgFilterIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8 14H13.2M22.8 14H40"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke="rgb(var(--text))"
    />
    <path
      d="M8 34H25.2M34.8 34H40"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke="rgb(var(--text))"
    />
    <path
      d="M22.8 14C22.8 16.651 20.651 18.8 18 18.8C15.349 18.8 13.2 16.651 13.2 14C13.2 11.349 15.349 9.20001 18 9.20001C20.651 9.20001 22.8 11.349 22.8 14Z"
      strokeWidth={4}
      stroke="rgb(var(--icon-accent))"
    />
    <path
      d="M34.8 34C34.8 36.651 32.651 38.8 30 38.8C27.349 38.8 25.2 36.651 25.2 34C25.2 31.349 27.349 29.2 30 29.2C32.651 29.2 34.8 31.349 34.8 34Z"
      strokeWidth={4}
      stroke="rgb(var(--icon-accent))"
    />
  </svg>
);
export default SvgFilterIcon;
