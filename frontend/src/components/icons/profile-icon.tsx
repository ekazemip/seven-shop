import type { SVGProps } from "react";
const SvgProfileIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M32 16C32 20.4183 28.4183 24 24 24C19.5817 24 16 20.4183 16 16C16 11.5817 19.5817 8 24 8C28.4183 8 32 11.5817 32 16Z"
      strokeWidth={4}
      stroke="rgb(var(--text))"
    />
    <path
      d="M9 41C9 37.0218 10.5804 33.2064 13.3934 30.3934C16.2064 27.5804 20.0218 26 24 26C27.9782 26 31.7936 27.5804 34.6066 30.3934C37.4196 33.2064 39 37.0218 39 41"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke="rgb(var(--icon-accent))"
    />
  </svg>
);
export default SvgProfileIcon;
