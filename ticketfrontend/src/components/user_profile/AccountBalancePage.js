import React from "react";

import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import busImage from "../../Assests/busImage.png"
const AccountBalancePage = () => {
  return (
    <div>
      <Grid container spacing={4} style={{ marginTop: "5px" }}>
        <Grid item xs={1}></Grid>
        <Grid item xs={6}>
          <Typography
            style={{
              textAlign: "start",
              marginLeft: "20px",
              fontWeight: "bold",
            }}
            sx={{ fontSize: 32 }}
          >
            Hii John....
          </Typography>
        </Grid>
        <Grid item xs={4}></Grid>
      </Grid>
      <Grid container spacing={4} style={{ marginTop: "100px" }}>
        <Grid item xs={3}></Grid>
        <Grid item xs={6}>
          <Card sx={{ minWidth: 575 }} style={{ backgroundColor: "#f5f5f5" }}>
          <Typography
                style={{
                  textAlign: "start",
                  marginLeft: "60px",
                }}
                sx={{ fontSize: 32 }}
              >
                Account Balance
              </Typography>
          <hr  />
            <Grid container spacing={4}>
              <Grid item xs={6}>
              <CardContent>
          
              
              <Typography
                style={{
                  textAlign: "start",
                  marginLeft: "50px",
                  marginTop: "30px",
                }}
                variant="body2"
              >
                Last Added Date:
              </Typography>
              <Typography
                style={{
                  textAlign: "start",
                  marginLeft: "50px",
                  marginTop: "30px",
                }}
                variant="body2"
              >
                Last Added Amount:
              </Typography>

              <Typography
                style={{
                  textAlign: "start",
                  marginLeft: "50px",
                  marginTop: "30px",
                }}
                variant="body2"
              >
                Account Balance:
              </Typography>
            </CardContent>
      
              </Grid>
              <Grid item xs={6}>
              <img src={busImage} style={{height:"200px"}} alt=""busImage/>
               </Grid>
               
            </Grid>
            

            <CardActions
              style={{ justifyContent: "center", marginBottom: "10px",marginTop:"50px" }}
            >
              <Button color="warning" variant="contained" size="large">
                Add Credits
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={3}></Grid>
      </Grid>
    </div>
  );
};

export default AccountBalancePage;
