import { useParams } from "react-router-dom";
import { projects } from "../data/projectData";
import { useTranslation } from 'react-i18next';
import React from "react";
import "../styles/links.css";

import stacked_waves from "../assets/stacked-waves-haikei.svg"

const Links = () => {

    return (
        <div className="links-container" >
            <div className="links-content">
                <h2 className="">Links</h2>
                <p className="links-description">Hier findest du eine Sammlung von nützlichen Links zu meinen Profilen und Projekten.</p>
            </div>


        </div>
    );
};

export default Links;
