import React from 'react';
import { FundCard } from '../component';
import { Loader } from '../component';
import { useNavigate } from 'react-router-dom';

const DisplayCampagins = ({isLoading , campaign , title}) => {

  const navigate = useNavigate();

  const handleNavigate = (campaign) => {
    navigate(`/campaign-details/${campaign.title}` , {state : campaign});
  }

  return (
    <div>
      <h1 className='text-white font-epilogue font-semibold text-[25px]'>{title} ({campaign.length})</h1>
    
    <div className='flex flex-wrap gap-[40px]'>
    {isLoading && <Loader />}

    {!isLoading && campaign.length === 0 && (
      <div className='flex justify-center items-center w-full mt-[100px]'>
      <h1 className='text-white text-[25px] font-epilogue font-semibold'>you have not created any campaigns yet!</h1>
      </div>)}

      {!isLoading && campaign.length > 0 && (<>
        {campaign.map((item) => (
        <FundCard 
        key={item.pId}
        {...item}
        handleClick={() => handleNavigate(item)}
        />
        ))}
      </>)  }
    
  
  
  </div>
  </div>
  )
}

export default DisplayCampagins