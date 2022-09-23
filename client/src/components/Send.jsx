import React, { useEffect, useState } from 'react'
import anime from 'animejs';
import { Link } from 'react-router-dom';
import BackArrow from '../assets/back-arrow.png'
import Swap from '../assets/swap-arrows.png'
import EthIcon from '../assets/Ethereum-ETH-icon.png'

const Send = () => {
    const [num, setNum] = useState('0')
    const ethers = require('ethers');
    const INFURA_ID = "adf6643bca5440f0883330e066d2e79c"
    const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${INFURA_ID}`)
    const address = "0xA5c19B7ACb92e8b932289a671ed256bF22e57bec"
    const addressFront = address.slice(0, 4)
    const addressBack = address.slice(39, 42)

    const [ethBalance, setEthBalance] = useState(null);
    const [convertedBalance, setConvertedBalance] = useState(null);
    const [usd, setUsd] = useState(true);


    useEffect(() => {
        animation()
        const getBalance = async () => {
            try {
                const balance = await provider.getBalance(address);
                console.log(balance)
                setEthBalance(Math.round(ethers.utils.formatEther(balance) * 1000000) / 1000000);
                // setConvertedBalance(Math.round((ethBalance*1360.78)*100)/100);
                setConvertedBalance(12.47)
                console.log(ethBalance)
            } catch (err) {
                console.error(err);
            }
        }

        getBalance();
        setConvertedBalance(Math.round((ethBalance * 1360.78) * 100) / 100)
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

    const animateButton = (el, scale) => {
        anime({
            targets: el,
            scale: scale,
            duration: 800,
            elasticity: 400
        });
    }

    const animateButtonLeave = (el, scale) => {
        anime({
            targets: el,
            scale: 1,
            duration: 600,
            elasticity: 300
        });
    }

    // const animateClick = (el) => {
    //     anime({
    //         targets: el,
    //         translateY: {
    //             value: [0, 10]
    //         },
    //         translateX: {
    //             value: [0, 10]
    //         },
    //         duration: 600,
    //         elasticity: 300
    //     });
    // }

    const dollar = num => {
        if (num.length > 1) {
            if (num.includes(".")) {
                let shifty = num.slice(1)
                let period = shifty.indexOf('.')
                let end = period + 3
                let trunc = shifty.slice(0, end)
                document.getElementById('period').disabled = true;
                return trunc;
            }
            else {
                document.getElementById('period').disabled = false;
                let shifty = num.slice(1)
                return shifty;
            }
        }
        else {
            return num;
        }
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
                    <h6>Send ETHEREUM</h6>
                </div>
                <div className="col-1">
                </div>
            </div>
            <div className="load">
                {usd &&
                    <div>
                        <div className="row mt-5">
                            <div className="col d-flex justify-content-center align-items-center">
                                <button className="smNumpad max" onMouseEnter={() => animateButton(".max", 1.2)} onMouseLeave={() => animateButtonLeave(".max", 1.2)} onClick={() => setNum((Math.round((ethBalance * 1360.78) * 100) / 100))}>Max</button>
                            </div>
                            <div className="col-8 d-flex justify-content-center">
                                <h1
                                    className={(Number(num) > convertedBalance) ? "gray main mt-2" : "blue main mt-2"}
                                    id="input"
                                >
                                    ${dollar(num)}
                                </h1>
                            </div>
                            <div className="col d-flex justify-content-center align-items-center">
                                <button className="numpad swap" onMouseEnter={() => animateButton(".swap", 1.2)} onMouseLeave={() => animateButtonLeave(".swap", 1.2)} onClick={() => (usd) ? setUsd(false) : setUsd(true)}><img className="icon2" src={Swap} alt="Swap" /></button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col d-flex justify-content-center">
                                <p className="mx-3" > {Math.round((dollar(num) * 0.00075338) * 1000000) / 1000000} ETH</p>
                            </div>
                        </div>
                    </div>
                }
                {!usd &&
                    <div>
                        <div className="row mt-5">
                            <div className="col d-flex justify-content-center align-items-center">
                                <button className="animate smNumpad" onMouseEnter={() => animateButton()} onMouseLeave={() => animateButtonLeave()} onClick={() => setNum((Math.round((ethBalance * 1360.78) * 100) / 100) - 1)}>Max</button>
                            </div>
                            <div className="col-8 d-flex justify-content-center">
                                <h1
                                    className={(Number(num) > convertedBalance) ? "gray main2 mt-2" : "blue main2 mt-2"}
                                    id="input"
                                >
                                    {Math.round((dollar(num) * 0.00075338) * 1000000) / 1000000} ETH

                                </h1>
                            </div>
                            <div className="col d-flex justify-content-center align-items-center">
                                <button className="numpad swap" onMouseEnter={() => animateButton(".swap", 1.2)} onMouseLeave={() => animateButtonLeave(".swap", 1.2)} onClick={() => (usd) ? setUsd(false) : setUsd(true)}><img className="icon2" src={Swap} alt="Swap" /></button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col d-flex justify-content-center">
                                <p className="mx-3" >${dollar(num)}</p>
                            </div>
                        </div>
                    </div>
                }
                <hr className="mt-5" />
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
                            <h5 className="m-0 align-self-end">${convertedBalance}</h5>
                        </div>
                        <div className="row align-self-end">
                            <p className="gray m-0">{ethBalance} ETH</p>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="row mt-3"></div>
                <div className="row my-3">
                    <div className="col d-flex justify-content-center align-items-center">
                        <button
                            className="numpad numpad1"
                            onClick={() => setNum(num + 1)}
                            onMouseEnter={() => animateButton(".numpad1", 1.2)} onMouseLeave={() => animateButtonLeave(".numpad1", 1.2)}
                        >
                            1
                        </button>
                    </div>
                    <div className="col d-flex justify-content-center align-items-center">
                        <button onMouseEnter={() => animateButton(".numpad2", 1.2)} onMouseLeave={() => animateButtonLeave(".numpad2", 1.2)} className="numpad2 numpad" onClick={() => setNum(num + 2)}>2</button>
                    </div>
                    <div className="col d-flex justify-content-center align-items-center">
                        <button onMouseEnter={() => animateButton(".numpad3", 1.2)} onMouseLeave={() => animateButtonLeave(".numpad3", 1.2)} className="numpad3 numpad" onClick={() => setNum(num + 3)}>3</button>
                    </div>
                </div>
                <div className="row my-4">
                    <div className="col d-flex justify-content-center align-items-center">
                        <button onMouseEnter={() => animateButton(".numpad4", 1.2)} onMouseLeave={() => animateButtonLeave(".numpad4", 1.2)} className="numpad4 numpad" onClick={() => setNum(num + 4)}>4</button>
                    </div>
                    <div className="col d-flex justify-content-center align-items-center">
                        <button onMouseEnter={() => animateButton(".numpad5", 1.2)} onMouseLeave={() => animateButtonLeave(".numpad5", 1.2)} className="numpad5 numpad" onClick={() => setNum(num + 5)}>5</button>
                    </div>
                    <div className="col d-flex justify-content-center align-items-center">
                        <button onMouseEnter={() => animateButton(".numpad6", 1.2)} onMouseLeave={() => animateButtonLeave(".numpad6", 1.2)} className="numpad6 numpad" onClick={() => setNum(num + 6)}>6</button>
                    </div>
                </div>
                <div className="row my-4">
                    <div className="col d-flex justify-content-center align-items-center">
                        <button onMouseEnter={() => animateButton(".numpad7", 1.2)} onMouseLeave={() => animateButtonLeave(".numpad7", 1.2)} className="numpad7 numpad" onClick={() => setNum(num + 7)}>7</button>
                    </div>
                    <div className="col d-flex justify-content-center align-items-center">
                        <button onMouseEnter={() => animateButton(".numpad8", 1.2)} onMouseLeave={() => animateButtonLeave(".numpad8", 1.2)} className="numpad8 numpad" onClick={() => setNum(num + 8)}>8</button>
                    </div>
                    <div className="col d-flex justify-content-center align-items-center">
                        <button onMouseEnter={() => animateButton(".numpad9", 1.2)} onMouseLeave={() => animateButtonLeave(".numpad9", 1.2)} className="numpad9 numpad" onClick={() => setNum(num + 9)}>9</button>
                    </div>
                </div>
                <div className="row my-4">
                    <div className="col d-flex justify-content-center align-items-center">
                        <button onMouseEnter={() => animateButton(".period", 1.2)} onMouseLeave={() => animateButtonLeave(".period", 1.2)} className="period numpad" id="period" onClick={() => setNum(num + '.')}>.</button>
                    </div>
                    <div className="col d-flex justify-content-center align-items-center">
                        <button onMouseEnter={() => animateButton(".numpad0", 1.2)} onMouseLeave={() => animateButtonLeave(".numpad0", 1.2)} className="numpad0 numpad" onClick={() => setNum(num + 0)}>0</button>
                    </div>
                    <div className="col d-flex justify-content-center align-items-center">
                        <button className="numpad"><img
                            onClick={() => setNum("0")}
                            onMouseEnter={() => animateButton(".delete", 1.2)} onMouseLeave={() => animateButtonLeave(".delete", 1.2)}
                            className="delete icon2" src={BackArrow} alt="Back Arrow" />
                        </button>
                    </div>
                </div>
                <div className="row d-flex justify-content-center align-items-center mt-5">
                    <Link to={'/confirm/send'} className="link2 row d-flex justify-content-center align-items-center w-75">
                        <button
                            // id="continue"
                            // onClick={()=>animateClick("#continue")}
                            onMouseEnter={() => animateButton(".continue", 1.1)} onMouseLeave={() => animateButtonLeave(".continue", 1.1)}
                            className={(Number(num) === 0) ? "opacity continue p-3" : (Number(num) > convertedBalance) ? "opacity continue p-3" : "continue p-3"}
                            disabled={(Number(num) === 0) ? true : (Number(num) > convertedBalance) ? true : false}
                        >
                            Continue
                        </button>
                    </Link>
                </div>
                <div className="row d-flex justify-content-center mt-3">
                    {(Number(num) > convertedBalance) ? <span className="text-center gray">Not enough Ethereum</span> : <span></span>}
                </div>
            </div>
        </div>
    )
}

export default Send
