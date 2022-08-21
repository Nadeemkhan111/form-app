import React, { useContext } from "react";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { multipleContext } from "../StepContext";

const StepOne = () => {
  const { setCurrent, userData, setUserData } = useContext(multipleContext);
  return (
    <div style={{ paddingTop: "3rem" }}>
      <Typography paddingTop={"2rem"} gutterBottom variant="h4">
        Welcome! First Think First...
      </Typography>
      <Typography paddingBottom={"2rem"} variant="body2" color="text.secondary">
        You can always change them later
      </Typography>
      <div>
        <TextField
          label="Full Name"
          variant="outlined"
          color="secondary"
          margin="normal"
          value={userData["fullname"]}
          onChange={(e) =>
            setUserData({ ...userData, fullname: e.target.value })
          }
        />
      </div>
      <div>
        <TextField
          label="Display Name"
          variant="outlined"
          color="secondary"
          margin="normal"
          
          value={userData["displayname"]}
          onChange={(e) =>
            setUserData({ ...userData, displayname: e.target.value })
          }
        />
      </div>
      <div>
        <Button
          onClick={() => setCurrent(2)}
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

export default StepOne;
