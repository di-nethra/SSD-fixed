import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Label } from "@material-ui/icons";
import profileIcon from "../../Assests/userProfileImage.png";
import { fontWeight } from "@mui/system";
const UserAccountDashboard = () => {
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
        <Grid item xs={4}>
          <Button
            color="warning"
            variant="contained"
            size="large"
            style={{ marginRight: "15px" }}
          >
            QR Code
          </Button>

          <Button color="warning" variant="contained" size="large">
            Account Balance
          </Button>
        </Grid>
      </Grid>
      <Grid container spacing={4} style={{ marginTop: "100px" }}>
        <Grid item xs={1}></Grid>
        <Grid item xs={6}>
          <Card sx={{ minWidth: 575 }} style={{backgroundColor:"#f5f5f5"}}>
            <CardContent>
              <Typography sx={{ fontSize: 32 }}>Profile</Typography>
              <hr style={{ marginLeft: "60px", marginRight: "60px" }} />
              <Typography
                style={{
                  textAlign: "start",
                  marginLeft: "50px",
                  marginTop: "30px",
                }}
                variant="body2"
              >
                User Name:
              </Typography>
              <Typography
                style={{
                  textAlign: "start",
                  marginLeft: "50px",
                  marginTop: "30px",
                }}
                variant="body2"
              >
                Address:
              </Typography>
              <Typography
                style={{
                  textAlign: "start",
                  marginLeft: "50px",
                  marginTop: "30px",
                }}
                variant="body2"
              >
                Mobile Number:
              </Typography>
              <Typography
                style={{
                  textAlign: "start",
                  marginLeft: "50px",
                  marginTop: "30px",
                }}
                variant="body2"
              >
                NIC:
              </Typography>
              <Typography
                style={{
                  textAlign: "start",
                  marginLeft: "50px",
                  marginTop: "30px",
                }}
                variant="body2"
              >
                Card Type:
              </Typography>

              <Typography
                style={{
                  textAlign: "start",
                  marginLeft: "50px",
                  marginBottom: "35px",
                  marginTop: "20px",
                }}
                variant="body2"
              />
            </CardContent>

            <CardActions
              style={{ justifyContent: "center", marginBottom: "10px" }}
            >
              <Button color="warning" variant="contained" size="large">
                Change Credit Card Details
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card sx={{ minWidth: 475 }} style={{backgroundColor:"#f5f5f5"}}>
            <CardContent>
              <img
                src={profileIcon}
                alt="profileIcon"
                style={{ width: "150px" }}
              />
              <Typography sx={{ fontSize: 32 }}>
                <hr style={{ marginLeft: "60px", marginRight: "60px" }} />
                John Smith
              </Typography>
              <Typography style={{ marginTop: "20px" }} variant="body2">
                johnsmith@gmail.com
              </Typography>
            </CardContent>

            <CardActions style={{ justifyContent: "center" }}>
              <Button color="error" variant="contained" size="large">
                Edit Profile
              </Button>
            </CardActions>
            <CardActions
              style={{ justifyContent: "center", marginBottom: "20px" }}
            >
              <Button color="warning" variant="contained" size="large">
                Delete Profile
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default UserAccountDashboard;
