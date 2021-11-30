import { Grid, Typography, IconButton } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useParams } from "react-router";
import "./projectCard.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import data from "../../data/data.json";
import AOS from "aos";
import "aos/dist/aos.css";
const ProjectDetails = () => {
  const { id } = useParams();
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 2000,
      easing: "ease",
    });
  }, []);
  const projectData = id && data && data.find((item) => item.id == id);
  const {
    technology,
    pic,
    author,
    liveSite,
    backend,
    frontend,
    title,
    details,
    img1,
    img2,
    img3,
  } = projectData;
  console.log(projectData);
  return (
    <Box sx={{ margin: "10px" }}>
      <h1 className="text-info" style={{ margin: "10px" }}>
        Project Details
      </h1>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={12} md={7} lg={7}>
          {/* full width image */}
          <Grid data-aos="zoom-in" item xs={12} sx={{ m: 1 }}>
            <img width="100%" src={pic} alt="" />
          </Grid>
          {/* half width image */}
          <Grid
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "column", md: "row" },
            }}
          >
            <Grid data-aos="fade-up" sx={{ m: 1 }}>
              <img width="100%" src={img1} alt="" />
            </Grid>
            <Grid data-aos="fade-down" sx={{ m: 1 }}>
              <img width="100%" src={img2} alt="" />
            </Grid>
          </Grid>
          {/* <Grid item xs={12} sx={{ m: 1 }}>
            <img width="100%" src={img1} alt="" />
          </Grid> */}
        </Grid>
        {/* detail contents */}
        <Grid item xs={12} sm={12} md={5} lg={5}>
          <p>
            <h1 data-aos="fade-down">{title}</h1> <xxsmall>by {author}</xxsmall>{" "}
          </p>

          <p data-aos="zoom-in" className="my-5">
            {details}
          </p>
          <h1 data-aos="zoom-in" className="text-info my-4">
            Uses Technology
          </h1>
          <Typography className="projectCard my-3">
            {technology &&
              technology.map((tech) => <p data-aos="zoom-in">{tech}</p>)}
          </Typography>
          <Typography>
            <IconButton>
              <a target="_blank" href={frontend}>
                <GitHubIcon data-aos="fade-down" />
              </a>
            </IconButton>
            <IconButton>
              <a target="_blank" href={liveSite}>
                <OpenInNewIcon data-aos="fade-up" />
              </a>
            </IconButton>
            <IconButton>
              <a target="_blank" href={backend}>
                <GitHubIcon data-aos="fade-down" sx={{ color: "#86F6A9" }} />
              </a>
            </IconButton>
          </Typography>

          {/* <Grid item xs={12} sx={{ m: 1 }}>
            <img width="100%" src={img1} alt="" />
          </Grid> */}
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProjectDetails;
