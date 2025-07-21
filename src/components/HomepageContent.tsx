
import "../styles/homepageContent.css";

import Typo3Pic from "../assets/websitessc/Typo3-Medieninformatik.png"

import KfzgutachterPic from "../assets/websitessc/kfzgutachter.png"
import HiramekiinsightPic from "../assets/websitessc/hiramekiinsight.png"
import MedimobilPic from "../assets/websitessc/medimobil.png"

// oben in deiner Komponente:
const logos = [
  "https://upload.wikimedia.org/wikipedia/commons/0/07/Angular_Logo_SVG.svg",
  "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  "https://upload.wikimedia.org/wikipedia/commons/e/e7/Shopify_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/b/b8/Netlify_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",
  "https://upload.wikimedia.org/wikipedia/commons/9/9b/Svelte-kit-horizontal.svg",
  "https://www.vectorlogo.zone/logos/supabase/supabase-ar21.svg",
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
    title: 'Medimobil-Giessen',
    url: 'https://Medimobil-Giessen.de',
    program: 'Vue, TypeScript | Mobile First Design',
    desc: 'Eine Webseite für ein lokales Unternehmen.',
    preview: MedimobilPic,
  },
  {
    title: 'Hirameki Insight',
    url: 'https://www.hiramekiinsight.com/',
    program: 'Shopify, HTML, CSS, JavaScript',
    desc: "Hirameki Insight ist eine englischsprachige Plattform...",
    preview: HiramekiinsightPic,
  },
  // {
  //   title: 'Kavak & Partner',
  //   url: 'https://kavak-partner.netlify.app/',
  //   program: 'SvelteKit, HTML, CSS',
  //   desc: "",
  //   preview: KavaknPartnerPic,
  // },
  {
    title: 'Kfz Gutachtersozietät - Kavak',
    url: 'https://kfzgutachtersozietaet.de/',
    program: 'SvelteKit, HTML, CSS, Supabase',
    desc: "",
    preview: KfzgutachterPic,
  },
  {
    title: 'THM Typo3 Projekt',
    url: 'https://team-f.abija.de/',
    program: 'Typo3',
    desc: 'THM-Projekt – Einführung in TYPO3 zur praxisnahen CMS-Entwicklung und modernem Webdesign.',
    preview: Typo3Pic,
  },
];

const HomepageContent = () => {
  return (
    <div className="homepageContent">

      <div className="aboutMe content" id="about">
        <div className="aboutMe-image">
          <img src="https://placehold.co/350x420" alt="Mein Bild" className="aboutMe-img" />
        </div>
        <div className="aboutMe-container">

          <h2 className="aboutMe-title">Über mich</h2>
          <div className="aboutMe-text">
            <p className="aboutMe-description">
              Ich bin ein leidenschaftlicher Webentwickler mit einem Auge für Design und einem Herz für Code. Ich liebe es, kreative Lösungen zu finden und innovative Projekte umzusetzen.
            </p>
            <p className="aboutMe-description">
              In meiner Freizeit experimentiere ich gerne mit neuen Technologien und arbeite an persönlichen Projekten, um meine Fähigkeiten weiterzuentwickeln.
            </p>
          </div>
        </div>
      </div>

      <div className="experience">
        <h2 className="experience-title">Erfahrung</h2>
        <div className="experience-container">
          <p className="experience-description">
            Ich habe Erfahrung in der Frontend-Entwicklung (mit Angular, React und SvelteKit) und im Backend (z. B. mit Netlify, Shopify, Supabase und PostgreSQL). In diversen Projekten war ich sowohl für das Frontend als auch das Backend verantwortlich.
          </p>
          <p className="experience-description">
            Ich suche stets neue Herausforderungen, um meine Fähigkeiten weiter auszubauen.
          </p>
        </div>

        {/* Logo-Slider-Wrapper */}
        <div className="logo-slider-wrapper">
          <div className="logo-slider-track">
            <div className="logo-strip">
              {logos.map((src, i) => (
                <img key={i} src={src} alt="Logo" className="logo" />
              ))}
            </div>
            <div className="logo-strip">
              {logos.map((src, i) => (
                <img key={`copy-${i}`} src={src} alt="Logo" className="logo" />
              ))}
            </div>
          </div>
        </div>



      </div>



      <div className="projects">
        <div className="projects-text">
          <h2 className="projects-title">Projekte Showcase</h2>
          <a href="/projects" className="btn" >Alle Projekte</a>
        </div>

        <div className="projects-container">
          {data.map((project, index) => (
            <h3 className="">{project.title}
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card-horizontal"
                key={index}
              >
                <div className="project-img-wrapper">
                  <img
                    src={project.preview}
                    alt={`Preview von ${project.title}`}
                    className="project-img"
                  />
                  <div className="project-title-overlay">
                    {/* <h3 className="project-title">{project.title}</h3> */}
                  </div>

                  {/* Neue Infobox */}
                  <div className="project-info">
                    <h3>{project.title}</h3>
                    <p className="project-desc">{project.desc || 'Keine Beschreibung vorhanden.'}</p>
                    <p className="project-program">{project.program}</p>
                  </div>
                </div>
              </a>
            </h3>
          ))}
        </div>
      </div>

    </div >
  );
};

export default HomepageContent;
