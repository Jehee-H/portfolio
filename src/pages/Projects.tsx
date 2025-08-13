import { useState } from "react";
import { Link } from "react-router-dom";
import { projects } from "../data/projectData";
import { motion } from "framer-motion";
import "../styles/projects.css";

type CategoryKey = "Alle" | "Auftrag" | "Uni-Projekt" | "Eigene Projekt";

const Projects = () => {
    const [categoryFilter, setCategoryFilter] = useState<CategoryKey>("Alle");

    const categoryLabels: Record<CategoryKey, string> = {
        "Alle": " Alle",
        "Auftrag": " Auftrag",
        "Uni-Projekt": "Uni-Projekte",
        "Eigene Projekt": "Eigene Projekt",
    };

    const categories: CategoryKey[] = ["Alle", "Auftrag", "Uni-Projekt", "Eigene Projekt"];

    const filteredProjects =
        categoryFilter === "Alle"
            ? projects
            : projects.filter((project) => project.category === categoryFilter);

    return (
        <div className="projectsPage">
            <div className="projectsPage-header">
                <h2 className="projectsPage-title">Projekte | Showcase</h2>
                <div className="projectsPage-filters">
                    {categories.map((category) => (
                        <button
                            key={category}
                            className={`filter-btn ${categoryFilter === category ? "active" : ""}`}
                            onClick={() => setCategoryFilter(category)}
                        >
                            {categoryLabels[category]}
                        </button>
                    ))}

                </div>
            </div>

            <div className="projectsPage-container">
                <div className="projectsPage-card-container">
                    {filteredProjects.map((project) => (
                        <div className="projectsPage-box" key={project.title}>
                            <div className="projectPage-title">{project.title} - {project.program} <span>[{project.category}]</span> </div>
                            <img src={project.preview} alt={project.title} />
                        </div>

                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
