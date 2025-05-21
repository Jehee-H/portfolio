
import "../styles/homepageContent.css";
import KavaknPartnerPic from "../assets/websitessc/KavaknPartner.png"
import Typo3Pic from "../assets/websitessc/Typo3-Medieninformatik.png"
import FlexboxDefensePic from "../assets/websitessc/Flexbox-Defense.png"
import KfzgutachterPic from "../assets/websitessc/kfzgutachter.png"
import HiramekiinsightPic from "../assets/websitessc/hiramekiinsight.png"
import MedimobilPic from "../assets/websitessc/medimobil.png"

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
  {
    title: 'Kavak & Partner',
    url: 'https://kavak-partner.netlify.app/',
    program: 'SvelteKit, HTML, CSS',
    desc: "",
    preview: KavaknPartnerPic,
  },
  {
    title: 'Kfz Gutachtersozietät - Kavak',
    url: 'https://kfzgutachtersozietaet.de/',
    program: 'SvelteKit, HTML, CSS, Supabase',
    desc: "",
    preview: KfzgutachterPic,
  },
  {
    title: 'Flexbox Defense',
    url: 'https://d4ni3l2402.github.io/FlexboxDefense/index.html',
    program: 'HTML, CSS, JavaScript, GSAP',
    desc: 'Ein Spiel, um Flexbox zu lernen.',
    preview: FlexboxDefensePic,
  },
  {
    title: 'THM Typo3 Projekt',
    url: 'https://team-f.abija.de/',
    program: 'Typo3',
    desc: 'Mein Portfolio.',
    preview: Typo3Pic,
  },
];

const HomepageContent = () => {
  return (
    <div className="homepageContent">
      <div className="projects">
        <div className="projects-text">
          <h2 className="projects-title">Projekte Showcase</h2>
          <a href="" className="btn" >Alle Projekte</a>
        </div>

        <div className="projects-container">
          {data.map((project, index) => (
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
                  <h3 className="project-title">{project.title}</h3>
                </div>

                {/* Neue Infobox */}
                <div className="project-info">
                  <p className="project-desc">{project.desc || 'Keine Beschreibung vorhanden.'}</p>
                  <p className="project-program">{project.program}</p>
                </div>
              </div>
            </a>

          ))}
        </div>
      </div>
      <div className="aboutMe content">
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
            Ich habe Erfahrung in der Entwicklung von Webanwendungen mit modernen Technologien wie React, Node.js und MongoDB. Ich habe an verschiedenen Projekten gearbeitet, die sowohl Frontend- als auch Backend-Entwicklung umfassen.
          </p>
          <p className="experience-description">
            Ich bin immer auf der Suche nach neuen Herausforderungen und Möglichkeiten, meine Fähigkeiten zu erweitern.
          </p>
        </div>
      </div>
    </div >
  );
};

export default HomepageContent;
