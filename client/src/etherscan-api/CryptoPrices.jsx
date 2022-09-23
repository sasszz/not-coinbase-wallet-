import React, { useEffect, useState } from 'react'

const CryptoPrices = () => {
    const CoinMarketCap = require('coinmarketcap-api')
    const apiKey = '02b371a5-1263-4792-8f0c-c61fee8ac1f0'
    const client = new CoinMarketCap(apiKey)
    const [ethPrices, setEthPrices] = useState([])
    
    useEffect (() => {
        const getData = async () => {
            try {
                client.getQuotes({ id: '1027' })
                    .then(info => {
                        setEthPrices(info.data['1027'].quote)
                    })
                    .catch(console.error);
            } catch (error) {
                console.log(error);
            }
        }
        getData();
    }, []);

    return (
        <div>{ethPrices}</div>
    )
}

export default CryptoPrices