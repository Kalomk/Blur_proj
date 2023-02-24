import * as React from 'react';
const SvgBytesizeSettings = (props) => (
  <svg
    className="icons"
    width={32}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      clipPath="url(#bytesize_settings_svg__a)"
      stroke="#0070F4"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.571 0v4.571l-2.285 1.143-3.429-3.428-4.571 4.571 3.428 3.429-1.143 2.285H0v6.858h4.571l1.143 2.285-3.428 3.429 4.571 4.571 3.429-3.428 2.285 1.143V32h6.858v-4.571l2.285-1.143 3.429 3.428 4.571-4.571-3.428-3.429 1.143-2.285H32V12.57h-4.571l-1.143-2.285 3.428-3.429-4.571-4.571-3.429 3.428-2.285-1.143V0H12.57Z" />
      <path d="M16 20.571a4.571 4.571 0 1 0 0-9.142 4.571 4.571 0 0 0 0 9.142Z" />
    </g>
    <defs>
      <clipPath id="bytesize_settings_svg__a">
        <path fill="#fff" d="M0 0h32v32H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBytesizeSettings;
