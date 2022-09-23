var ethers = require('ethers');  

const INFURA_ID = "adf6643bca5440f0883330e066d2e79c"
const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${INFURA_ID}`)
const address = "0xA5c19B7ACb92e8b932289a671ed256bF22e57bec"

const main = async () => {
    const balance = await provider.getBalance(address)
    console.log(ethers.utils.formatEther(balance))
}

main()