import React from 'react'
import{Newsdata} from "./Newsdata";
import "./News.css"
export default function News() {

  return (
    <>
        <div className="NewsHeading">
            <h1>Recent News</h1>
        </div>
        <div className="NewsContainer">
            {Newsdata.map((value) =>
            {
                return(
                    <div className="News">
                        <img src={value.img} alt="" />
                        <h1>{value.title}</h1>
                        <p>{value.describe}</p>
                    </div>
                )
            })}
        </div>
    </>
  )
}
