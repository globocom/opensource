import React from "react"
const commits = home => (
  <svg fill="none" height="13" width="29" xmlns="http://www.w3.org/2000/svg">
    <g stroke={home ? "#fff" : "#000"}>
      <path
        clip-rule="evenodd"
        d="m14.5 10.995a4.499 4.499 0 1 0 0-8.995 4.499 4.499 0 1 0 0 8.995z"
        fill={home ? "#000" : "#fff"}
        fill-rule="evenodd"
        stroke-width="3"
      />
      <path
        d="m19.5 4.498h9v3.998h-9zm-19 0h9v3.998h-9z"
        fill={home ? "#fff" : "#000"}
      />
    </g>
  </svg>
)

export default commits
