import React from "react";
import Homepage from "./view/HomePage/Homepage";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Login from "./view/Login/Login"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Signup from "./view/Signup/Signup";
import Movie from "./view/movies/Movie";
import Contact from "./view/Contactus/Contact";
import Movieseparate from "./view/movies/Separatepage/Movieseparate"
import About from "./view/About/About";
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path="/" element = {<Homepage/>}/>
        <Route exact path="/login" element = {<Login/>}/>
        <Route exact path="/Signup" element = {<Signup/>}/>
        <Route exact path="/Movies" element = {<Movie/>}/>
        <Route exact path="/Contact" element = {<Contact/>}/>
        <Route exact path="/About" element = {<About/>}/>
        <Route exact path="/MovieInfo/:id" element = {<Movieseparate/>}/>
      </Routes>
      </Router>
    </>
  );
}
export default App;
