import React from 'react'
import Simpleslider from '../../view/HomePage/carousel/Simpleslider'
import Navbar from '../Navbar/Navbar'
import "./Header.css";

export default function Header() {
  return (
    <>
        <div className='HeaderElementsContainer'>
            <div className="HederNavbar">
                <Navbar />
            </div>
            <div className="carousel">
                <Simpleslider />
            </div>
        </div>
    </>
    )
}
