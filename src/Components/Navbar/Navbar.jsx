import React, { useEffect, useState } from 'react';
import "./Navbar.css";
import logo from "../../Images/navlogo2.png"
import Swal from 'sweetalert2';
import { AiOutlineMenu } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';


export default function Navbar() {

  const [inout , setInout] = useState();
  const [MoviePath, setMoviePath] = useState("/");
  const [inoutDirection , setDirection] = useState("/login");
  const [displayvalue , setDisplayValue] = useState(false);
  
  
  useEffect(()=>
  {
   
    if(localStorage.getItem("token"))
    {
      setInout("Logout");
      setMoviePath("/Movies")
      setDirection("/");
    }
    else
    {
      setInout("Login");
      setMoviePath('/')
      setDirection("/login");    
    }

  },[])

  function handleChange()
  {
    if(localStorage.getItem("token"))
    {
      localStorage.removeItem("token");
    }
  }

  const checkMoviePath = () =>
  {
      if(!localStorage.getItem("token"))
      {
        Swal.fire({
          icon: 'warning',
          text: 'Kindly Pleace Login Your Account',
          footer: '<a href="/Signup">Create Your Account</a>',
          // 'warning',
        })
      }
  }

  // function menuButton(){
  //   if(displayvalue)
  //   {
  //     setDisplayValue(false)
  //   }
  //   else
  //   {
  //     setDisplayValue(true)
  //   }
  // }

  return (
    <>
        <div className="navbarcontainer">
          <div className='navbarlogo'><img className="logo" src={logo} alt="" /></div>
          <div className="navbarNavLinks" >
            <ul className={displayvalue ? "shownavbar" : "navbarNavLinks_ul"}>
            <li><NavLink className="navbranchoretag" to="/">Home</NavLink></li>
            <li><NavLink className="navbranchoretag" to={MoviePath} onClick={()=>{
              checkMoviePath();
            }}>Movies</NavLink></li>
            <li><NavLink className="navbranchoretag" to="/Contact">Contact us</NavLink></li>
            <li><NavLink className="navbranchoretag" to="/About">About</NavLink></li>
            <li><NavLink className="navbranchoretag" to={inoutDirection}><button className='navLoginButton' onClick={()=>{
              handleChange();
            }}>{inout}</button></NavLink></li>
            </ul>
          </div>        
            <div className="menubutton"><button onClick={()=> setDisplayValue(!displayvalue)}><AiOutlineMenu/></button></div>
        </div>
    </>
  )
}

// style={{display : displayvalue ? 'block' : 'none'}}