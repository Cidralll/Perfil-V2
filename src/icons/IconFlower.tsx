// icon:flower-tulip-outline | Material Design Icons https://materialdesignicons.com/ | Austin Andrews
import * as React from "react";

function IconFlower(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1em"
      width="1em"
      color="white"
      {...props}
    >
      <path d="M3 13a9 9 0 009 9 9 9 0 00-9-9m2.44 2.44c1.91.71 3.41 2.21 4.12 4.12a6.986 6.986 0 01-4.12-4.12M12 22a9 9 0 009-9 9 9 0 00-9 9m2.42-2.43a6.876 6.876 0 014.15-4.15 7.03 7.03 0 01-4.15 4.15M12 14a6 6 0 006-6V3a5.9 5.9 0 00-2.16.39c-.55.23-1.04.57-1.45 1L12 2 9.61 4.39c-.41-.43-.9-.77-1.45-1A5.9 5.9 0 006 3v5a6 6 0 006 6M8 5.61l1.57 1.65L12 4.83l2.43 2.43L16 5.61V8a4 4 0 01-4 4 4 4 0 01-4-4V5.61z" />
    </svg>
  );
}

export default IconFlower;
