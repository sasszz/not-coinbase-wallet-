
const address = "0xA5c19B7ACb92e8b932289a671ed256bF22e57bec"

const getBalanceURL = `https://api.etherscan.io/api?module=account&action=balance&address=${address}&tag=latest&apikey=BVTZPZGUU2V3SYIF1A82PRF5MPPDWSYKGK`

console.log(getBalanceURL)

const getTransactionsURL = `https://api.etherscan.io/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&sort=asc&apikey=BVTZPZGUU2V3SYIF1A82PRF5MPPDWSYKGK`

// gives an array called result

console.log(getTransactionsURL)

export default getTransactionsURL