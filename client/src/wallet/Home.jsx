import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
        return (
            <div>
                <div className="row mt-5">
                    <h6>0x...a540e22</h6>
                    <h1>$94.37</h1>
                </div>
                <div className="row w-75 mt-5">
                    <div className="col d-flex justify-content-center">
                        <div className="circle d-flex justify-content-center align-items-center">
                            <Link to={'/send'}><img className="icon2" src="./assets/up-arrow.png" alt="Send" /></Link>
                        </div>
                    </div>
                    <div className="col d-flex justify-content-center">
                        <div className="circle d-flex justify-content-center align-items-center">
                            <Link to={'/receive'}><img className="icon2" src="./assets/down-arrow.png" alt="Receive" /></Link>
                        </div>
                    </div>
                    <div className="col d-flex justify-content-center">
                        <div className="circle d-flex justify-content-center">
                            <Link to="/history" className="link"><p className="link">...</p></Link>
                        </div>
                    </div>
                    <div className="col d-flex justify-content-center">
                        <div className="circle d-flex justify-content-center">
                            <Link to="/logout" className="link"><p className="link">x</p></Link>
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
                <div className="row d-flex justify-content-center align-items-center mt-4">
                    <div className="col-2 d-flex align-items-center">
                        <img className="icon" src="./assets/shib-icon.PNG" alt="SHIBA INU" />
                    </div>
                    <div className="col">
                        <div className="row">
                            <p className="m-0">SHIBA INU</p>
                        </div>
                        <div className="row">
                            <p className="m-0 gray">Your balance</p>
                        </div>
                    </div>
                    <div className="col d-flex flex-column">
                        <div className="row align-self-end">
                            <h5 className="m-0 align-self-end">$94.37</h5>
                        </div>
                        <div className="row align-self-end">
                            <p className="gray m-0">7,700,361.729 SHIB</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    export default Home