import React from "react"

export default ({ width = 84, height = 70 }) => (
  <svg
    width={width}
    height={height}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 84 70"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M50.577 0h8.72L83.71 14l-6.974 19.25-10.464-3.5V70H17.441V29.75l-10.464 3.5L0 14 24.416 0h8.72c0 4.826 3.912 8.75 8.72 8.75 4.807 0 8.721-3.924 8.721-8.75zm16.764 26.46l7.234 2.414 4.806-13.232L58.347 3.608h-4.806c-1.498 5.043-6.162 8.72-11.686 8.72-5.522 0-10.188-3.677-11.687-8.72h-4.805L4.33 15.642l4.806 13.232 7.233-2.414 4.585-1.532v41.464h41.802V24.928l4.585 1.532z"
      fill="currentColor"
    />
  </svg>
)
