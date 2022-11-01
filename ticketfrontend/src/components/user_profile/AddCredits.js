import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import paymentImage from "../../Assests/payment.png";
import { InputLabel, MenuItem, Select, TextField } from "@mui/material";
const AddCredits = () => {
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
              Add Credits
            </Typography>
            <hr />
            <Grid container spacing={4}>
              <Grid item xs={6}>
                <img
                  src={paymentImage}
                  style={{ height: "200px", marginTop: "20px" }}
                  alt="addCredits"
                  busImage
                />
                   <CardActions
              style={{
                justifyContent: "center",
                marginBottom: "10px",
                marginTop: "50px",
              }}
            >
              <Button color="warning" variant="contained" size="large">
               Edit Card Details
              </Button>
            </CardActions>
              </Grid>
              <Grid item xs={6}>
                <CardContent>
                  <div style={{display:"flex"}}>
                 
                    <TextField
                      style={{
                          marginLeft:"45px",
                        textAlign: "start",
                      }}
                      id="outlined-basic"
                      label="Amount"
                      variant="outlined"
                    />
                  </div>

                  <Typography
                    style={{
                      textAlign: "start",
                      marginLeft: "50px",
                      marginTop: "30px",
                    }}
                    variant="body2"
                  >
                    Credit Card:
                  </Typography>
                  <Typography
                    style={{
                      textAlign: "start",
                      marginLeft: "50px",
                      marginTop: "30px",
                    }}
                    variant="body2"
                  >
                    CVC:
                  </Typography>
                  <Typography
                    style={{
                      textAlign: "start",
                      marginLeft: "50px",
                      marginTop: "30px",
                    }}
                    variant="body2"
                  >
                    Exp Date:
                  </Typography>
                  <CardActions
              style={{
                justifyContent: "center",
                marginBottom: "10px",
                marginTop: "50px",
              }}
            >
              <Button color="warning" variant="contained" size="large">
                Add Credits
              </Button>
            </CardActions>
                </CardContent>
              </Grid>
            </Grid>

       
          </Card>
        </Grid>
        <Grid item xs={3}></Grid>
      </Grid>
    </div>
  );
};

export default AddCredits;
