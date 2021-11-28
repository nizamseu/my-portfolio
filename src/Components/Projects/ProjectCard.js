import React from "react";

const ProjectCard = ({ item }) => {
  const { pic, author, description, title, short } = item;

  return (
    <div>
      <img src={pic} alt="" />
      <h1>{author}</h1>
      <p>{short}</p>
    </div>
  );
};

export default ProjectCard;
