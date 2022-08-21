import React, { useContext } from "react";
import { TextField, Button,Typography } from "@mui/material";
import { multipleContext } from "../StepContext";

const StepTwo = () => {
  const { setCurrent, userData, setUserData } = useContext(multipleContext);
  return (
    <div style={{paddingTop:"3rem"}}>
      
      <Typography paddingTop={"2rem"} gutterBottom variant="h4">Let's set up a home for all your work</Typography>
      <Typography paddingBottom={"2rem"} variant="body2" color="text.secondary">You can always create another workspace later</Typography>
      <div>
        <TextField
          label="Workspace Name"
          variant="outlined"
          color="secondary"
          margin="normal"
          value={userData["workspacename"]}
          onChange={(e) =>
            setUserData({ ...userData, "workspacename": e.target.value })
          }
        />
      </div>
      <div>
        <TextField
          label="Workspace URL"
          variant="outlined"
          color="secondary"
          margin="normal"
          value={userData["workspaceUrl"]}
          onChange={(e) =>
            setUserData({ ...userData, "workspaceUrl": e.target.value })
          }
        />
      </div>
      <div>
        <Button
          onClick={() => setCurrent(3)}
          variant="contained"
          color="primary"
          sx={{width:"210px"}}
        >
          Create Workspace
        </Button>
      </div>
    </div>
  );
};

export default StepTwo;
