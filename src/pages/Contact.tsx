import { useParams } from "react-router-dom";
import { projects } from "../data/projectData";
import { useTranslation } from 'react-i18next';
import React from "react";
import "../styles/contact.css";

import stacked_waves from "../assets/stacked-waves-haikei.svg"

const Contact = () => {

    const { t } = useTranslation('header'); // Namespace ggf. anpassen!

    return (
        <div className="contact-container" >
            <div className="contact-content">
                <h2 className="">{t('contact')}</h2>
                <p className="contact-description">.</p>

                <div className="contact-links">
                    <p className="contact-description">E-Mail: jeheehan.contact@gmail.com</p>
                    <a className="contact-description" href="https://www.linkedin.com/in/jehee-han-673a382b8/">LinkedIn</a>
                    <a className="contact-description" href="https://www.xing.com/profile/Jehee_Han">Xing</a>
                    <a className="contact-description" href="https://github.com/Jehee-H">Git-Hub</a>
                </div>
            </div>


        </div>
    );
};

export default Contact;
