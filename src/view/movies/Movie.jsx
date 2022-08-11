import React, { useEffect, useState } from "react";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import axios from "axios";
import "./movie.css";
// import Movies from "../HomePage/HomeMovies/Movies";

export default function Movie() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.defaults.headers = {
      auth: localStorage.getItem("token"),
    };

    async function fetchData() {
      try {
        const data = (await axios.get("https://moviebooking-k.herokuapp.com/movie/getMovies", {})).data;
        setMovies(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <div style={{ backgroundColor: "#201E1E" }}>
        <Navbar />
      </div>
        <div className="HomeMoviesContainer">
            <h2>Movies</h2>
            <div className="MoviesContainer">
                {movies.map((data) => {
                return(
                    <div className="moviebox">
                    <div className="movieImg">
                    <a onClick={() =>
                    {
                      window.location.href = "/MovieInfo/" + data._id;
                    }}>
                        <img src={data.movieImage} alt="" />
                    </a>
                    </div>
                    <div className="movieDescr">
                    <h3>{data.Title}</h3>
                    <p>{data.Categorie}</p>
                    <p>{data.Language}</p>
                    </div>
                    </div>
                )
                })}
            </div>
        </div>
      <Footer />
    </>
  );
}