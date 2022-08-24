import axios from 'axios';
import React,{useState} from 'react';
import {BsEyeFill,BsEyeSlashFill } from 'react-icons/bs';
import { Link, NavLink } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Loginform.css";


export default function Loginform() {
  const [useremail,setEmail] = useState();
  const [passwordtype,setPasswordType] = useState("password");
  const [leye, setEye] = useState(<BsEyeSlashFill/>)
  const [password,setPass] = useState();
  const navigate = useNavigate();

  async function handleSignin() 
  { 
    const user = {
      useremail,
      password,
    };
    await axios.post("https://moviebooking-k.herokuapp.com/api/Login",user).then(function(response){
      if(response.data.token)
      {
          localStorage.setItem("token",response.data.token);
          localStorage.setItem("userid",response.data.userid);
          toast.success("Successfully Login");
          // window.location.href="/Movies";
          navigate("/Movies");

      }
    }
    ).catch(function(error)
    {
      console.log(error);
      toast.error(error.request.response);
    })  
  }
  const loginPassshow = () =>
    {
        if(passwordtype === "password")
        {
            setPasswordType("text");
            setEye(<BsEyeFill/>);
        }
        else
        {
            setPasswordType("password");
            setEye(<BsEyeSlashFill/>);
        }
    }
  return (
    <>
      <div className="formContainer">
        <h1>Login</h1>
        <div className="form">
          <label htmlFor="name">Email</label>
          <input type="email" id="name" placeholder='Type your Email' onChange={(e) => {
            setEmail(e.target.value);
          }}/>
          <label htmlFor="password">Password</label>
          <div className="passwordContainer">
          <input type={passwordtype} id="password" placeholder='Type your Password ' onChange={(e)=>
          {
              setPass(e.target.value);
          }}/><button onClick={() =>{
            loginPassshow();
            }}>{leye}</button>
            </div>
          <Link className = "forgetP" to="/"><p>Forgot Password?</p></Link>
          <button className = " loginButton" onClick={() =>
          {
            handleSignin();
          }}>Login</button>
          <NavLink className='createA' to="/signup"><p>Create Account</p></NavLink>
        </div>
        <ToastContainer 
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />
      </div>
    </>
)
}
