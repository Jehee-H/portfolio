import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import ProjectDetail from "./pages/ProjectDetail.tsx";
import Home from "./pages/Home";
import Projects from "./pages/Projects.tsx";
import Header from "./components/Header";
import Footer from "./components/Footer";

import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-quart',
      once: true,
    });

    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 1200); // 1,5 Sekunden Splash-Dauer

    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return (
      <motion.div
        key="splash"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ delay: .8, duration: 0.3 }}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          backgroundColor: "#0a0a0a",
          color: "#fff",
          fontSize: "8rem",
          fontWeight: "bold",
          fontFamily: "ClashDisplay, sans-serif",
        }}
      >
    <div style={{
      animation: "zoom-in 3.5s linear",
      userSelect: "none",
    }}>
      WILKOMMEN
    </div>

      </motion.div>
    );
  }

  return (
    <>
      <Router>
        <Header />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:projectId" element={<ProjectDetail />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </Router>
    </>
  )
}

export default App;
