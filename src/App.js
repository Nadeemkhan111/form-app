import logo from "./logo.svg";
import "./App.css";
import StepOne from "./components/StepOne";
import StepTwo from "./components/StepTwo";
import StepThree from "./components/StepThree";
import StepFour from "./components/StepFour";
import DisplayData from "./components/DisplayData";
import { Stepper, StepLabel, Step, Typography } from "@mui/material";
import {multipleContext} from "./StepContext"
import { useContext } from "react";

function App() {
 const {current,finalData}=useContext(multipleContext)
    function showStep(step){
      switch(step){
        case 1:
          return <StepOne/>
          case 2:
            return <StepTwo/>
            case 3:
              return <StepThree/>
              case 4:
                return <StepFour/>
      }
    }

  return (
    <div className="App">
      
      <Typography paddingTop={"3rem"} gutterBottom variant="h3">Eden</Typography>
      <div className="stepper">
        <Stepper style={{width:"18%" }}activeStep={current-1} orientation="horizontal" >
          <Step>
            <StepLabel></StepLabel>
          </Step>
          <Step>
            <StepLabel></StepLabel>
          </Step>
          <Step>
            <StepLabel></StepLabel>
          </Step>
          <Step>
            <StepLabel></StepLabel>
          </Step>
        </Stepper>
      </div>
    {showStep(current)} <br/>
    {finalData.length>0?<DisplayData/>:""}
    </div>
  );
}

export default App;
