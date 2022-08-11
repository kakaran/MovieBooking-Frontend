import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { FiCheckSquare } from "react-icons/fi";
import { BsGraphUp } from "react-icons/bs";
import { AiTwotoneSetting } from "react-icons/ai";
import "./About.css";
import {Adetail} from "./Aboutdetail";

export default function About() {
  return (
    <>
      <div style={{ backgroundColor: "#201E1E" }}>
        <Navbar />
      </div>
      <div className="aboutMainContainer">
        <div className="aboutHeading">
          <h1>ABOUT US</h1>
        </div>
        <div className="textabout">
          <h1>A FEW WORDS ABOUT US</h1>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            architecto, ad quisquam deleniti provident nobis alias magnam
            dolorem debitis laboriosam eaque velit in excepturi quam deserunt
            dolorum consectetur recusandae optio.
          </p>
        </div>
        <div className="detailabout">
          <div className="chooseContainer">
            <div className="choose">
              <FiCheckSquare />
            </div>
            <h1>WHY CHOOSE US</h1>
            <p>
              Turpis egestas integer eget aliquet nibh praesent tristique magna
              sit. Scelerisque mauris
            </p>
          </div>
          <div className="chooseContainer">
            <div className="choose">
              <BsGraphUp />
            </div>
            <h1>OUR MISSION</h1>
            <p>
              Turpis cursus in hac habitasse platea dictumst quisque sagittis
              purus.
            </p>
          </div>
          <div className="chooseContainer">
            <div className="choose">
              <AiTwotoneSetting />
            </div>  
            <h1>WHAT WE DO</h1>
            <p>
              Nulla aliquet enim tortor at auctor urna nunc. Elementum sagittis
              vitae et leo duis.
            </p>
          </div>
        </div>
        <div className="movieabout">
          <h1>MOVIE GENRES</h1>
          <div className="holdingcontanier">
          {Adetail.map((val) =>{
            return(
              <div className="fantasy">
            <div className="fantasyimg">{val.icon}</div>
            <div className="fantasydetail">
              <h3>{val.title}</h3>
              <p>{val.description}</p>
            </div>
        </div>
            )
          })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
