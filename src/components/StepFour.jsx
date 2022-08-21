import { Button, Typography } from "@mui/material";
import React, { useContext } from "react";
import { multipleContext } from "../StepContext";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const StepFour = () => {
  const { setCurrent, userData, setUserData, submitData } =
    useContext(multipleContext);
  return (
    <div style={{ paddingTop: "4rem" }}>
        {<CheckCircleIcon color="primary" sx={{width:"400px", height:"100px"}}/>}
      <Typography paddingTop={"2rem"} gutterBottom variant="h4">
        Congratulations,Eren!
      </Typography>
      <Typography paddingBottom={"2rem"} variant="body2" color="text.secondary">
        You have completed onbording,you can start using the Eden
      </Typography>
      <Button
        onClick={submitData}
        variant="contained"
        color="primary"
        sx={{ width: "210px" }}
      >
        Launch Eden
      </Button>
    </div>
  );
};

export default StepFour;
