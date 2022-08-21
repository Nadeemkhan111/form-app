import React, { useContext } from "react";
import { Button, Card, CardContent, Grid, Typography } from "@mui/material";
import { multipleContext } from "../StepContext";
import PersonIcon from "@mui/icons-material/Person";
import GroupsIcon from "@mui/icons-material/Groups";

const StepThree = () => {
  const { setCurrent, userData, setUserData } = useContext(multipleContext);
  return (
    <div>
      <Typography paddingTop={"2rem"} gutterBottom variant="h4">
        How are You Planning to us use Eden ?
      </Typography>
      <Typography paddingBottom={"3rem"} variant="body2" color="text.secondary">
        We'll steramline your setup experience accordingly.
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={4}></Grid>
        <Grid item xs={2}>
          <Card style={{ height: "13rem" }} sx={{ maxWidth: 345 }}>
            <CardContent>
              {<PersonIcon color="primary" />}

              <Typography gutterBottom variant="h5" component="div">
                For MySelf
              </Typography>
              <Typography variant="body2" color="text.secondary">
                better think more clearly.Stay organized
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={2}>
          <Card style={{ height: "13rem" }} sx={{ maxWidth: 345 }}>
            <CardContent>
              {<GroupsIcon color="primary" />}{" "}
              <Typography gutterBottom variant="h5" component="div">
                With My team
              </Typography>
              <Typography variant="body2" color="text.secondary">
                wikis,docs,task,project,all in one place
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}></Grid>
      </Grid>
      <br />
      <br />
      <Button
        onClick={() => setCurrent(4)}
        variant="contained"
        color="primary"
        sx={{ width: "210px" }}
      >
        Create Workspace
      </Button>
    </div>
  );
};

export default StepThree;
