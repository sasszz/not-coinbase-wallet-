const CoinMarketCap = require('coinmarketcap-api')

const apiKey = '02b371a5-1263-4792-8f0c-c61fee8ac1f0'
const client = new CoinMarketCap(apiKey)

let price = {}

client.getQuotes({ id: '1027' })
    .then(info => {
        // Print out the info
        // console.log(info);
        // Print out the quote object
        price = (info.data['1027'].quote);
        // console.log(price)
        return price
    })
    .catch(console.error);

console.log(price)

// ETH id = 1027

