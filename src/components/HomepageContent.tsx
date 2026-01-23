
import "../styles/homepageContent.css";
import { useTranslation } from 'react-i18next';

import Typo3Pic from "../assets/websitessc/Typo3-Medieninformatik.webp"

import KavakPartnerPic from "../assets/websitessc/KavaknPartner.webp"
import HiramekiinsightPic from "../assets/websitessc/hiramekiinsight.webp"
import MedimobilPic from "../assets/websitessc/medimobil.webp"
import { div } from "framer-motion/client";
import meAboutMe from "../assets/haesslichkeit.webp"

// oben in deiner Komponente:
const logos = [
  {
    name: "Angular",
    url: "https://angular.dev/assets/images/press-kit/angular_icon_gradient.gif"
  },
  {
    name: "React",
    url: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
  },
  {
    name: "SvelteKit",
    url: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg"
  },
  {
    name: "Shopify",
    url: "https://cdn.iconscout.com/icon/free/png-512/free-shopify-226579.png?f=webp&w=256"
  }
];


type webList = {
  title: string;
  url: string;
  program: string;
  desc: string;
  preview?: string;
};

const data: webList[] = [


  {
    title: 'Hirameki Insight – Shopify [Auftrag]',
    url: 'https://www.hiramekiinsight.com/',
    program: 'Shopify, HTML, CSS, JavaScript',
    desc: "Hirameki Insight ist eine englischsprachige Plattform...",
    preview: HiramekiinsightPic,
  },
  {
    title: 'THM Typo3 Projekt – Typo3 [Uni Projekt]',
    url: 'https://team-f.abija.de/',
    program: 'Typo3',
    desc: 'THM-Projekt – Einführung in TYPO3 zur praxisnahen CMS-Entwicklung und modernem Webdesign.',
    preview: Typo3Pic,
  },
  {
    title: 'Kavak & Partner – SvelteKit [Auftrag]',
    url: 'https://kavak-partner.de/',
    program: 'SvelteKit, HTML, CSS',
    desc: "",
    preview: KavakPartnerPic,
  }
];

const HomepageContent = () => {

    const { t } = useTranslation('');

  return (
    <div className="wrapper-content">
      <div className="homepageContent">

        <div className="d-content">
          <div className="aboutMe content " id="about">
            <div className="aboutMe-container">
              <h2 className="aboutMe-title">{t('aboutme-content.title')}</h2>
              <div className="aboutMe-text">
                <p className="aboutMe-description">
                  {t('aboutme-content.line1')}
                </p>
                <p className="aboutMe-description">
                  {t('aboutme-content.line2')}
                </p>
              </div>
            </div>
            <div className="aboutMe-image">
              <img src={meAboutMe} alt="Mein Bild" className="aboutMe-img" />
            </div>
          </div>
        </div>

        <div className="experience">
          <h2 className="experience-title">{t('experience.title')}</h2>
          <div className="exp-container">
            <div className="exp-text">
              <p className="experience-description">
                {t('experience.line1')}
              </p>
              <p className="experience-description">
                {t('experience.line2')}
              </p>
              <p className="experience-description">
                {t('experience.line3')}
              </p>
              <p>
                {t('experience.line4')}
              </p>
            </div>

            <div className="exp-logos">
              {logos.map((src, i) => (
                <div className="exp-logo-wrapper" key={i}>
                  <img src={src.url} alt="Logo" className="exp-logo" />
                  <h3 style={{ margin: 0 }}>{src.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>


        {/* <div className="black-line"></div> */}

        <div className="tools">
          <div className="tools-container">
            <h2 className="tools-title ">{t('tools-title')}</h2>
            <div className="tools-logos">
              Photoshop · Canva · Blender · Davinci Resolve · Ableton Live
            </div>
          </div>
        </div>
        {/* <div className="black-line"></div> */}


        <div className="projects">
          <div className="">
            <div className="projects-text">
              <h2 className="projects-title">{t('projects.title')}</h2>
              <a href="/projects" className="btn" >{t('projects.all')}</a>
            </div>

            <div className="projects-container">
              {/* Grid: Links zwei kleine Boxen, rechts eine große Box */}
              {data.map((project, index) => {
                if (index === 1) {
                  // Große Box rechts
                  return (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link project-box large"
                      key={project.title}
                    >

                      <div className="project-title">{project.title}</div>
                      <img src={project.preview} alt={project.title} />

                    </a>
                  );
                } else {
                  // Kleine Boxen links
                  return (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link project-box small"
                      key={project.title}
                    >

                      <div className="project-title">{project.title}</div>
                      <img src={project.preview} alt={project.title} />

                    </a>
                  );
                }
              })}
            </div>
          </div>
        </div>




      </div >
    </div>
  );
};

export default HomepageContent;
