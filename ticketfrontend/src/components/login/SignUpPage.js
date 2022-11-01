import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import loginImage from "../../Assests/login.png";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import axios from "axios";
const SignUpPage = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [amount, setAmount] = useState(0);
  const [cvc, setCVC] = useState("");
  const [expDate, setExpDate] = useState("");

  const handleAddCredits = () => {
    axios
      .post("http://localhost:5000/ts/credit", {
        amount: amount,
        creditCard: cardNumber,
        cvc: cvc,
        expDate: expDate,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Grid container spacing={4} style={{ marginTop: "100px" }}>
        <Grid item xs={3}></Grid>
        <Grid item xs={6}>
          <Card sx={{ minWidth: 575 }} style={{ backgroundColor: "#f5f5f5" }}>
            <Typography
              style={{
                textAlign: "center",
                marginLeft: "60px",
              }}
              sx={{ fontSize: 32 }}
            >
              Sign Up
            </Typography>
            <hr />
            <Grid container spacing={4}>
              <Grid item xs={6}>
                <img
                  src={loginImage}
                  style={{
                    height: "400px",
                    marginTop: "70px",
                    marginLeft: "30px",
                    marginBottom: "30px",
                  }}
                  alt="addCredits"
                  busImage
                />
              </Grid>
              <Grid item xs={6}>
                <CardContent>
                  <TextField
                    style={{
                    
                      textAlign: "start",
                      marginTop: "10px",
                    }}
                    fullWidth
                    id="outlined-basic"
                    label="User Name"
                    variant="outlined"
                    onChange={(e) => {
                      setAmount(parseInt(e.target.value));
                    }}
                  />
                  <TextField
                    style={{
                     
                      textAlign: "start",
                      marginTop: "10px",
                    }}
                    fullWidth
                    id="outlined-basic"
                    label="Password"
                    variant="outlined"
                    onChange={(e) => {
                      setAmount(parseInt(e.target.value));
                    }}
                  />
                  <TextField
                    style={{
                     
                      textAlign: "start",
                      marginTop: "10px",
                    }}
                    fullWidth
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    onChange={(e) => {
                      setAmount(parseInt(e.target.value));
                    }}
                  />

                  <TextField
                    style={{
                     
                      textAlign: "start",
                      marginTop: "10px",
                    }}
                    fullWidth
                    id="outlined-basic"
                    label="address"
                    variant="outlined"
                    onChange={(e) => {
                      setCardNumber(e.target.value);
                    }}
                  />
                  <TextField
                    style={{
                     
                      textAlign: "start",
                      marginTop: "10px",
                    }}
                    fullWidth
                    id="outlined-basic"
                    label="NIC"
                    variant="outlined"
                    onChange={(e) => {
                      setCardNumber(e.target.value);
                    }}
                  />

                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Role</InputLabel>
                    <Select
                     style={{
                    
                        textAlign: "start",
                        marginTop: "10px",
                      }}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      // value={age}
                      label="Role"
                      // onChange={handleChange}
                    >
                      <MenuItem value={10}>Customer</MenuItem>
                      <MenuItem value={20}>Driver</MenuItem>
                    </Select>
                  </FormControl>
                  <TextField
                    style={{
                
                      textAlign: "start",
                      marginTop: "10px",
                    }}
                    id="outlined-basic"
                    label="Card Type"
                    variant="outlined"
                    fullWidth
                    onChange={(e) => {
                      setCardNumber(e.target.value);
                    }}
                  />
                  <br />
                  <div style={{ marginTop: "30px", marginLeft: "40px" }}>
                    <a href="#">Already a registered user? Login!</a>
                  </div>

                  <CardActions
                    style={{
                      justifyContent: "center",
                      marginBottom: "10px",
                      marginTop: "30px",
                      marginRight: "100px",
                    }}
                  >
                    <Button
                      color="warning"
                      variant="contained"
                      size="large"
                      onClick={handleAddCredits}
                      fullWidth
                    >
                      Sign Up
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

export default SignUpPage;
