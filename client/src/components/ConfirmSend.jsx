import BackArrow from '../assets/back-arrow.png'
import anime from 'animejs';
import { Link } from 'react-router-dom';
import React, { useEffect } from 'react'
import Construction from '../assets/construction.png'
import Construction2 from '../assets/construction2.png'
import Construction3 from '../assets/construction3.png'

const ConfirmSend = () => {
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
        <div>
            <div className="row">
                <div className="col-1">
                    <Link className="link" to={'/send'}>
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
                <div className="row mt-5">
                    <div className="col d-flex flex-column justify-content-center align-items-center">
                        <h3 className="gray">Oops!</h3>
                        <p>We're working on it</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col d-flex flex-column justify-content-center align-items-center">
                        <img className="opacity" src={Construction3} alt="Under Construction" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConfirmSend