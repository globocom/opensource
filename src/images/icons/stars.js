import React from "react"
const stars = home => (
  <svg fill="none" height="20" width="21" xmlns="http://www.w3.org/2000/svg">
    <path
      d="m10.5 16.065 6.489 3.924-1.722-7.396 5.733-4.976-7.55-.642-2.95-6.975-2.95 6.975-7.55.642 5.733 4.976-1.722 7.396z"
      fill={home ? "#fff" : "#000"}
    />
  </svg>
)

export default stars
