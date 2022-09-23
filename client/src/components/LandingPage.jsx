import { useEffect } from 'react'
import { Link } from 'react-router-dom';
import anime from 'animejs';


const LandingPage = () => {
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

    const animateButtonLeave = (el, scale) => {
        anime({
            targets: el,
            scale: 1,
            duration: 600,
            elasticity: 300
        });
    }

    return (
        <div className="load">
            <div className="mt-5">
                <h2><span class="gray">Not</span> Coinbase Wallet</h2>
                <p className="w-75">To get started, create a new wallet or use one you already have.</p>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center mt-5">
                <button className="new p-3 w-75"
                    onMouseEnter={() => animateButton(".new", 1.1)} onMouseLeave={() => animateButtonLeave(".new")}
                >
                    <Link className="link" to={'/new/wallet'}>Create new wallet</Link>
                </button>
                <button className="already p-3 w-75 mt-3"
                    onMouseEnter={() => animateButton(".already", 1.1)} onMouseLeave={() => animateButtonLeave(".already")}
                >
                    <Link className="link2" to={'/existing/wallet'}>I already have a wallet</Link>
                </button>
            </div>
        </div>
    )
}

export default LandingPage