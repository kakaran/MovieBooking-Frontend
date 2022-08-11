import React from "react";
import Slider from "react-slick";
import { imageslinks } from "./imageData";
import "./carousel.css"
export default function Simpleslider() 
{
    const settings = {
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      arrows:true,
      slidesToScroll: 1,
      className: "slides",
      autoplay : true,
      autoplayspeed : 800,
    };
    return (
      <div className="App" style={{marginTop : "0px"}} >
        <Slider {...settings} key = "imageslinks.id">
          {imageslinks.map((photo)=>
          {
            return(
              <div>
              <img  className="imgHeight" width="100%" src={photo.imageaddress}  alt="this is Movie Banner"/>
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
