import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import SkillCard from "./SkillCard";

const Skills = () => {
  return (
    <div>
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
      <SkillCard />
    </div>
  );
};

export default Skills;
