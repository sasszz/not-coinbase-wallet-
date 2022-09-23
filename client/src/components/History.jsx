import { useEffect, useState } from 'react';
import { ethers } from "ethers"
import { Link } from 'react-router-dom';
import Balance from './Balance';
import anime from 'animejs';
import BackArrow from '../assets/back-arrow.png'
import DownArrow from '../assets/down-arrow.png'
import UpArrow from '../assets/up-arrow.png'



const History = () => {
    const addressPre = "0xA5c19B7ACb92e8b932289a671ed256bF22e57bec"
    const address = addressPre.toLowerCase()
    const getTransactionsURL = `https://api.etherscan.io/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&sort=asc&apikey=BVTZPZGUU2V3SYIF1A82PRF5MPPDWSYKGK`
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        const getData = async () => {
            animation()
            const url = getTransactionsURL
            try {
                const resp = await fetch(url);
                const data = await resp.json();
                setTransactions(data.result);
            } catch (err) {
                console.error(err);
            }
        }

        getData();
    }, []);

    const animation = () => {
        anime({
            targets: ".load",
            opacity: {
                delay: 400,
                value: [0, 1]
            },
            translateY: {
                value: [10, 0]
            },
            easing: 'cubicBezier(.5, .05, .1, .3)',
            duration: 1000

        })
    }

    const animateButton = (el) => {
        anime({
            targets: el,
            scale: 1.2,
            duration: 800,
            elasticity: 400
        });
    }

    const animateButtonLeave = (el) => {
        anime({
            targets: el,
            scale: 1,
            duration: 600,
            elasticity: 300
        });
    }

    return (
        <div>
            <div className="row">
                <div className="col-1">
                    <Link className="link" to={'/home'}>
                        <button className="numpad back" onMouseEnter={() => animateButton(".back", 1.2)} onMouseLeave={() => animateButtonLeave(".back", 1.2)}><img className="icon2" src={BackArrow} alt="Back Arrow" /></button>
                    </Link>
                </div>
                <div className="col d-flex justify-content-center">
                    <h6>History</h6>
                </div>
                <div className="col-1">
                </div>
            </div>
            <div className="load">
                <div className="mt-4">
                    <h5 className="gray text-center">Your balance</h5>
                    <Balance />
                </div>
                <hr className="mt-3" />
                    {transactions &&
                        transactions.sort((a, b) => b.timeStamp - a.timeStamp).map((transaction, idx) => {
                            return <div key={idx} className="row d-flex justify-content-center align-items-center mt-4">
                                <div className="col-2">
                                    <div className="circle d-flex justify-content-center align-items-center">
                                        <img className="icon2" src={(transaction.from === address) ? UpArrow : DownArrow} alt="Icon" />
                                    </div>
                                </div>
                                <div className="col" >
                                    <div className="row">
                                        <p className="m-0" >{Math.round(ethers.utils.formatEther(transaction.value) * 1000000) / 1000000} ETH</p>
                                    </div>
                                    <div className="row">
                                        <p className="m-0 gray">
                                            {(transaction.from === address) ? "Send " : "Receive "}
                                            - {new Date(transaction.timeStamp * 1000).toLocaleString()}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        })}
                        </div>
            </div>
    )
}


export default History