import { motion } from "framer-motion";
// import bgImg from "../assets/placeholder.jpg";
// import pbImg from "../assets/me.png";
import "../styles/home.css";
import HomepageContent from "../components/HomepageContent.tsx";
import background from "../assets/background.mp4";



const Home = () => {
  return (
    <div className="home-container">
      <div className="wrapper">
        {/* Bild als normales <img> */}
        {/* <img src={bgImg} className="bgImg" alt="Hintergrund" /> */}
        <video
          className="bgImg video-container"
          src={background}
          autoPlay
          loop
          muted
          playsInline
        ></video>
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
              Hallo, ich bin Jehee – Webentwickler mit einer Leidenschaft für innovative, nutzerzentrierte Lösungen.
            </p>
            <p className="email">
              jeheehan.contact@gmail.com
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
            {/* <img src={pbImg} alt="Profilbild" className="profile-image" /> */}
          </motion.div>
        </motion.div>


      </div>
      <HomepageContent />
    </div>
  );
};

export default Home;