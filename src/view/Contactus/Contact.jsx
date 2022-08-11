import React, { useState } from "react";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Contact.css";
export default function Contact() {
  const [fname, setFirstname] = useState(" ");
  const [lname, setLastname] = useState(" ");
  const [email, setEmail] = useState(" ");
  const [option, setOption] = useState(" ");
  const [message, setMessage] = useState(" ");

  const handleChange = () => {
    if (fname && lname && email && option && message === " ") {
      toast.warning("Plece fill all empty blanks");
    } else {
      toast.success("Request Successfully Send");
    }
  };
  return (
    <>
      <div style={{ backgroundColor: "#201E1E" }}>
        <Navbar />
      </div>
      <div className="heading">
        <h1>Contact   us</h1>
      </div>
      <div className="ContactContainer">
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112048.74519697342!2d76.9882014980467!3d28.644046349054317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03698f7fb165%3A0xa0b440796978fa16!2sCin%C3%A9polis%20Unity!5e0!3m2!1sen!2sin!4v1659674928593!5m2!1sen!2sin"
            width= "740px"
            height="600"
            style={{border:0}}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="infomation">
          <div className="informationContainer">
            <h1>Get in Touch</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <div className="inforow">
              <div className="infocolumn">
                <label htmlFor="Firstname">Firstname*</label>
                <input
                  type="text"
                  id="Firstname"
                  placeholder="Please enter your Firstname"
                  onChange={(e) => {
                    setFirstname(e);
                  }}
                />
              </div>
              <div className="infocolumn">
                <label htmlFor="Lastname">Lastname*</label>
                <input
                  type="text"
                  id="Lastname"
                  placeholder="Please enter your Lastname"
                  onChange={(e) => {
                    setLastname(e);
                  }}
                />
              </div>
            </div>
            <div className="inforow">
              <div className="infocolumn">
                <label htmlFor="Email">Email</label>
                <input
                  type="text"
                  id="Email"
                  placeholder="Please enter your Email"
                  onChange={(e) => {
                    setEmail(e);
                  }}
                />
              </div>
              <div className="infocolumn">
                <label htmlFor="specify">Please specify your need </label>
                <select
                  name=""
                  id="specify"
                  onChange={(e) => {
                    setOption(e);
                  }}
                >
                  <option value=""></option>
                  <option value="Request quotation">Request quotation</option>
                  <option value="Request order status">
                    Request order status
                  </option>
                  <option value="Request copy of an invoice">
                    Request copy of an invoice
                  </option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
            <div className="inforow">
              <div className="infocolumn">
                <label htmlFor="Message">Message</label>
                <textarea
                  name=""
                  id="Message"
                  cols="67"
                  rows="8"
                  placeholder="Message for me"
                  onChange={(e) => {
                    setMessage(e);
                  }}
                ></textarea>
              </div>
            </div>
            <div className="infobutton">
              <button
                onClick={() => {
                  handleChange();
                }}
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
        <ToastContainer 
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />
      </div>
      <Footer />
    </>
  );
}
