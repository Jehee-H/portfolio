import { useState } from "react";
import { projects } from "../data/projectData";
import "../styles/projects.css";
import { useTranslation } from 'react-i18next';
import background_projects from "../assets/background-projects.svg";

type CategoryKey = "all" | "commission" | "uni-projects" | "personal-projects";

// Fallback-Übersetzungen
const fallbackTranslations = {
    "all": "Alle",
    "commission": "Auftragsarbeiten",
    "uni-projects": "Uni Projekte", 
    "personal-projects": "Private Projekte",
    "title": "Projekte | Showcase"
};

const Projects = () => {
    const [categoryFilter, setCategoryFilter] = useState<CategoryKey>("all");
    const { t } = useTranslation('projects'); 

    const categories: CategoryKey[] = ["all", "commission", "uni-projects", "personal-projects"];

    // Übersetzungs-Helfer mit Fallback
    const translate = (key: string): string => {
        const translation = t(key);
        return translation !== key ? translation : fallbackTranslations[key as keyof typeof fallbackTranslations] || key;
    };

    const filteredProjects =
        categoryFilter === "all"
            ? projects
            : projects.filter((project) => project.category === categoryFilter);

    return (
        <div className="projectsPage">
            <div className="projectsPage-header">
                <h2 className="projectsPage-title">{translate('title')}</h2>
                <div className="projectsPage-filters">
                    {categories.map((category) => (
                        <button
                            key={category}
                            className={`filter-btn ${categoryFilter === category ? "active" : ""}`}
                            onClick={() => setCategoryFilter(category)}
                        >
                            {translate(category)}
                        </button>
                    ))}
                </div>
            </div>

            <div className="projectsPage-container" style={{ backgroundImage: `url(${background_projects})`, backgroundSize: 'cover' }}>
                <div className="projectsPage-card-container">
                    {filteredProjects.map((project) => (
                        <a
                            className="projectsPage-box"
                            key={project.title}
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className="projectPage-title">
                                {project.title} - {project.program} <span>[{translate(project.category)}]</span>
                            </div>
                            <img src={project.preview} alt={project.title} />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;