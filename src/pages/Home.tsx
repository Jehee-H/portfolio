
// import bgImg from "../assets/placeholder.jpg";
// import pbImg from "../assets/me.png";
import "../styles/home.css";
import HomepageContent from "../components/HomepageContent.tsx";
import background from "../assets/background.png";
import pb from "../assets/profilbild2.png";



const Home = () => {
  return (
    <div className="home-container">

      <div className="wrapper">

        {/* <video
          className="bgImg video-container"
          src={background}
          autoPlay
          loop
          muted
          playsInline
        ></video> */}

        {/* <img
          className="bgImg video-container"
          src={background}
          alt="Hintergrundbild"
        ></img> */}


        <div className="hero-content">

          <div className="hero-section-top">
            <div className='logo'>
              <div>J</div>
              <div>e</div>
              <div>h</div>
              <div>e</div>
              <div>e</div>
              <div>_</div>
              <div>H</div>
              <div>a</div>
              <div>n</div>
            </div>
            <div className='headerMenu'>
              <a href='/' className='menuItem'>HOME</a>
              <a href='/projects' className='menuItem'>PROJECTS</a>
              <a href='/' className='menuItem'>ABOUT ME</a>
              <a className='menuItem'>LINKS</a>
            </div>
          </div>

          <div className="hero-center">

            <img src="https://placehold.co/420x420" alt="Profilbild Jehee Han" className="profile-pic" />
            <div className="hero-text">
              <h1>Jehee Han <br/> Web-Entwickler</h1>
              <p>Willkommen auf meinem Portfolio – entdecke meine Projekte.</p>
            </div>
          </div>


          <div className="hero-section-bottom">
            <div className="scroll-down">
              <a href="#about">
                <span className="scroll-text">Scroll down</span>
                <span className="arrow">&#8595;</span>
              </a>
            </div>

            <div className='extraMenu'>
              {/* <div className='mode'>d</div> */}
              <div className="languageBlock">
                <div className='langContainer' >
                  <svg className="flag"
                    xmlns="http://www.w3.org/2000/svg" width="90%"
                    height="90%" shapeRendering="geometricPrecision" textRendering="geometricPrecision"
                    imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd"
                    viewBox="0 0 512 512">
                    <g fillRule="nonzero">
                      <path fill="#999"
                        d="M256 0c70.68 0 134.69 28.66 181.01 74.99C483.34 121.31 512 185.32 512 256c0 70.68-28.66 134.69-74.99 181.01C390.69 483.34 326.68 512 256 512c-70.68 0-134.69-28.66-181.01-74.99C28.66 390.69 0 326.68 0 256c0-70.68 28.66-134.69 74.99-181.01C121.31 28.66 185.32 0 256 0z" />
                      <path fill="#fff"
                        d="M256 19.48c65.3 0 124.46 26.48 167.25 69.27l1.09 1.18c42.14 42.71 68.18 101.37 68.18 166.06 0 65.31-26.5 124.46-69.29 167.25l-1.18 1.09c-42.73 42.16-101.4 68.19-166.05 68.19-65.23 0-124.37-26.51-167.18-69.33-42.84-42.74-69.33-101.89-69.33-167.2 0-65.31 26.48-124.45 69.27-167.24C131.55 45.96 190.7 19.48 256 19.48z" />
                      <path
                        d="M255.99 39.59c119.51 0 216.4 96.89 216.4 216.4 0 119.52-96.89 216.42-216.4 216.42-119.52 0-216.41-96.9-216.41-216.42 0-119.51 96.89-216.4 216.41-216.4z" />
                      <path fill="#D00"
                        d="M459.56 182.47H52.41c-8.3 22.96-12.83 47.71-12.83 73.52 0 119.52 96.89 216.42 216.41 216.42 119.51 0 216.4-96.9 216.4-216.42 0-25.81-4.53-50.56-12.83-73.52z" />
                      <path fill="#FFCE00"
                        d="M459.56 329.55H52.41c30.11 83.32 109.89 142.86 203.58 142.86 93.69 0 173.47-59.54 203.57-142.86z" />
                    </g>
                  </svg>
                </div>
              </div>
              <div className='talk btn'>Let's Talk</div>
            </div>
          </div>
        </div>
      </div>
      <HomepageContent />
    </div>
  );
};

export default Home;