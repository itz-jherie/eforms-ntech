import React from 'react'
import Bigbox from "../features/Bigbox"
import Selectinput from "../cta/Selectinput";
import { Link } from 'react-router-dom';
import "./maincontent.css"
import data from '../../assets/dataFiles/dataCards2';
import Smallbox from '../features/Smallbox'

const Maincontent = () => {
  return (
    <div className='mainContent'>

        <h3 className="mainContent--title">3 steps to get your court affidavit filled and stamped</h3>
        
        {/* <div className='mainContent--1'>

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
          <p className='icon--text'>Print</p>
          
         </div>

        </div> */}

        <div className="selectBox">
          {data.map((dt,i) => (
            <div className="selectItem" key={i}>
              <img src={dt.img} alt="imagi" className='selectImg' />
              <span className='selectTitle'>{dt.title}</span>
              <p className="selectContent">{dt.content}</p>
            </div>
          ))}
        </div>

        {/*  Popular Forms */}
        <div className="featureBox">
          <h1 className="featureBox--title">Popular Forms</h1>
          <div className='featureBox--content'>
          <Bigbox className="bigBox"/>
          </div>
        </div>

        {/* Court 
        <div className='court'>
        <h1 className="court--title">Find the courts in your state</h1>
          <div className="court--content1">
            
            <Selectinput className="selectButt"/>

            <button className='proceedBtn'> 
        <Link to="signin" style={{color: "var(--white)"}}>Proceed</Link>  
       </button>

      
            <Button className="mdBtn proceedBtn" content="Proceed"/>
  
            </div>
          <div className="court--content2">
            <Smallbox />
          </div>
        </div>      */}  
    </div>
  )
}

export default Maincontent