import React from 'react'

const First = ({className}:any) => {
  return (
    <svg
    className={className}
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 52 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M26 2H50"
      stroke="white"
      stroke-width="3"
      stroke-linecap="round"
    />
    <path
      d="M2 18H50"
      stroke="white"
      stroke-width="3"
      stroke-linecap="round"
    />
    <path
      d="M13 34L50 34"
      stroke="white"
      stroke-width="3"
      stroke-linecap="round"
    />
  </svg>
  )
}

export default First
