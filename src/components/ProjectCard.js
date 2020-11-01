import React from "react";

const ProjectCard = (props) => {
  const { imgSrc, description, projectName } = props;

  return (
    <div>
      <img alt={projectName} src={imgSrc} />
      <p>{projectName}</p>
      <p>{description}</p>
    </div>
  );
};

export default ProjectCard;
