import { createContext , useContext } from "react";
import { useAddress , useContract , useMetamask , useContractWrite } from '@thirdweb-dev/react';
import {ethers} from 'ethers';
import { id } from "ethers/lib/utils";



const StateContext = createContext();


export const StateContextProvider = ({children}) => {

    const { contract } = useContract('0xD33Ba07a3F919480263D69F7F1f087703eEb1366');

    const  {mutateAsync : createCampaign} = useContractWrite(contract , 'createCampaign')

    const address = useAddress();
    const connect = useMetamask();

    const publishCampaign = async (form) => {
        try {
            const data = await createCampaign([
                address,
                form.title,
                form.description,
                form.target,
                new Date(form.deadline).getTime(),
                form.image,
            ])
            console.log('contract call success', data)
        } catch (error) {
            console.log('contract call failure', error)
        };
    }

    const getCampaigns = async () => {
        const campaigns = await contract.call('getCampaigns');

        const parsedCampaings = campaigns.map((campaign,i) => ({
        owner:campaign.owner,
        title:campaign.title,
        description:campaign.description,
        target:ethers.utils.formatEther(campaign.target.toString()),
        deadline:campaign.deadline.toNumber(),
        amountCollected:ethers.utils.formatEther(campaign.amountCollected.toString()),
        image:campaign.image,
        pId: i
        }))

        return parsedCampaings
    }

    const getProfileCampagin = async (address) => {
        const campaigns = await getCampaigns()

        const filteredCampaigns = campaigns.filter((campaign) => (
         campaign.owner === address
     ))

        return filteredCampaigns
    }

    const getDonators = async (id) => {
        const donations = await contract.call('getDonators',id)
        const numberOfDonations = donations[0].length

        const parsedDonations = [];

        for(let i = 0; i < numberOfDonations ; i++){
            parsedDonations.push({
                donator: donations[0][i],
                donations:ethers.utils.formatEther(donations[1][i].toString())
            });
        }
        return parsedDonations
    }

    const donate = async(id,amount) => {
    const donate = await contract.call('donateToCampaign',id,{
        value:ethers.utils.parseEther(amount)
    });
    return donate
    }

    return (
        <StateContext.Provider
        value={{
            address,
            contract,
            connect,
            createCampaign:
            publishCampaign,
            getCampaigns,
            getProfileCampagin,
            getDonators,
            donate,
        }}
        >
      {children}
    </StateContext.Provider>
    ) 

}


export const useStateContext = () => useContext(StateContext)
