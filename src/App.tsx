// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import ProjectDetail from "./pages/ProjectDetail.tsx"; 

import Home from "./pages/Home";
import Projects from "./pages/Projects.tsx";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {


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


      {/* <div className="container">



        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Willkommen zu meinem Portfolio!
        </motion.h1>
      </div> */}
    </>
  )
}

export default App
