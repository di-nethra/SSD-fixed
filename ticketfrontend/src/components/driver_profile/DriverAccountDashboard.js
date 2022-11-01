import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import profileIcon from "../../Assests/userProfileImage.png";
import { Link } from 'react-router-dom';



const DriverAccountDashboard = (props) => {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  DriverAccountDashboard.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  
  export default function DriverAccountTabs() {
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

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
              Routes
            </Button>
  
            <Button color="warning" variant="contained" size="large">
              Time Table
            </Button>
          </Grid>
        </Grid>
        <Grid container spacing={4} style={{ marginTop: "100px" }}>
          <Grid item xs={1}></Grid>
          <Grid style={{ backgroundColor: "#f5f5f5",marginTop:"30px"}} item xs={6}>
          <Box  sx={{ width: '100%' }} >
          <Box  sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} >
              <Tab label="Account" {...a11yProps(0)} />
              <Tab label="Payment" {...a11yProps(1)} />
            </Tabs>
          </Box>
          <DriverAccountDashboard value={value} index={0}>
          <Grid item xs={6} style={{marginLeft:"100px"}}>
            <Card sx={{ minWidth: 575 }} >
              <CardContent>
                <Typography sx={{ fontSize: 32 }}>Account</Typography>
                <hr style={{ marginLeft: "60px", marginRight: "60px" }} />
                <Typography
                  style={{
                    textAlign: "start",
                    marginLeft: "50px",
                    marginTop: "30px",
                  }}
                  variant="body2"
                >
                  Employee ID:
                </Typography>
                <Typography
                  style={{
                    textAlign: "start",
                    marginLeft: "50px",
                    marginTop: "30px",
                  }}
                  variant="body2"
                >
                  Employee Name:
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
                 Edit Details
                </Button>
              </CardActions>
            </Card>
          </Grid>
          </DriverAccountDashboard>
          <DriverAccountDashboard value={value} index={1}>
          <Card sx={{ minWidth: 575 }} >
              <CardContent>
                <Typography sx={{ fontSize: 32 }}>Payment</Typography>
                <hr style={{ marginLeft: "60px", marginRight: "60px" }} />
                <Typography
                  style={{
                    textAlign: "start",
                    marginLeft: "50px",
                    marginTop: "30px",
                  }}
                  variant="body2"
                >
                  Last Payment Date:
                </Typography>
                <Typography
                  style={{
                    textAlign: "start",
                    marginLeft: "50px",
                    marginTop: "30px",
                  }}
                  variant="body2"
                >
                  Monthly Salary:
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
                <Typography
                  style={{
                    textAlign: "start",
                    marginLeft: "50px",
                    marginTop: "30px",
                  }}
                  variant="body2"
                >
                  OT Bonus in Month:
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
                 <div style={{display:"flex",marginLeft:"260px"}}>
                 <CardActions
                style={{ justifyContent: "center", marginBottom: "10px" }}
              >
                 
                <Button color="warning" variant="contained" size="large">
                Request OT
                </Button>
              </CardActions>
              <CardActions
                style={{ justifyContent: "center", marginBottom: "10px" }}
              >
                <Button color="success" variant="contained" size="large">
                History
                </Button>
              </CardActions>
                 </div>
           
            </Card>
          </DriverAccountDashboard>
 
        </Box>
          </Grid>
          <Grid item xs={4}>
            <Card sx={{ minWidth: 475 }} style={{ backgroundColor: "#f5f5f5" }}>
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
                style={{ justifyContent: "center", marginBottom: "95px" }}
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
    }