import React from 'react'
import Bigbox from "../features/Bigbox"
import Selectinput from "../cta/Selectinput"
import "./maincontent.css"
import Button from "../cta/Button"
import {BsFillCheckSquareFill, BsFillPersonPlusFill} from "react-icons/bs"
import {AiFillFileText, AiFillPrinter} from "react-icons/ai"
import Smallbox from '../features/Smallbox'

const Maincontent = () => {
  return (
    <div className='mainContent'>

        <h3 className="mainContent--title">Get your filled and stamped court affidavit in 3 steps</h3>
        
        <div className='mainContent--1'>

          <div className='icon--cont'>
          <div className='icon--circle'>
          <BsFillCheckSquareFill className='inner--icon'/>
          </div>
          <p className='icon--text'>Selelct Form</p>
          </div>

        

         <div className='icon--cont'>
         <div className='icon--circle'>
          <AiFillFileText className='inner--icon'/>         
          </div>
          <p className='icon--text'>File Details</p>
         </div>
            

         <div className='icon--cont'>
         <div className='icon--circle'>
          <AiFillPrinter className='inner--icon'/>
          </div>
          <p className='icon--text'>Print or Delivery</p>
         </div>

        </div>

        {/*  Popular Forms */}
        <div className="featureBox">
          <h1 className="featureBox--title">Popular Forms</h1>
          <div className='featureBox--content'>
          <Bigbox className="bigBox"/>
          </div>
        </div>

        {/* Court */}
        <div className='court'>
        <h1 className="court--title">Find the courts in your state</h1>
          <div className="court--content1">
            
            <Selectinput className="selectButt"/>
            <Button className="mdBtn proceedBtn" content="Proceed"/>
          </div>
          <div className="court--content2">
            <Smallbox />
          </div>
        </div>        
    </div>
  )
}

export default Maincontent