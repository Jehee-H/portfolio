import { useParams } from "react-router-dom";
import { projects } from "../data/projectData";

const ProjectDetail = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return <div style={{ padding: "2rem" }}><h2>Projekt nicht gefunden</h2></div>;
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h1>{project.title}</h1>
      <p>{project.desc}</p>
      {project.preview && (
        <img src={project.preview} alt={project.title} style={{ maxWidth: "600px", marginTop: "1rem" }} />
      )}
    </div>
  );
};

export default ProjectDetail;
