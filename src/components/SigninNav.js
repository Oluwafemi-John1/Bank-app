import React, { useState } from 'react'
import logo from "../assets/images/svgexport-1.svg"
import signinimg from "../assets/images/downloadsignin.svg"
import "../assets/css/SigninNav.css"
import axios from 'axios'

const SigninNav = () => {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState(second)
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
                                <a className="nav-link rounded px-4 openaccount" href="#" >Open an Account</a>
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
                    {/* <div className="alert alert-success">{message}</div> */}
                    <div className="border p-3 shadow-sm rounded mt-lg-3" id='browserAddress'>
                    Please, check your browser’s address bar to be sure you’re on
                    https://app.easy.com
                    </div>
                   
                    <div className='border rounded mt-lg-4 p-5 shadow-sm'>
                        <h4>Sign in To Kuda</h4>
                        <p>To sign in, please type in the email address linked to your Kuda account and your Kuda password.</p>
                        <label htmlFor="" className='fw-bold' style={{color:"#40196D"}}>Email Address:</label>
                        <input
                            type="email"
                            placeholder="example@gmail.com"
                            className="my-2 form-control"
                            onChange={(e) => setemail(e.target.value)}
                        />
                        <label htmlFor="" className='fw-bold' style={{color:"#40196D"}}>Password:</label>
                        <input
                            type="password"
                            placeholder="Password"
                            className="my-2 form-control"
                            onChange={(e) => setpassword(e.target.value)}
                        />
                        <p>Forgot Password? <span style={{color:"#40196D"}}>Reset it</span></p>
                        <button className="btn btn-info my-2 w-100 p-3" onClick={signin}>
                            Sign In
                        </button>
                   </div>
                </div>
                <div className="col-lg-7" id="signupimg">
                    <img src={signinimg} className="ms-lg-5" alt="" height={500} />
                </div>
            </div>
      </div>
    </>
  )
}

export default SigninNav