import React from 'react'
import { Routes, Route } from "react-router-dom";

import Home from './components/Home'
import Receive from './components/Receive'
import Send from './components/Send'
import History from './components/History'
import LandingPage from './components/LandingPage';
import NewWallet from './components/NewWallet';
import ExistingWallet from './components/ExistingWallet';
import LogOut from './components/LogOut';
import anime from 'animejs';
import ConfirmSend from './components/ConfirmSend'
import CreatePassword from './components/CreatePassword'



import './style.css'

const App = () => {
  const animation = () => {
    anime({
        targets: ".load",
        opacity: {
            delay: 500,
            value: [0, 1]
        },
        duration: 1500
    })
}

  return (
    <div className="body">
      <div className="contain p-5 my-5">
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/existing/wallet" element={<ExistingWallet />}/>
            <Route path="/new/wallet" element={<NewWallet />}/>
            <Route path="/create/password" element={<CreatePassword />}/>
            <Route path="/home" element={<Home />} />
            <Route path="/receive" element={<Receive />} />
            <Route path="/send" element={<Send />} />
            <Route path="/confirm/send" element={<ConfirmSend />} />
            <Route path="/history" element={<History />} />
            <Route path="/logout" element={<LogOut />}/>
        </Routes>
      </div>
    </div>
  )
}

export default App