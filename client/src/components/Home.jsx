import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import anime from 'animejs';
import Logout from '../assets/logout2.png'
import DownArrow from '../assets/down-arrow.png'
import UpArrow from '../assets/up-arrow.png'
import EthIcon from '../assets/Ethereum-ETH-icon.png'

const Home = () => {
    const ethers = require('ethers');  
    const INFURA_ID = "adf6643bca5440f0883330e066d2e79c"
    const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${INFURA_ID}`)
    const address = "0xA5c19B7ACb92e8b932289a671ed256bF22e57bec"
    const addressFront = address.slice(0,4)
    const addressBack = address.slice(39, 42)
    const addressShort = addressFront + "..." + addressBack
    
    const [balance, setBalance] = useState(null);
    const dollarBalance = Math.round((balance*1360.78)*100)/100

    useEffect(() => {
        animation()
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

    const animation = () => {
        anime({
            targets: ".load",
            opacity: {
                delay: 500,
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
            <div className="load">
                <div className="row mt-5">
                    <h6>{addressShort}</h6>
                    <h1>${dollarBalance}</h1>
                </div>
                <div>
                    <div className="row w-75 mt-5">
                        <div className="col d-flex justify-content-center">
                            <div onMouseEnter={()=>animateButton(".send")} onMouseLeave={()=>animateButtonLeave(".send")} className="send circle d-flex justify-content-center align-items-center">
                                <Link to={'/send'}><img className="icon2" src={UpArrow} alt="Send" /></Link>
                            </div>
                        </div>
                        <div className="col d-flex justify-content-center">
                            <div onMouseEnter={()=>animateButton(".receive")} onMouseLeave={()=>animateButtonLeave(".receive")} className="receive circle d-flex justify-content-center align-items-center">
                                <Link to={'/receive'}><img className="icon2" src={DownArrow} alt="Receive" /></Link>
                            </div>
                        </div>
                        <div className="col d-flex justify-content-center">
                            <div onMouseEnter={()=>animateButton(".history")} onMouseLeave={()=>animateButtonLeave(".history")} className="history circle d-flex justify-content-center">
                                <Link to={"/history"} className="link"><p className="link">...</p></Link>
                            </div>
                        </div>
                        <div className="col d-flex justify-content-center">
                            <div onMouseEnter={()=>animateButton(".logsout")} onMouseLeave={()=>animateButtonLeave(".logsout")} className="logsout circle d-flex justify-content-center">
                                <Link to={"/logout"} className="link"><img className="icon4" src={Logout} alt="Logout" /></Link>
                            </div>
                        </div>
                    </div>
                    <div className="row w-75 mt-1">
                        <div className="col d-flex justify-content-center">
                            <p>Send</p>
                        </div>
                        <div className="col d-flex justify-content-center">
                            <p>Receive</p>
                        </div>
                        <div className="col d-flex justify-content-center">
                            <p>History</p>
                        </div>
                        <div className="col d-flex justify-content-center">
                            <p>Logout</p>
                        </div>
                    </div>
                <hr />
                </div>
                <div className="row d-flex justify-content-center align-items-center mt-4">
                    <div className="col-2 d-flex align-items-center">
                        <img className="icon" src={EthIcon} alt="ETH" />
                    </div>
                    <div className="col">
                        <div className="row">
                            <p className="m-0">ETHEREUM</p>
                        </div>
                        <div className="row">
                            <p className="m-0 gray">Your balance</p>
                        </div>
                    </div>
                    <div className="col d-flex flex-column">
                        <div className="row align-self-end">
                            <h5 className="m-0 align-self-end">${dollarBalance}</h5>
                        </div>
                        <div className="row align-self-end">
                            <p className="gray m-0">{balance} ETH</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    export default Home