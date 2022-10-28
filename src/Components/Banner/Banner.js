import { Grid, Box, Container, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import React from "react";
import nizam from "../../data/nizam.jpg";
import Typical from "react-typical";
import "./Banner.css";
import { useNavigate } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import resume from "../../data/Nizam Uddin React Frontend Developer.pdf";

// https://i.ibb.co/gryx9ct/1.png
// https://i.ibb.co/Q9rngMG/2.png
// https://i.ibb.co/fpZMDL5/3.png
// https://i.ibb.co/0DKfGxk/4.png
// https://i.ibb.co/NZNQxDP/5.png
//https://i.ibb.co/Vgrckzq/New-Project.png
const Banner = () => {
  const navigate = useNavigate();
  const steps = [
    "Nizam Uddin 👋",
    3000,
    "ReactJS Developer",
    3000,
    "NextJS Developer",
    3000,
    "Web Developer👌",
    3000,
    "Frontend Developer",
    4000,
  ];
  return (
    <Container>
      <Grid
        container
        spacing={3}
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <Typography sx={{ color: "white", fontSize: "20px" }}>
            Hello, I'm{" "}
          </Typography>

          <Typical
            steps={steps}
            loop={Infinity}
            wrapper="p"
            className="typical"
          />
          {/* <Typography component="div" sx={{ display: "flex", my: 3 }}>
            <li style={{ marginRight: "20px" }}>React Developer</li>
            <li style={{ marginLeft: "20px" }}>Programmer</li>
          </Typography> */}
          <Typography component="p" sx={{ textAlign: "justify" }}>
            A self-motivated and enthusiastic web developer with a deep interest
            in JavaScript. To work in the Software industry with modern web
            technologies of different local & multinational Software/ IT
            agencies of Bangladesh and grow rapidly with increasing
            responsibilities
          </Typography>
          <Box
            sx={{
              my: 3,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: { xs: "column", sm: "row" },
            }}
          >
            <Button sx={{ m: 2, p: 0 }} variant="contained" color="error">
              <Nav.Link
                style={{
                  textDecoration: "none",
                  color: "white",
                }}
                target="_blank"
                href={
                  "https://drive.google.com/file/d/1-fMfsqR89PrXKEhK9GM-WiPTdxraisnc/view?usp=sharing"
                }
              >
                Download Resume
              </Nav.Link>
            </Button>
            <Button
              sx={{ m: 1, p: 1 }}
              variant="contained"
              color="error"
              onClick={() => navigate("/contact")}
            >
              Touch In Me
            </Button>
          </Box>
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "100px",
            }}
          >
            <img
              width="50%"
              style={{ borderRadius: "50%" }}
              src={nizam}
              alt=""
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Banner;
