import React from 'react'
import { tagType , thirdweb } from '../assets';
import { daysLeft } from '../utils'


const FundCard = ({owner , title , description , target
, deadline , amountCollected , image , handleClick}) => {

    const remainingDays = daysLeft(deadline)

  return (
    <div className='sm:w-[288px] w-full rounded-[15px]
     bg-[#1c1c24] cursor-pointer' onClick={handleClick}>
        <img src={image} alt='fund' className='h-[158px] w-full
         object-cover rounded-[15px]' />

         <div className='flex flex-col p-4'>
            <div className='flex gap-[15px] items-center'>
             <img src={tagType} alt='tag' className='w-[17px] h-[17px] object-contain' />
             <p className='font-epilogue font-medium mt-[2px] text-[12px] text-[#808191]'>Category</p>
            </div>
            <div>
                <h3 className='font-epilogue text-white
                mt-[12px] font-semibold text-[15px]'>{title}</h3>
                <p className='text-[#808191] truncate mt-[5px] text-[12px] font-normal'>{description}</p>
            </div>
            <div className='flex justify-between mt-[8px]'>
                <div>
                  <p className='text-[#b2b3bd]'>{amountCollected}</p>
                  <p className='text-[#808191] mt-[5px] text-[13px] font-normal'>Raised of {target}</p>
                </div>
                <div>
                <p className='text-[#b2b3bd]'>{remainingDays}</p>
                <p className='text-[#808191] mt-[5px] text-[13px] font-normal'>Days Left</p>
                </div>
            </div>
            <div className='flex items-center gap-[10px] mt-[8px]'>
                <div className='bg-[#13131a] w-[45px] h-[25px]
                rounded-full items-center flex justify-center'>
                <img src={thirdweb} alt='fund' className='w-[18px] h-[18px] object-contain' />
                </div>
                <p className='truncate text-[#808191]'>by<span className='text-[#b2b3bd] ml-1 text-[14px]'>{owner}</span></p>
            </div>
         </div>

    </div>
  )
}

export default FundCard