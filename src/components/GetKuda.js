import React from 'react'
import "../assets/css/GetKuda.css"
import cbn from "../assets/images/cbn.svg"
import ndic from "../assets/images/NDIC.svg"
import bank from "../assets/images/transfermoney.svg"
import card1 from "../assets/images/svgexport-3.svg"
import budget from "../assets/images/svgexport-6.svg"
import equation from "../assets/images/svgexport-20.svg"
import paynothing from "../assets/images/svgexport-4.svg"
import save from "../assets/images/svgexport-5.svg"
import { Link } from 'react-router-dom'

const GetKuda = () => {
    let cardStyle = {
        color:"#40196D",
        fontFamily:"Muli, sans-serif;",
        fontWeight:"900",
        fontSize:"16px",
        lineHeight:"23px"
    }

    let cardmargin = {
        marginRight:"30px"
    }
  return (
    <>
    <section className="container-fluid" id='sectionKuda'>
        <div className="row">
            <div className="col-lg-4 col-sm-12 p-5" id='freebank1'>
                <h1 id='freebank' className='p-lg-2'>We’re the bank of the free</h1>
                <p id='freedom' className='p-2'>We’re here to help you get the best out of your money, no strings attached.<br />Welcome to your freedom!</p>
                <div className="cbn">
                    <img src={cbn} alt="" />&nbsp;
                    <img src={ndic} alt="" className='ms-lg-3' />
                </div>
                <Link className="nav-link fs-5 text-center" to="/signup" id='getKudagetKuda'>Get Kuda</Link>

            </div>
            <div className="col-lg-4 col-sm-12" id='imagebank'>
                <img src={bank} width={480} alt="" />
            </div>
        </div>
    </section>

    {/* Card Section */}
    <section className="container-fluid" id='card'>
        <div className="row">
            <div className="row" id='cards'>
                <div className="card col-3 p-3 shadow-sm border-0" style={cardmargin}>
                    <div className="card-text px-1"><img src={card1} alt="" /></div>
                    <div className="card-text px-1 mt-2 fw-bold" style={cardStyle}>We’ll give you a free debit card. Order it right in the app.</div>
                </div>
                <div className="card col-3 p-3 shadow-sm border-0" style={cardmargin}>
                    <div className="card-text px-1"><img src={budget} alt="" /></div>
                    <div className="card-text px-1 mt-2 fw-bold" style={cardStyle}>Create smart budgets to help you take control of your spending.</div>
                </div>
                <div className="card col-3 p-3 shadow-sm border-0" style={cardmargin}>
                    <div className="card-text px-1"><img src={equation} alt="" /></div>
                    <div className="card-text px-1 mt-2 fw-bold" style={cardStyle}>See where your money goes without solving equations..</div>
                </div>
            </div>

            <div className="row mt-4" id='cards'>
                <div className="card col-3 p-3 shadow-sm border-0" style={cardmargin}>
                    <div className="card-text px-1"><img src={paynothing} alt="" /></div>
                    <div className="card-text px-1 mt-2 fw-bold" style={cardStyle}>Pay absolutely nothing for sending money.</div>
                </div>
                <div className="card col-3 p-3 shadow-sm border-0" style={cardmargin}>
                    <div className="card-text px-1"><img src={save} alt="" /></div>
                    <div className="card-text px-1 mt-2 fw-bold" style={cardStyle}>Save automatically and we’ll pay you up to 15% interest every year.</div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default GetKuda