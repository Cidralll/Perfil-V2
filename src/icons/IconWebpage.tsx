// icon:basic_webpage_img_txt | Linea Iconset https://linea.io/ | Benjamin Sigidi
import * as React from "react";

function IconWebpage(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="currentColor"
      height="2.5em"
      width="2.5em"
      color="#333"
      {...props}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeMiterlimit={10}
        strokeWidth={2}
        d="M1 7h62v50H1zM1 15h62M10 11H6M18 11h-4M26 11h-4M6 25h27M6 33h27M6 41h27"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeMiterlimit={10}
        strokeWidth={2}
        d="M38 25h19v16H38z"
      />
    </svg>
  );
}

export default IconWebpage;
