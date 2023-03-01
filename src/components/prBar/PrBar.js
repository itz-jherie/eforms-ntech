import React from 'react'
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import "./prbar.css"

const PrBar = (props) => {
  return (
    <div className='progressBar'>
      <ProgressBar
        percent={((props.step - 1) * 100)/2}
        filledBackground="rgb(0, 128, 0)"
      >
        <Step transition="scale">
          {({ accomplished, page }) => (
           <div className="step" id={`${accomplished ? "completed" : ""}`}>
            1
           </div>
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished, page }) => (
             <div className= "step" id={`${accomplished ? "completed" : ""}`}>
             2
            </div>
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished, page }) => (
             <div className="step" id={`${accomplished ? "completed" : ""}`}>
             3
            </div>
          )}
        </Step>
      </ProgressBar>
    </div>


  )
}

export default PrBar