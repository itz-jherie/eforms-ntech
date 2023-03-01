import React, { useState } from "react";
import "./multistepform.css";
import logo from "../../../assets/images/Logo_black.png"
import PrBar from "../../../components/prBar/PrBar";
import Button from "../../../components/cta/Button";
import "./Upload"
import "./Verifyemail"
import Basicinfo from "./Basicinfo";
import Verifyemail from "./Verifyemail";
import Upload from "./Upload";


const MultiStepForm = () => {

  const [index, setIndex] = useState(1);

  const  headers = ["Basic Information", "Upload Passport", "Confirm Account sent to your Email Address"];

  const [formData, setFormData] = useState({
    phoneNumber: "",
    contactAddress: "",
    state: "",
    lga: "",
    zipCode: "",
    photo: "",
  });

  const saveAndContinue = () => {
    if (index < 3) {
      setIndex(prevState => prevState + 1)
    }
  };

  const prev = () => {
    if (index > 1) {
      setIndex(prevState => prevState - 1)
    }
  };

  // handling form input data by taking onchange value and updating our previous form data state
  const handleInputData = input => e => {
    // Input value from the form
    const {value} = e.target;

  //updating for data state taking previous state and then adding new value to create new object
    setFormData(prevState => ({
      ...prevState,
      [input]: value
    }))

  }

  //Javascript switch case to show different forms in each step

  switch(index) {

    // case 1 to show stepOne form and passing nextStep, prevStep, and 
    //handleInputData as handleFormData method as prop and also formData 
    //as value to the fprm

    case 1:
      return (
        <div className="App">
          <div className="App__header">
            <div classname="logo">
            <img src={logo} id="logo" />
            </div>
            <h1 className="header__h1">Create An Account</h1>
            <p className="header__content">Basic Information</p>
          </div>

          <div className="App__body">
            <PrBar step={index} id="bar"/>
            <Basicinfo saveAndContinue={saveAndContinue} className="app__inner" values={formData} handleFormData={handleInputData}/>
          </div>
        </div>
      );
      break;

      case 2:
      return (
        <div className="App">
          <div className="App__header">
            <img src={logo} id="logo" />
            <h1>Create An Account</h1>
            <p>Basic Information</p>
          </div>

          <div className="App__body">
            <PrBar step={index} className="bar"/>
            <Upload className="app__inner" />
          </div>
        </div>
      );
      break;

      case 3:
      return (
        <div className="App">
          <div className="App__header">
            <img src={logo} />
            <h1>Create An Account</h1>
            <p>Basic Information</p>
          </div>

          <div className="App__body">
            <PrBar step={index} className="bar"/>
            <Verifyemail className="app__inner" />
          </div>
        </div>
      );
      break;

      // default case to show nothing
    default:
  return (
   <div className="multiform">

<div className="createAccount__header">
  <img src="" alt="logo" />
  <h1>{}</h1>
  <p> Basic Information</p>
</div>

<div className="createAccount__body">

{/*
<div className="progressbar">
  <PrBar step={index}/>
</div>
  */}

  </div>
</div>
  )
}
}

export default MultiStepForm;