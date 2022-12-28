import React from 'react'

const CustomButton = ({btnType, styles , title , handleClick}) => {
  return (
    <button
    className={`font-epilogue font-semibold text-white rounded-[10px] 
    text-[16px] min-h-[52px] leading-[26px] px-4
    ${styles} `}
    type={btnType}
    onClick={handleClick}
    >
      {title}
    </button>
  )
}

export default CustomButton