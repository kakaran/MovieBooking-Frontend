import React, { useEffect, useState } from 'react';
import "./Navbar.css";
import logo from "../../Images/navlogo2.png"
import Swal from 'sweetalert2';
import { AiOutlineMenu } from 'react-icons/ai';


export default function Navbar() {

  const [inout , setInout] = useState();
  const [MoviePath, setMoviePath] = useState();
  const [inoutDirection , setDirection] = useState("/login");
  const [displayvalue , setDisplayValue] = useState(true);
  
  
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
      setMoviePath()
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

  function menuButton(){
    if(displayvalue)
    {
      setDisplayValue(false)
    }
    else
    {
      setDisplayValue(true)
    }
  }

  return (
    <>
        <div className="navbarcontainer">
          <div className='navbarlogo'><img className="logo" src={logo} alt="" /></div>
          <div className="navbarlinks" style={{display : displayvalue ? 'block' : 'none'}}>
            <ul>
            <li><a href="/">Home</a></li>
            <li><a href={MoviePath} onClick={()=>{
              checkMoviePath();
            }}>Movies</a></li>
            <li><a href="/Contact">Contact us</a></li>
            <li><a href="/About">About</a></li>
            <li><a href={inoutDirection}><button className='navLoginButton' onClick={()=>{
              handleChange();
            }}>{inout}</button></a></li>
            </ul>
          </div>        
            <div className="menubutton"><button onClick={()=>
            {
              menuButton();
            }}><AiOutlineMenu/></button></div>
        </div>
    </>
  )
}

