import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Qr from "../qr-code/Qr/Index";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import anime from 'animejs';
import BackArrow from '../assets/back-arrow.png'
import Copy from '../assets/copy-icon.png'


const Receive = () => {
    const address = "0xA5c19B7ACb92e8b932289a671ed256bF22e57bec"
    const addressFront = address.slice(0, 4)
    const addressBack = address.slice(39, 42)
    const addressShort = addressFront + "..." + addressBack
    const [isCopied, setIsCopied] = useState(false)

    useEffect(() => {
        animation()
    }, []);

    const animation = () => {
        anime({
            targets: ".load",
            opacity: {
                delay: 200,
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
        <div >
            <div className="row">
                <div className="col-1">
                    <Link className="link" to={'/home'}>
                        <button className="numpad back" onMouseEnter={()=>animateButton(".back", 1.2)} onMouseLeave={()=>animateButtonLeave(".back", 1.2)}><img className="icon2" src={BackArrow} alt="Back Arrow" /></button>
                    </Link>
                </div>
                <div className="col d-flex justify-content-center">
                    <h6>Receive ETHEREUM</h6>
                </div>
                <div className="col-1">
                </div>
            </div>
            <div className="load col d-flex justify-content-center mt-5">
                <Qr value={address} />
            </div>
            <div className="load">
                <div className="row mt-1">
                    <div className="col d-flex justify-content-center">
                        <h6 className="gray mt-5">Your Ethereum address</h6>
                    </div>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="col-3 mt-1">
                        <h6 className="mx-3">{addressShort}</h6>
                    </div>
                    <div className="col-1">
                        <CopyToClipboard text={address}
                        onCopy={() => setIsCopied({copied: true})}>
                            <button className="copy">
                                <img className="icon2" src={Copy} alt="Copy" />
                            </button>
                        </CopyToClipboard>
                    </div>
                </div>
                <hr className="mt-3" />
                <div className="row d-flex justify-content-center">
                    {isCopied ? <span className="text-center" style={{color: '#1652f0'}}>Copied</span> : null}
                </div>
            </div>
        </div>
    )
}

export default Receive