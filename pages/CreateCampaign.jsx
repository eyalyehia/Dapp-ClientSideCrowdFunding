import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { money } from '../assets';
import { useStateContext } from '../context/CreateContext'
import { ethers } from 'ethers';
import { CustomButton , CustomInput , Loader } from '../component';
import { checkIfImage } from '../utils'

const CreateCampaign = () => {
  const navigate = useNavigate();
  const [isLoading,setIsLoading] = useState(false);
  const { createCampaign } = useStateContext()
  const [form,setForm] = useState({
    name:'',
    title:'',
    description:'',
    target:'',
    deadline:'',
    image:''
  })

const handleFormFieldChange = (typeName,e) => {
  setForm({...form,[typeName]:e.target.value })
}

  const handleSubmit = async (e) => {
  try {
    e.preventDefault();
    checkIfImage(form.image,async (exists) => {
      if(exists){
        setIsLoading(true);
        await createCampaign({...form,target:ethers.utils.parseUnits(form.target,18)});
        setIsLoading(false);
        navigate('/')
      }
      else{
        alert('Provide valid image URL')
        setForm({...form,image:''});
      }
    })
  } catch (error) {
    console.log(error)
  } }




  return (
    <div className='flex justify-center items-center
     flex-col bg-[#1c1c24] p-4 sm:p-10 rounded-[10px]'>
      {isLoading ? <Loader /> : (
        <>
        <div className='bg-[#3a3a43] sm:min-w-380px p-4 rounded-[10px]'>
          <h1 className='font-epilogue font-bold
           text-white text-[18px] sm:text-[25px] leading-[36px]'>
            CreateCampaign</h1>
        </div>
        <form onSubmit={handleSubmit}
        className='flex flex-col w-full mt-[65px] gap-[30px]'>
          <div className='flex flex-wrap gap-[30px]'>
         <CustomInput
         type='text'
         placeHolder='Joe Doe'
         value={form.name}
         labelName='Your Name *'
         handleChange={(e)=> handleFormFieldChange('name',e)}
         />
         <CustomInput
         type='text'
         placeHolder='Campaign Title'
         value={form.title}
         labelName='Write a Title *'
         handleChange={(e)=> handleFormFieldChange('title',e)}
         />
         </div>
         <div>
         <CustomInput
         textArea
         placeHolder='Write your story'
         value={form.description}
         labelName='Story *'
         handleChange={(e)=> handleFormFieldChange('description',e)}
         />
         </div>
         <div className='flex bg-[#8c6dfd] p-[20px] rounded-[10px] items-center'>
          <img src={money} alt={money} className='mr-[15px] sm:w-[30px] w-[20px]' />
          <h1 className='text-white font-epilogue font-bold text-[20px] w-[70%]'>You will get 100% of the raised amount</h1>
         </div>
         <div className='flex sm:flex-row flex-col flex-wrap gap-[30px]'>
         <CustomInput
         type='number'
         placeHolder='ETH 0.50'
         step
         value={form.target}
         labelName='Goal *'
         handleChange={(e)=> handleFormFieldChange('target',e)}
         />
         <CustomInput
         type='date'
         placeHolder=''
         value={form.deadline}
         labelName='End Date *'
         handleChange={(e)=> handleFormFieldChange('deadline',e)}
         />
         </div>

         <CustomInput
         type='url'
         placeHolder='Place image URL of your canpaign'
         value={form.image}
         labelName='Campaign image *'
         handleChange={(e)=> handleFormFieldChange('image',e)}
         />
         
         <div className='mt-[40px]'>
          <CustomButton
          btnType='submit'
          title='Submit new Campaign'
          styles='bg-[#1dc071]'
           />
         </div>
        </form>
        </>
      )}
      
    </div>
      
      
    
  )
}

export default CreateCampaign