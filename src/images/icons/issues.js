import React from "react"
const issues = home => (
  <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M10 0C4.48 0 0 4.478 0 9.994c0 5.517 4.48 9.995 10 9.995s10-4.478 10-9.995C20 4.478 15.52 0 10 0zM9 14.992v-2h2v2H9zm0-9.995v5.997h2V4.997H9z"
      fill={home ? "#fff" : "#000"}
    />
  </svg>
)

export default issues
