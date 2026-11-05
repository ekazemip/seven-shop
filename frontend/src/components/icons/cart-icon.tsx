import type { SVGProps } from "react";
const SvgCartIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6 8H11L12.7182 17M12.7182 17L15.2 30C15.3413 30.7411 15.7399 31.4083 16.3254 31.8841C16.911 32.3598 17.6457 32.6134 18.4 32.6H34.8C35.5267 32.623 36.2396 32.3978 36.8212 31.9616C37.4028 31.5254 37.8186 30.9041 38 30.2L40.8 17H12.7182ZM12.7182 17H12.6"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke="rgb(var(--text))"
    />
    <path
      d="M21.4 40C21.4 41.3255 20.3255 42.4 19 42.4C17.6745 42.4 16.6 41.3255 16.6 40C16.6 38.6745 17.6745 37.6 19 37.6C20.3255 37.6 21.4 38.6745 21.4 40Z"
      strokeWidth={4}
      stroke="rgb(var(--icon-accent))"
    />
    <path
      d="M36.4 40C36.4 41.3255 35.3255 42.4 34 42.4C32.6745 42.4 31.6 41.3255 31.6 40C31.6 38.6745 32.6745 37.6 34 37.6C35.3255 37.6 36.4 38.6745 36.4 40Z"
      strokeWidth={4}
      stroke="rgb(var(--icon-accent))"
    />
  </svg>
);
export default SvgCartIcon;
