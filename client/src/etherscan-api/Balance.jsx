import { useEffect, useState } from 'react';
import { ethers } from "ethers"
import { provider } from "./connection"

const Apimap = () => {
    const address = "0xA5c19B7ACb92e8b932289a671ed256bF22e57bec"
    const [balance, setBalance] = useState(null);

    useEffect(() => {
        const getBalance = async () => {
            try {
                const balance = await provider.getBalance(address)
                setBalance(ethers.utils.formatEther(balance))
            } catch (err) {
                console.error(err);
            }
        }

        getBalance();
    }, []);

    return (
        <div>
        {transactions &&
            transactions.map((transaction, idx) => {
            return <div key={idx} class="row d-flex justify-content-center align-items-center mt-4">
                <div className="col-1">
                    <div class="circle d-flex justify-content-center align-items-center">
                        <img class="icon2" src="./assets/down-arrow.png" alt="Receive" />
                    </div>
                </div>
                <div class="col">
                    <div class="row">
                        <p class="m-0">SHIBA INU</p>
                    </div>
                    <div class="row">
                        <p class="m-0">Receive - {transaction.timeStamp}</p>
                    </div>
                </div>
                <div class="col d-flex flex-column">
                    <div class="row align-self-end">
                        <p class="m-0"></p>
                    </div>
                    <div class="row align-self-end">
                        <p class="gray m-0">{transaction.value} GWEI</p>
                    </div>
                </div>
            </div>
            })}
        </div>
    )
}


export default Apimap