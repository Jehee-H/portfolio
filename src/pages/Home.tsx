import { motion } from "framer-motion";
// import bgImg from "../assets/placeholder.jpg";
import pbImg from "../assets/me.png";
import "../styles/home.css";
import HomepageContent from "../components/HomepageContent.tsx";



const Home = () => {
  return (
    <div className="home-container">
      <div className="wrapper">
        {/* Bild als normales <img> */}
        {/* <img src={bgImg} className="bgImg" alt="Hintergrund" /> */}
        {/* <div className="bgImg"></div> */}

        {/* Motion-Div *über* dem Bild */}
        <motion.div
          className="container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Text-Container (erscheint SOFORT) */}
          <motion.div
            className="text-container"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0 }} // Kein Delay
          >
            <h1 className="title">Willkommen zu meinem Portfolio!</h1>
            <p className="description">
              Hi, ich bin Jehee und bin ein Webdeveloper mit einer Leidenschaft für kreative Lösungen.
            </p>
          </motion.div>

          {/* Profile-Container (erscheint später) */}
          <motion.div
            className="profile-container"
            initial={{
              opacity: 0,
              y: 50,
              rotate: 45 // Rotation im Initialzustand
            }}
            animate={{
              opacity: 1,
              y: 0,
              rotate: 45 // Rotation bleibt erhalten
            }}
            transition={{
              duration: 0.75,
              delay: 0.5
            }}
          >
            <img src={pbImg} alt="Profilbild" className="profile-image" />
          </motion.div>
        </motion.div>

      </div>
      <HomepageContent />
    </div>
  );
};

export default Home;