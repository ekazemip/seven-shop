import type { SVGProps } from "react";
const SvgDiscountIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6 25.2V9C6 8.20435 6.31607 7.44129 6.87868 6.87868C7.44129 6.31607 8.20435 6 9 6H25.2C25.6072 5.98962 26.0123 6.0623 26.3906 6.21359C26.7688 6.36489 27.1123 6.59163 27.4 6.88L41.4 20.88C41.9497 21.4408 42.2576 22.1947 42.2576 22.98C42.2576 23.7653 41.9497 24.5192 41.4 25.08L25.2 41.28C24.6392 41.8297 23.8853 42.1376 23.1 42.1376C22.3147 42.1376 21.5608 41.8297 21 41.28L7 27.28C6.70425 27.0165 6.46361 26.697 6.29198 26.34C6.12035 25.983 6.02111 25.5955 6 25.2Z"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke="rgb(var(--text))"
    />
    <path
      d="M18.8 16C18.8 17.5464 17.5464 18.8 16 18.8C14.4536 18.8 13.2 17.5464 13.2 16C13.2 14.4536 14.4536 13.2 16 13.2C17.5464 13.2 18.8 14.4536 18.8 16Z"
      strokeWidth={4}
      stroke="rgb(var(--icon-accent))"
    />
  </svg>
);
export default SvgDiscountIcon;
