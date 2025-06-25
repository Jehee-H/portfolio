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
                <h2 className="projectsPage-title">Projekte Showcase</h2>
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
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3 }}
                            className="projectsPage-card"
                        >
                            <Link to={`/projects/${project.id}`}>
                                <div className="projectsPage-img-wrapper">
                                    <img
                                        src={project.preview}
                                        alt={`Preview von ${project.title}`}
                                        className="projectsPage-img"
                                    />
                                    <div className="projectsPage-title-overlay">
                                        <h3 className="projectsPage-title">{project.title}</h3>
                                    </div>
                                    <div className="projectsPage-info">
                                        <p className="projectsPage-desc">
                                            {project.desc || "Keine Beschreibung vorhanden."}
                                        </p>
                                        <p className="projectsPage-program">{project.program}</p>
                                        <p className="projectsPage-category">{project.category}</p>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
