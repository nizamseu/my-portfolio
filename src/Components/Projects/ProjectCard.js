import { Grid, Container } from "@mui/material";
import { display } from "@mui/system";
import React from "react";

const ProjectCard = ({ item }) => {
  const { pic, author, description, title, short } = item;

  return (
    <Container
      sx={{
        display: { md: "flex" },
      }}
    >
      <Grid item xs={12} sm={12} md={7} sx={{ margin: "10px 0" }}>
        <img width="100%" height="100%" src={pic} alt="" />
      </Grid>

      <Grid
        sx={{
          backgroundColor: "#172A45",
          padding: "15px",
          margin: "40px 0",
          borderRadius: "5px",
          marginLeft: { md: "-30px" },
        }}
        item
        xs={12}
        sm={12}
        md={5}
      >
        <h1>{author}</h1>
        <p>{short}</p>
      </Grid>
    </Container>
  );
};

export default ProjectCard;
