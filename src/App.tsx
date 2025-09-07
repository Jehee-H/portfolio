import './App.css'
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import ProjectDetail from "./pages/ProjectDetail.tsx";
import Home from "./pages/Home";
import Projects from "./pages/Projects.tsx";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Links from "./pages/Links.tsx";
import Contact from "./pages/contact.tsx";

import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';

function AppContent() {
  const location = useLocation();
  const [showSplash, setShowSplash] = useState(true);

    const { t } = useTranslation();

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-quart',
      once: true,
    });

    if (location.pathname === "/") {
      const timer = setTimeout(() => {
        setShowSplash(false);
      }, 1200);
      return () => clearTimeout(timer);
    } else {
      setShowSplash(false);
    }
  }, [location.pathname]);

  if (showSplash && location.pathname === "/") {
    return (
      <motion.div
        key="splash"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ delay: 0.8, duration: 0.3 }}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          backgroundColor: "#0a0a0a",
          color: "#fff",
          fontSize: "9vw", // responsive Schriftgröße
          fontWeight: "bold",
          fontFamily: "ClashDisplay, sans-serif",
        }}
      >
        <div
          style={{
            animation: "zoom-in 3.5s linear",
            userSelect: "none",
          }}
        >
          {t('welcome')}
        </div>
      </motion.div>
    );
  }

  return (
    <>
      <Header />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:projectId" element={<ProjectDetail />} />
          <Route path="/links" element={<Links />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
