import React, {useState , useEffect} from 'react';
import { useStateContext } from '../context/CreateContext'
import { DisplayCampagins } from '../component'



const Home = () => {

  const [isLoading,setIsLoading] = useState(false);
  const [campaign,setCampaign] = useState([])
  const { address , contract , getCampaigns } = useStateContext();

  const getCampaign = async() =>{
    setIsLoading(true)
    const campaigns = await getCampaigns()
    setCampaign(campaigns)
    setIsLoading(false)
  }

  useEffect(() => {
   if(contract) getCampaign()
  },[address ,contract ])


  return (
    <DisplayCampagins
    title='All Campaigns'
    isLoading={isLoading}
    campaign={campaign}
    />

  )
}

export default Home