import * as React from "react";

const Logo = ({ width = "w-12" }: { width?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`${width}`}
    viewBox="0 0 200 200"
    fill="none"
  >
    <path
      fill="#ffffff"
      fillRule="evenodd"
      d="M44.297 57.848c-9.168-15.892-3.718-36.233 12.166-45.403 15.886-9.179 36.234-3.726 45.403 12.166l24.936 43.175-12.166 45.403-45.405-12.159zM36.578 177.453l-24.933-43.181 12.17-45.394 45.4 12.157 24.931 43.182c9.17 15.885 3.718 36.234-12.166 45.403-15.886 9.179-36.234 3.726-45.402-12.167"
      clipRule="evenodd"
    ></path>
  </svg>
);

export default Logo;
