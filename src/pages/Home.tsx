
// import bgImg from "../assets/placeholder.jpg";
// import pbImg from "../assets/me.png";
import "../styles/home.css";
import HomepageContent from "../components/HomepageContent.tsx";
import background from "../assets/background.mp4";
import pb from "../assets/profilbild2.png";
import me from "../assets/me.png";



const Home = () => {
  return (
    <div className="home-container">

      <div className="wrapper">

        <video
          className="bgImg video-container"
          src={background}
          autoPlay
          loop
          muted
          playsInline
        ></video>



        <div className="profile-pic">
          <img src={me} alt="Profilbild Jehee Han" />
          <div className="Profile-text"><div className="korean-Profile">한재희 <br /></div>  <div>JEHEE HAN</div></div>
        </div>


        <div className="hero-content">

          <div className="hero-center">

            {/* <img src="https://placehold.co/420x420" alt="Profilbild Jehee Han" className="profile-pic" />
            <div className="hero-text">
              <h1>Jehee Han </h1>
              <h2>Webentwickler</h2>

              <p>Willkommen auf meinem Portfolio – entdecke meine Projekte.</p>
            </div> */}
          </div>

          <div className="hero-section-bottom">
            <div className="scroll-down">
              <a href="#about">
                <span className="scroll-text">Scroll down</span>
                <span className="arrow">&#8595;</span>
              </a>
            </div>




            <div>
              test
            </div>


          </div>
        </div>
      </div>

      <HomepageContent />
    </div>
  );
};

export default Home;