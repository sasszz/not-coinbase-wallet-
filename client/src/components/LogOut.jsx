import { useEffect } from 'react'
import { Link } from 'react-router-dom';
import anime from 'animejs';
import BackArrow from '../assets/back-arrow.png'

const LogOut = () => {
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

    const animateButton = () => {
        anime({
            targets: ".animate",
            scale: 1.1,
            duration: 800,
            elasticity: 400
        });
    }

    const animateButtonLeave = () => {
        anime({
            targets: ".animate",
            scale: 1,
            duration: 600,
            elasticity: 300
        });
    }

    return (
        <div className="load">
            <div className="col-1">
                <Link className="link" to={'/home'}>
                    <button className="numpad animate" onMouseEnter={()=>animateButton()} onMouseLeave={()=>animateButtonLeave()}><img className="icon2" src={BackArrow} alt="Back Arrow" /></button>
                </Link>
            </div>
            <div className="mt-5">
                <h2>Are you sure?</h2>
            </div>
            <div className="mt-4">
                <p className="gray w-75"> After you sign out, you’ll need to enter your 12 word recovery phrase if you want to use your wallet again. </p>
                <p className="gray w-75">You can also sign out and create a new wallet or import an existing wallet.</p>
                <p className="w-75">Do NOT sign out if you don't know your recovery phrase.</p>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center mt-5">
                <Link to={'/'} className="row logout-link d-flex justify-content-center align-items-center w-75">
                    <button onMouseEnter={()=>animateButton()} onMouseLeave={()=>animateButtonLeave()} className="animate logout p-3">
                        Sign Out
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default LogOut