import React, { useState } from 'react';
import {Link , useNavigate} from 'react-router-dom';
import { useStateContext } from '../context/CreateContext'
import { CustomButton } from './';
import {menu , search , thirdweb} from '../assets';
import { navlinks } from '../constants';


const Navbar = () => {

const navigate = useNavigate();
const [isActive , setIsActive] = useState('dashboard');
const [toggleDrawer,setToggleDrawer] = useState(false);
const { connect , address } = useStateContext()


  return (
    <div className='flex md:flex-row 
     flex-col-reverse justify-between mb-[35px] gap-6'>
      <div className='lg:flex-1 flex flex-row
       max-w-[458px] py-2 pl-4 pr-2 h-[52px] bg-[#1c1c24] rounded-full'>
        <input placeholder='Search for Campaign'
        className='font-epilogue font-normal bg-[#1c1c24]
         text-[14px] placeholder:text-[#4b5264] text-white
         bg-transparent outline-none w-full' />
     <div className='w-[72px] h-full rounded-[20px]
     bg-[#4acd8d] flex justify-center items-center cursor-pointer'>
      <img className='w-[15px] h-[15px] object-contain' src={search} alt='search' />
     </div>
      </div>
            {/* {FULL SCREEN NAVIGATION} */}
      <div className='sm:flex hidden flex-row justify-end gap-4'>
      <CustomButton
      btnType='button'
      title={address ? 'Create a campaign' : 'Connect'}
      styles={address ? 'bg-[#1dc071]' : 'bg-[#8c6dfd]'}
      handleClick={() => {
      address ? navigate('create-campaign') : connect();
      }}
        />
        <Link to='/profile'>
      <div className='flex justify-center items-center
       bg-[#2c2f32] w-[52px] h-[52px] rounded-full'>
       <img className='w-[60%] h-[60%] object-contain' src={thirdweb} alt='thirdweb' />
      </div>
      </Link>
      </div>
            {/* {SMALL SCREEN NAVIGATION} */}

      <div className='sm:hidden flex justify-between items-center relative'>
      <Link to='/profile'>
      <div className='flex justify-center items-center
       bg-[#2c2f32] w-[40px] h-[40px] rounded-[10px]'>
       <img className='w-[60%] h-[60%] object-contain' src={thirdweb} alt='thirdweb' />
      </div>
      </Link>
       <img 
       className='w-[34px] h-[35px] object-contain cursor-pointer'
       src={menu}
       alt='menu'
       onClick={() => setToggleDrawer((prev)=> !prev)} />
       {toggleDrawer && (
     <div
      className={`absolute top-[60px] right-0 left-0 bg-[#1c1c24]
      shadow-secondary py-4 duration-700 transition-all
      z-10`}
      >
        <ul>
     {navlinks.map((item)=>(
      <li
      className='list-none h-[42px] ml-4 mb-1 flex'
       key={item.name}
       onClick={() => 
        {setIsActive(item.name)
        navigate(item.link)
        setToggleDrawer(false)
        }}
      >
       <img
       src={item.imgUrl}
        alt={item.name}
        className={`w-[24px] h-[24px] object-contain ${isActive === item.name ? `grayscale-0` : 'grayscale'}`}
       />
       <p className={`ml-5 font-epilogue font-semibold
        text-[14px]
         ${isActive === item.name ? 'text-[#1dc071]' : 'text-[#808191]'}`}>
        {item.name}
       </p>
      </li>
     ))}
     </ul>
     <div className='flex mx-4'>
     <CustomButton
      btnType='button'
      title={address ? 'Create a campaign' : 'Connect'}
      styles={address ? 'bg-[#1dc071]' : 'bg-[#8c6dfd]'}
      handleClick={() => {
      if(address){
        navigate('create-campaign')
        setToggleDrawer(false)
      }
      else{
        connect();
      } 
      }}
        />
     </div>
     </div>
       )}
      </div>
    </div>
  )
}

export default Navbar