import Sidebar from "../sideBar";
import style from "./style.css";
import projects from "../../projects";
import ProjectCard from "../ProjectCard";

function Home() {
  return (
    <div className="App" style={style}>
      <div className="main-layout">
        <Sidebar />

        <main className="main-content">
          <section id="projects">
            <h2>Projects</h2>
            {projects.map((project, index) => (
              <ProjectCard
                id={project.id}
                title={project.title}
                shortDescription={project.shortDescription}
                link={project.link}
                images={project.images}
              />
            ))}
          </section>

          <section id="gallery">
            <h2>Photo Gallery</h2>
            <p>Images here...</p>
          </section>
        </main>
      </div>

      <footer>
        <p>&copy; {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}

export default Home;
