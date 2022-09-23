import { Link } from 'react-router-dom';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import anime from 'animejs';
import { useEffect, useState } from 'react'
import BackArrow from '../assets/back-arrow.png'
import Copy from '../assets/copy-icon.png'
import Eye from '../assets/eye.png'
import NoEye from '../assets/no-eye.png'


const NewWallet = () => {
    const [isCopied, setIsCopied] = useState(false)
    const [wallet, setWallet] = useState({})
    const [showSecret, setShowSecret] = useState(false)
    const [check, setCheck] = useState(false)
    let secret = "beef hat coffee divorce social neither chat anger robot slush photo harbor"

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

    const animateButton = (el, scale) => {
        anime({
            targets: el,
            scale: scale,
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
            <div className="col-1">
                    <Link className="link" to={'/'}>
                        <button className="numpad back" onMouseEnter={() => animateButton(".back", 1.2)} onMouseLeave={() => animateButtonLeave(".back", 1.2)}><img className="icon2" src={BackArrow} alt="Back Arrow" /></button>
                    </Link>
                </div>
            <div className="load">
                <div className="mt-5">
                    <h2>Backup your wallet</h2>
                    <p className="gray w-75"> Save these 12 words to a password manager, or write down and store in a secure place.</p>
                    <p> Do not share with anyone.</p>
                </div>
                <div className="white p-3">
                    <div className="row d-flex flex-row justify-content-center align-items-center">
                        <div className="col d-flex flex-column justify-content-center align-items-center">
                            <p id="secret-phrase"
                                className={showSecret ? "text-align-center black" : "blurry-text text-shadow" }>
                                    beef hat coffee divorce social neither chat anger robot slush photo harbor
                            </p>
                        </div>
                        {showSecret &&
                        <div className="row">
                            <div className="col d-flex flex-column justify-content-center align-items-end">
                                <button className="show-button" onClick={() => (showSecret) ? setShowSecret(false) : setShowSecret(true)}
                                    onMouseEnter={() => animateButton(".show-button", 1.2)} onMouseLeave={() => animateButtonLeave(".show-button", 1.2)} >
                                    <img className="icon3 opacity" src={Eye} alt="Show" />
                                </button>
                            </div>
                        </div>
                        }
                        {!showSecret &&
                        <div className="row">
                            <div className="col d-flex flex-column justify-content-center align-items-end">
                                <button className="show-button hide" onClick={() => (showSecret) ? setShowSecret(false) : setShowSecret(true)}
                                    onMouseEnter={() => animateButton(".hide", 1.2)} onMouseLeave={() => animateButtonLeave(".hide", 1.2)} >
                                    <img className="icon3 opacity" src={NoEye} alt="Show" />
                                </button>
                            </div>
                        </div>
                        }
                    </div>
                </div>
                <div className="row d-flex justify-content-start align-items-center mt-3">
                    <div className="col-1">
                        <CopyToClipboard text={secret}
                        onCopy={() => setIsCopied({copied: true})}>
                            <button className="copy" onMouseEnter={() => animateButton(".copy", 1.2)} onMouseLeave={() => animateButtonLeave(".copy", 1.2)}>
                                <img className="icon2" src={Copy} alt="Copy" />
                            </button>
                        </CopyToClipboard>
                    </div>
                    <div className="col">
                        {isCopied ? <span className="text-center" style={{color: '#1652f0'}}>Copied</span> : null}
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-1">
                        <input type="checkbox" name="confirmation" id="confirmation" className="align-self-center"
                            onClick={()=>(check ? setCheck(false) : setCheck(true))}
                        />
                    </div>
                    <div className="col">
                        <p>I understand that if I lose my recovery phrase, I'll lose all of the crypto in my wallet.</p>
                    </div>
                </div>
                <div className="d-flex flex-column justify-content-center align-items-center mt-2">
                    <Link to={'/create/password'} className="row d-flex justify-content-center align-items-center w-75 link2">
                        <button
                            onMouseEnter={() => animateButton(".continue", 1.1)} onMouseLeave={() => animateButtonLeave(".continue", 1.1)}
                            className={check ? "continue p-3" : "opacity continue p-3"}
                            disabled={check ? false : true}
                            >
                            Continue
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default NewWallet