import { Grid, Container, Typography, IconButton } from "@mui/material";
import { display, typography } from "@mui/system";
import React from "react";
import "./projectCard.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { Link } from "react-router-dom";
const ProjectCard = ({ item }) => {
  const {
    technology,
    pic,
    author,
    liveSite,
    backend,
    frontend,
    title,
    details,
  } = item;

  return (
    <Container
      sx={{
        display: { md: "flex" },
      }}
    >
      <Grid item xs={12} sm={12} md={7} sx={{ margin: "10px 0" }}>
        <img width="100%" height="90%" src={pic} alt="" />
      </Grid>

      <Grid
        sx={{
          backgroundColor: "#172A45",
          padding: "15px",
          margin: "70px 0",
          borderRadius: "5px",
          marginLeft: { md: "-30px" },
        }}
        item
        xs={12}
        sm={12}
        md={5}
      >
        <h1>{title}</h1>
        <p>{details.slice(0, 150)}</p>
        <Typography className="projectCard">
          {technology && technology.map((tech) => <p>{tech}</p>)}
          {/* <p>React.js</p>
          <p>Node.js</p>
          <p>Express.js</p>
          <p>Material UI</p>
          <p>Bootstrap4</p>
          <p>Firebase</p> */}
        </Typography>
        <Typography>
          <IconButton>
            <a target="_blank" href={frontend}>
              <GitHubIcon />
            </a>
          </IconButton>
          <IconButton>
            <a target="_blank" href={liveSite}>
              <OpenInNewIcon />
            </a>
          </IconButton>
        </Typography>
      </Grid>
    </Container>
  );
};

export default ProjectCard;
