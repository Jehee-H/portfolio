// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Home from "./pages/Home";
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
