import React from 'react'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import News from '../News/News'
import Trailer from '../Trailer/Trailer'

export default function Homepage() {
  return (
    <>
    <div className="home">
      <Header />
      <Trailer/>
      <News/>
      <Footer />  
    </div>
    </>
  )
}
