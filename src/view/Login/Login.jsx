import React from 'react'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import Loginform from './LoginForm/Loginform'
import loginimg from "../../Images/login.jpg"
import "./login.css"

export default function login() {
  return (
    <>
        <div style = {{backgroundColor : "#201E1E"}}>
        <Navbar/>
        </div>
        <div className="Loginpage">
            <div className="loginimg">
            <img src={loginimg} alt="Login pageImage" />
            </div>
            <div className="loginformContainer">
                <Loginform/>
            </div>
        </div>
        <Footer />
    </>
  )
}
