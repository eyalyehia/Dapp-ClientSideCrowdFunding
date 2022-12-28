import React from 'react'

const CustomInput = ({type , textArea , handleChange , placeHolder , labelName }) => {
  return (<label className='flex flex-col flex-1'>
    {labelName && <span
    className='mb-[8px] font-epilogue
     font-semibold text-[#808191] text-[14px] leading-5'>{labelName}</span>}
    {textArea ?
    (<textarea
      required
      className='rounded-[10px] outline-none border-[1px] border-[#3a3a43] sm:px-[25px]
      bg-transparent font-epilogue px-[15px] py-[10px] text-white text-[14px] placeholder:text-[#4b5264]
      sm:min-w-300px'
      rows={10}
     type={type} 
     onChange={handleChange}
     placeholder={placeHolder}
      />) :
    (<input 
      required
     className='rounded-[10px] outline-none border-[1px] border-[#3a3a43] sm:px-[25px]
     bg-transparent px-[15px] py-[10px] font-epilogue text-white text-[14px] placeholder:text-[#4b5264]
     sm:min-w-300px'
     step='0.5'
    type={type} 
    placeholder={placeHolder}
    onChange={handleChange}
    />)}
  </label>
  )
}

export default CustomInput