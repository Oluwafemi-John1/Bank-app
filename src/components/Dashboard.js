import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/images/svgexport-1.svg"

const Dashboard = () => {
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
    </>
  )
}

export default Dashboard