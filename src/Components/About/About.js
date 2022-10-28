import { Grid, Container, Typography, IconButton } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import profile from "../../data/nizam.jpg";
import "./About.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
const About = () => {
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item sx={12} sm={12} md={6} lg={6} xl={6}>
          <h1 className="mt-5 text-info">About ME</h1>
          <hr />
          <Box>
            <Typography variant="h1">Nizam Uddin</Typography>
            <p className="text-danger">Frontend Web Developer</p>
          </Box>
          <Box>
            <Typography>
              A self-motivated and enthusiastic web developer with a deep
              interest in JavaScript. To work in the Software industry with
              modern web technologies of different local & multinational
              Software/ IT agencies of Bangladesh and grow rapidly with
              increasing responsibilities.{" "}
            </Typography>
          </Box>
          <Typography sx={{ my: 3 }}>
            <h1 className="text-info my-3">Important Link</h1>
            <hr />
            <IconButton>
              <a target="_blank" href="https://github.com/nizamseu">
                <GitHubIcon />
              </a>
            </IconButton>
            <IconButton>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/nizam-uddin-a153271a0/"
              >
                <LinkedInIcon />
              </a>
            </IconButton>
            <IconButton>
              <a
                target="_blank"
                href="https://www.facebook.com/nizambd.official/"
              >
                <FacebookIcon />
              </a>
            </IconButton>
            <IconButton>
              <a target="_blank" href="https://twitter.com/nizamcse_seu">
                <TwitterIcon />
              </a>
            </IconButton>
          </Typography>
          <Box sx={{ my: 3 }}>
            <h1 className="text-info my-3">Skills</h1>
            <hr />
            <Box sx={{ my: 3 }}>
              <h3>Expertise</h3>
              <Typography className="about">
                <p>JavaScript</p>
                <p>ES6</p>
                <p>ReactJS</p>
                <p>NextJS</p>
                <p>REST API</p>
                <p>Tailwind CSS</p>
                <p>HTML</p>
                <p>CSS</p>
                <p>Socket.io</p>
                <p>PWA</p>
                <p>Firebase Authentication</p>
              </Typography>
            </Box>
            <Box sx={{ my: 3 }}>
              <h3>Comfortable</h3>
              <Typography className="about">
                <p>Node.js</p>
                <p>Express.js</p>
                <p>MongoDB</p>
                <p>JSON</p>
                <p>SASS</p>
                <p>React Bootstrap</p>
                <p>Material UI</p>
              </Typography>
            </Box>

            <Box sx={{ my: 3 }}>
              <h3>Familiar</h3>
              <Typography className="about">
                <p>Redux.js</p>
                <p>TypeScript</p>
                <p>SQL</p>
                <p>Wordpress</p>
                <p>Tailwind CSS</p>
                <p>SASS</p>
              </Typography>
            </Box>
            <h3>Tools</h3>
            <Typography className="about">
              <p>Git</p>
              <p>Create React App</p>
              <p>NPM</p>
              <p>VS Code</p>
              <p>Chrome Dev tool CSS</p>
              <p>Firebase</p>
              <p>Netlify</p>
              <p>Heroku</p>
            </Typography>
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
              src={profile}
              alt=""
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
