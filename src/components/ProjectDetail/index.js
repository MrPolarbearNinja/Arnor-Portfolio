import { useParams } from "react-router-dom";
import projects from "../../projects";
import style from "./style.css";

function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) return <p>Project not found.</p>;

  return (
    <div className="project-detail" style={style}>
      <div className="project-detail-container">
        <h2 className="project-title">{project.title}</h2>

        <div className="project-main-content">
          <div className="project-text">
            {project.sections.map((section, index) => (
              <div key={index} className="project-section">
                <h3>{section.title}</h3>
                <p>
                  {section.content.split("\n").map((line, i) => (
                    <span key={i}>
                      {line}
                      <br />
                    </span>
                  ))}
                </p>
              </div>
            ))}
          </div>

          <div className="project-images">
            {project.images.map((src, index) => (
              <img key={index} src={src} alt={`Screenshot ${index + 1}`} />
            ))}
          </div>
        </div>

        {project.video && (
          <div className="project-video">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${project.video}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectDetail;
