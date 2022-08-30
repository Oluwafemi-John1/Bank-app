import React, { useEffect, useState } from 'react'
import logo from "../assets/images/svgexport-1.svg"
import signinimg from "../assets/images/downloadsignin.svg"
import { Link, useNavigate } from 'react-router-dom'

const SignupNav = () => {
    const [fullname, setfullname] = useState("");
    const [phonenum, setphonenum] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [allUser, setallUser] = useState([]);
    const [errorMessage, seterrorMessage] = useState("");
    const navigate = useNavigate();
    useEffect(()=> {
        if (localStorage.member) {
            let details = JSON.parse(localStorage.member)
            setallUser(details)
        } else {
            setallUser([])
        }
    }, [])

    let date = new Date().getDate();
    let month = new Date().getMonth();
    let year = new Date().getFullYear();
    let dateCreated = `${date}-${month}-${year}`
    let accountNumber = "99" + Math.floor(Math.random()*100000000)

    const signup = () => {
        if (fullname !=="" && phonenum !=="" && email !=="" && password !=="") {
            let userDetails = {fullname, phonenum, email, password, accountNumber, dateCreated}
            console.log(userDetails);
            setallUser(()=> {
                let Customer = [...allUser,userDetails]
                localStorage.member = JSON.stringify(Customer)
                navigate("/dashboard")
                return Customer
            })
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
                                <Link className="nav-link rounded px-4 openaccount" to="/signin" >Sign in</Link>
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
                    Please, check your browser’s address bar to be sure you’re on https://app.easy.com
                    </div>
                    <div className="alert alert-info text-center mt-2">{errorMessage}</div>
                   
                    <div className='border rounded mt-lg-4 p-5 shadow-sm mb-3'>
                        <h4>Get a Kuda acccount now</h4>
                        <p>To sign up, please type in a valid email address</p>
                        <div>
                            <label htmlFor="" className='fw-bold' style={{color:"#40196D"}}>Full Name:</label>
                            <input
                                type="text"
                                placeholder="firstname&nbsp;&nbsp;lastname"
                                className="my-2 form-control"
                                onChange={(e) => setfullname(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="" className='fw-bold' style={{color:"#40196D"}}>Phone Number</label>
                            <input
                                type="number"
                                placeholder="enter phone number"
                                className="my-2 form-control"
                                onChange={(e) => setphonenum(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="" className='fw-bold' style={{color:"#40196D"}}>Email Address:</label>
                            <input
                                type="email"
                                placeholder="example@gmail.com"
                                className="my-2 form-control"
                                onChange={(e) => setemail(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="" className='fw-bold' style={{color:"#40196D"}}>Password:</label>
                            <input
                                type="password"
                                placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
                                className="my-2 form-control"
                                onChange={(e) => setpassword(e.target.value)}
                            />
                        </div>
                        <p>Forgot Password? <span style={{color:"#40196D"}}>Reset it</span></p>
                        <button className="btn my-2 w-100 p-2 text-light" style={{backgroundColor:"#40196D"}} onClick={signup}>
                            Create Account
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

export default SignupNav