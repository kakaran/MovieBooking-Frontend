import React,{useState} from 'react'
import axios from 'axios';
import { BsArrowRight,BsEyeFill,BsEyeSlashFill } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import "./signup.css"


export default function Signup() {
    const [passwordtype,setPasswordType] = useState("password");
    const [conpasswordtype,setconPasswordType] = useState("password");
    const [eye, setEye] = useState(<BsEyeSlashFill/>)
    const [ceye, setconEye] = useState(<BsEyeSlashFill/>)
    const [name, setName] = useState();
    const [useremail, setEmail] = useState();
    const [password, setPass] = useState();
    const [confirmpassword, setConPass] = useState();
    const navigate = useNavigate();
    const  handleSignup = async () =>
    {
        const user = {
            name,
            useremail,
            password,
            confirmpassword,
        };

        await axios.post("https://tan-prickly-centipede.cyclic.app/api/Signup",user).then(function(response){
            // window.location.href = "/login";
            Swal.fire({
                icon : "success",
                text: `Your account has been created `,
            })
            navigate("/login");
        }).catch(function(error)
        {
            Swal.fire({
                icon : "warning",
                text: `${error.request.response} `,
              })
        })
        
    }

    const show = () =>
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

    const cshow = () =>
    {
        if(conpasswordtype === "password")
        {
            setconPasswordType("text");
            setconEye(<BsEyeFill/>);
        }
        else
        {
            setconPasswordType("password");
            setconEye(<BsEyeSlashFill/>);
        }
    }
  return (
    <>
        <div className="mainsignupcontainer">
            <div className="signupContainer">
                <h1>Sign Up</h1>
                <div className="signupform">
                    <label htmlFor="name">Full Name</label>
                    <input type="text" id="name" placeholder='Name' onChange={(e) =>
                    {
                        setName(e.target.value);
                    }}/>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder='Email address' onChange={(e) =>
                    {
                        setEmail(e.target.value);
                    }}/>
                    <label htmlFor="password">Password</label>
                    <div className="passwordContainer">
                    <input type={passwordtype} id="password" placeholder='Password'onChange={(e) =>
                    {
                        setPass(e.target.value);
                    }}/>
                    <button onClick={() =>{show();}}>{eye}</button>
                    </div>
                    <label htmlFor="cpassword">Confirm Password</label>
                    <div className="passwordContainer">
                    <input type={conpasswordtype}  id="cpassword" placeholder='Confirm Password'onChange={(e) =>
                    {
                        setConPass(e.target.value);
                    }}/>
                    <button onClick={() =>{cshow();}}>{ceye}</button>
                    </div>
                </div>
                <div className="confirm">
                    <button onClick={() =>
                    {
                        handleSignup();
                    }}>Sign Up</button>
                    <Link to="/login"><p>Login <span className='signuparrow'><BsArrowRight/></span></p></Link>
                </div>
            </div>
        </div>
    </>
  )
}
