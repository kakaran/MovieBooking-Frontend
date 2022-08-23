import React, { useState } from "react";
import logo from "../../Images/navlogo2.png";
import "./Footer.css";
import { AiFillInstagram, AiOutlineTwitter,AiOutlineCopyright } from "react-icons/ai";
import { FaPinterestP, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function Footer() {

  const [requestemail, sendRequestEmail] =useState(" ");

  const sendRequest = () =>
  {
    if(requestemail === " ")
  {
    alert("Please enter the Email");
  }
  else{
    alert("Request Successfully send");
  }
  }
  return (
    <>
      <div className="footerLogobar">
        <div className="footerlogo">
          <img src={logo} alt="" />
        </div>
        <div className="socialmedia">
          <span>
            <AiFillInstagram />
          </span>
          <span>
            <FaLinkedinIn />
          </span>
          <span>
            <AiOutlineTwitter />
          </span>
          <span>
            <FaPinterestP />
          </span>
          <span>
            <FaFacebookF />
          </span>
        </div>
      </div>
      <div className="mainfootercontainer">
      <div className="footerConatainer">
        <div className="footerMenu">
          <h1>MENU</h1>
          <NavLink to ="/">Home</NavLink>
          <NavLink to ="/Contact">Contact</NavLink>
          <NavLink to ="/About">About</NavLink>
          <NavLink to ="/Login">Login</NavLink>
        </div>
        <div className="footerAboutUS">
          <h1 className="footerheading">ABOUT US</h1>
          <p className="footerdetail">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit quas
            corporis vitae obcaecati veniam optio, cupiditate, aperiam quidem
            quis temporibus eos earum ducimus. Praesentium ea temporibus minus
            quod! 
          </p>
        </div>
        <div className="footerRecent">
          <h1 className="footerheading">RECENT TWEETS</h1>
          <p className="footerdetail">
            <span style={{color : "tomato"}}>@bestwebsoft </span>Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Incidunt, id consequuntur autem odit et laborum?
          </p>
          <p className="footerdetail">
            <span style={{color : "tomato"}} >@bestwebsoft </span>Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Incidunt, id consequuntur autem odit et laborum?
          </p>
        </div>
        <div className="Newsletter">
          <h1 className="footerheading">NEWSLETTER</h1>
          <p className="footerdetail">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
            enim nostrum in temporibus, impedit facilis sequi blanditiis
            voluptate. 
          </p>
          <div className="email">
          <input type="email" name="" id=""  placeholder="Enter your email" onChange={(e) =>
          {
            sendRequestEmail(e);
          }}/>
          <button onClick={() => {
            sendRequest();
          }}>SEND</button>
          </div>
        </div>
      </div>
      <div className="copydescription">
          <p>Copyright <AiOutlineCopyright/> 2022 CINEMAOS TICKET All rights reserved</p>
        </div>
      </div>
    </>
  );
}
