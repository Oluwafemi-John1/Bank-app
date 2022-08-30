import React, { useEffect, useState } from 'react'
import logo from "../assets/images/svgexport-1.svg"
import signinimg from "../assets/images/downloadsignin.svg"
import "../assets/css/SigninNav.css"
import { Link, useNavigate } from 'react-router-dom'

const SigninNav = () => {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [allUser, setallUser] = useState([]);
    const [errorMessage, seterrorMessage] = useState("");
    const navigate = useNavigate();
    
    useEffect (() => {
        if (localStorage.member) {
            let details = JSON.parse(localStorage.member)
            setallUser(details)
        } else {
            setallUser([])
        }
    }, [])
    const signin = () => {
        if (email !=="" && password !=="") {
            let userDetails = {email,password}
            let allCustomer =[...allUser]

            const found = allCustomer.find((element) => {
                return (element.email === userDetails.email && element.password === userDetails.password)
            });
            console.log(found);
            let mess = "Successfully signed in"
            navigate("/dashboard")
            seterrorMessage(mess)
        } else {
            let error = "Please fill in your details appropriately"
            seterrorMessage(error)
        }
    }
  return (
    <>
        {/* NavBar */}
        <div className="sticky-top shadow-sm" id='sticky-top'>
            <nav className="navbar navbar-expand-lg py-3">
                <div className="container-fluid">
                    <a className="navbar-brand ms-lg-5" href="#"><img src={logo} width={85} alt="" className='imglogo'/></a>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className='navbar-nav' id='navbar-nav2'>
                            <li className="nav-item">
                                <Link className="nav-link rounded px-4 openaccount" to="/signup" >Open an Account</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>

        {/* Sign in page */}
        <div className="container-fluid mt-5">
            <div className="row mx-auto">
                <div className="col-lg-4 mx-auto col-sm-11 px-5">
                    <div className="border p-3 shadow-sm rounded mt-lg-3" id='browserAddress'>
                    Please, check your browser’s address bar to be sure you’re on
                    https://app.easy.com
                    </div>
                    <div className="alert alert-info text-center mt-2">{errorMessage}</div>
                   
                    <div className='border rounded mt-lg-4 p-5 shadow-sm'>
                        <h4>Sign in To Kuda</h4>
                        <p>To sign in, please type in the email address linked to your Kuda account and your Kuda password.</p>
                        <label htmlFor="" className='fw-bold' style={{color:"#40196D"}}>Email Address:</label>
                        <input
                            type="email"
                            minLength={8}
                            placeholder="example@gmail.com"
                            className="my-2 form-control"
                            onChange={(e) => setemail(e.target.value)}
                        />
                        <label htmlFor="" className='fw-bold' style={{color:"#40196D"}}>Password:</label>
                        <input
                            type="password"
                            placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
                            className="my-2 form-control"
                            onChange={(e) => setpassword(e.target.value)}
                        />
                        <p>Forgot Password? <span style={{color:"#40196D"}}>Reset it</span></p>
                        <button className="btn my-2 w-100 p-2 text-light" style={{backgroundColor:"#40196D"}} onClick={signin}>
                            Sign In
                        </button>
                   </div>
                </div>
                <div className="col-lg-7">
                    <img src={signinimg} id="signupimg" className="ms-lg-5" alt="" height={500} />
                </div>
            </div>
      </div>
    </>
  )
}

export default SigninNav