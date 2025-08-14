import KavaknPartnerPic from "../assets/websitessc/KavaknPartner.png";
import Typo3Pic from "../assets/websitessc/Typo3-Medieninformatik.png";
import FlexboxDefensePic from "../assets/websitessc/Flexbox-Defense.png";
import KfzgutachterPic from "../assets/websitessc/kfzgutachter.png";
import HiramekiinsightPic from "../assets/websitessc/hiramekiinsight.png";
import MedimobilPic from "../assets/websitessc/medimobil.png";
import JeheeSite from "../assets/websitessc/JeheeSite.png";




export const projects = [
  {
    id: "medimobil",
    title: "Medimobil-Giessen",
    desc: "Eine Webseite für ein lokales Pflegeunternehmen.",
    preview: MedimobilPic,
    program: "Vue, TypeScript | Mobile First Design",
    url: "https://Medimobil-Giessen.de",
    category: "Auftrag",
  },
  {
    id: "hiramekiinsight",
    title: "Hirameki Insight",
    desc: "Hirameki Insight ist eine englischsprachige Plattform für KI-gestützte Marktanalysen.",
    preview: HiramekiinsightPic,
    program: "Shopify",
    url: "https://www.hiramekiinsight.com/",
    category: "Auftrag",
  },
  {
    id: "kavak-partner",
    title: "Kavak & Partner",
    desc: "Eine Unternehmensseite entwickelt mit SvelteKit.",
    preview: KavaknPartnerPic,
    program: "SvelteKit",
    url: "https://kavak-partner.netlify.app/",
    category: "Auftrag",
  },
  {
    id: "kfzgutachter",
    title: "Kavak Gutachtersozietät",
    desc: "Business-Webseite für KFZ-Gutachter mit Supabase Backend.",
    preview: KfzgutachterPic,
    program: "SvelteKit, Supabase",
    url: "https://kfzgutachtersozietaet.de/",
    category: "Auftrag",
  },
  {
    id: "flexbox-defense",
    title: "Flexbox Defense",
    desc: "Ein Mini-Spiel zur Visualisierung von Flexbox-Layouts.",
    preview: FlexboxDefensePic,
    program: "HTML, CSS, JavaScript, GSAP",
    url: "https://d4ni3l2402.github.io/FlexboxDefense/index.html",
    category: "Uni-Projekt",
  },
  {
    id: "typo3-projekt",
    title: "THM Typo3 Projekt",
    desc: "Eine Teamprojekt-Webseite im Rahmen meines Studiums.",
    preview: Typo3Pic,
    program: "Typo3",
    url: "https://team-f.abija.de/",
    category: "Uni-Projekt",
  },
    {
    id: "portolio-page",
    title: "Jehee Han Portfolio",
    desc: "Meine Portfolio Seite.",
    preview: JeheeSite,
    program: "React",
    url: "https://jeheehan.com",
    category: "Eigene Projekt",
  },
];
