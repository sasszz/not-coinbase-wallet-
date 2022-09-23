import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { restoreWallet, walletAddress } from '../wallet/02_restoreWallet'
import axios from 'axios';
import anime from 'animejs';
import BackArrow from '../assets/back-arrow.png'


const CreatePassword = () => {
    const [secret, setSecret] = useState("");
    const navigate = useNavigate();
    const [incorrectSecret, setIncorrectSecret] = useState(null);
    const [errors, setErrors] = useState([]);
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [address, setAddress] = useState("");


    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/users/register', {
            secret,
            password,
            confirmPassword,
            address
        })
            .then(() => {
                navigate('/home');
            })
            .catch((err) => {
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            })
    }

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
            <div className="col-1">
                    <Link className="link" to={'/'}>
                        <button className="numpad back" onMouseEnter={() => animateButton(".back", 1.2)} onMouseLeave={() => animateButtonLeave(".back", 1.2)}><img className="icon2" src={BackArrow} alt="Back Arrow" /></button>
                    </Link>
                </div>
            <form onSubmit={onSubmitHandler}>
                <input type="hidden" name="secret" 
                    value={secret}
                />
                <input type="hidden" name="address" 
                    value={address}
                />
                <div className="mt-5">
                    <h2>Create password</h2>
                    <p className="w-75 subtext">Set a password to unlock your wallet each time you use your computer. It can't be used to recover your wallet.</p>
                </div>
                <div>
                    <label className="form-label" htmlFor="password">Password</label>
                    <input
                        className="form-control"
                        type="password"
                        name="password"
                        id="password"
                        value={password}
                        onChange={(e) => { setPassword(e.target.value) }}
                    />
                    <label className="form-label mt-3" htmlFor="confirm_password">Confirm Password</label>
                    <input
                        className="form-control"
                        type="password"
                        name="confirm_password"
                        id="confirm_password"
                        value={confirmPassword}
                        onChange={(e) => { setConfirmPassword(e.target.value) }}
                    />
                    <input type="hidden" name="address" 
                        value={address}
                    />
                </div>
                <div className="d-flex flex-column justify-content-center align-items-center mt-3">
                    <button 
                        onMouseEnter={() => animateButton(".continue", 1.1)} onMouseLeave={() => animateButtonLeave(".continue", 1.1)} type="submit"
                        className={(password === "") ? "opacity continue p-3 w-75 mt-3" : (confirmPassword === "") ? "opacity continue p-3 w-75 mt-3" : "continue p-3 w-75 mt-3"}
                        disabled={(password === "") ? true : (confirmPassword === "") ? true : false}
                    >
                        Submit
                    </button>
                </div>
            </form>
            {incorrectSecret &&
                    <p className="text-center mt-3">{incorrectSecret}</p>
            }
            {errors &&
                errors.map((error, idx) => {
                    return <p className="text-center mt-3" key={idx}>{error}</p>;
                })}
        </div>
    )
}

export default CreatePassword

