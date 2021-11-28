import React from "react";
import data from "../../data/data.json";
import ProjectCard from "./ProjectCard";
const Projects = () => {
  console.log(data);
  return (
    <div>
      <h1>Project.js</h1>
      {data && data.map((item) => <ProjectCard item={item}></ProjectCard>)}
    </div>
  );
};

export default Projects;
