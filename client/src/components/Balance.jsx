import { useEffect, useState } from 'react'

const Balance = () => {
    const ethers = require('ethers');  
    const INFURA_ID = "adf6643bca5440f0883330e066d2e79c"
    const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${INFURA_ID}`)
    const address = "0xA5c19B7ACb92e8b932289a671ed256bF22e57bec"
    
    const [balance, setBalance] = useState(null);

    useEffect(() => {
        const getBalance = async () => {
            try {
                const balance = await provider.getBalance(address);
                setBalance(Math.round(ethers.utils.formatEther(balance)*1000000)/1000000);
            } catch (err) {
                console.error(err);
            }
        }
        
        getBalance();
    }, []);

    return (
            <div className="col d-flex flex-column justify-content-center">
                <h4 className="text-center">${Math.round((balance*1360.78)*100)/100}</h4>
                <p className="gray text-center">{balance} ETH</p>
            </div>
    )
}

export default Balance