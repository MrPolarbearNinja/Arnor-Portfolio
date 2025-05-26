import React from "react";
import "./ProjectCard.css";
import { Link } from "react-router-dom";

function ProjectCard({ id, title, shortDescription, link, images }) {
  return (
    <div className="project-card">
      <Link to={`/project/${id}`}>View More</Link>
      <div className="project-info">
        <h3>{title}</h3>
        <p>
          {shortDescription.split("\n").map((line, i) => (
            <span key={i}>
              {line}
              <br />
            </span>
          ))}
        </p>
        <a href={link} target="_blank" rel="noopener noreferrer">
          View Project →
        </a>
      </div>
      {images && <img src={images[0]} alt={title} className="project-image" />}
    </div>
  );
}

export default ProjectCard;
