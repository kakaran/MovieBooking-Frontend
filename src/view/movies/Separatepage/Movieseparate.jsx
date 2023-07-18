import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AiTwotoneLike } from 'react-icons/ai';
// import { ToastContainer} from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';
import axios from "axios";
import Navbar from "../../../Components/Navbar/Navbar";
import Footer from "../../../Components/Footer/Footer";
import "./Movieseparate.css";
// import { toast } from "react-toastify";

export default function Movieseparate() {
  const [MovieD, setMovieD] = useState({});
  const [castimg , setCastimg] = useState([]);
  const [castname, setCastname] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios.defaults.headers = {
      auth: localStorage.getItem("token"),
    };
    async function fetchData() {
      try {
        const data = (
          await axios.get(`https://tan-prickly-centipede.cyclic.app/movie/getMovies/${id}`, {})
        ).data;
        setMovieD(data);
        setCastimg(data.casterimg);
        setCastname(data.casterName);
        console.log(data)
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

 

  async function handleBooking()
  {
    const userId = {id : localStorage.getItem("userid")}
    console.log(userId)
      await axios.post(`https://tan-prickly-centipede.cyclic.app/movie/moviebooking/${id}`,userId).then(function (response)
      {
        if(response.data)
        {
          console.log("movie Booked")
          // toast.success(`${MovieD.Title} Movie Ticket Successfully Booked`)
          Swal.fire({
            icon: 'success',
            text: `${MovieD.Title} Ticket Booked`,
            footer: '<a href="/Movies">Select Other Movies</a>'
          })

        }
      }).catch(function (error)
      {
        console.log(error);
      })
  }

  return (
    <>
      <div style={{ backgroundColor: "#201E1E" }}>
        <Navbar />
      </div>
      <div >
        <div className="seprateMovieContanier">
          <div className="backgroundimg">
            <img src={MovieD.BackImg} alt="" />
          </div>
          <div className="frontdata">
            <div className="datarow">
              <img src={MovieD.movieImage} alt="" />
              <div className="detail">
                <h1>{MovieD.Title}</h1>
                <p><span className="detailpara"><AiTwotoneLike style={{color : "green"}}/> {MovieD.likes} </span> are interested</p>
                <div className="displaylanguage">
                  <p>{MovieD.Quality}</p>
                  <p style={{padding : "10px 20px"}}>{MovieD.Language}</p>
                </div>
                <div className="timetype">
                  <p><span>{MovieD.time}</span> . <span>{MovieD.type}</span> . <span>{MovieD.Categorie}</span></p>
                </div>
                <div className="moviebookbutton">
                  <button onClick={()=>
                  {
                    handleBooking();
                  }}>Book tickets</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="AboutofMovie">
          <h1>About the movie</h1>
          <p>{MovieD.About}</p>
          <hr />
        </div>
        <div className="casters">
          <h1>Cast</h1>
          <div className="castslider">
            <div className="casterimagename">
          <div className="casterimg">
          {castimg.map((value1)=>
          {
            return(
              <div className="casterimgcircle">
                <img src={value1} alt="" />
              </div>
            );
          })}
          </div>
          <div className="castername">
          {castname.map((value2)=>
          {
            return(
              <div className="casternamedetail">
                <p>{value2}</p>
              </div>
            )
          })}
          </div>
          </div>
          </div>
          <hr />
        </div>
        {/* <ToastContainer /> */}
      </div>
      <Footer />
    </>
  );
}
