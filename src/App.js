import React from "react";
import { motion } from "framer-motion";
import SelfAwarenessTest from "./pages/SelfAwarenessTest";
import './App.css';
import logo from "./assets/logo.png";

const App = () => {
  const scrollToSection = (sectionId, event) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  };
 

  return (
    <div>
     <nav className="navbar">
        <div className="navbar-left">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <ul className="navbar-list">
          <li>
            <a href="#hero" onClick={(event) => scrollToSection("hero", event)}>Emotions</a>
          </li>
          <li>
            <a href="#manifesto" onClick={(event) => scrollToSection("manifesto", event)}>Manifesto</a>
          </li>
          <li>
            <a href="#test" onClick={(event) => scrollToSection("test", event)}>Self-awareness test</a>
          </li>
          <li>
            <a href="#workwithus" onClick={(event) => scrollToSection("workwithus", event)}>Work With Us</a>
          </li>
        </ul>
        <div className="navbar-right">
          <button className="download-button">
            <span className="button-text">Download app</span>
          </button>
        </div>
      </nav>
        
      <div className="sections-container">
        <section id="hero" className="section">
          <motion.h1
            initial={{ opacity: 0.5, scale: 0 }}
            whileInView={{ opacity: 1, scale: 2 }}
            transition={{
              delay: 0.5,
              type: "spring",
              damping: 10,
              stiffness: 100
            }}
          >
            Hero.jsx
          </motion.h1>
        </section>
        <section id="manifesto" className="section">
          <motion.h1
            initial={{ opacity: 0.5, scale: 0 }}
            whileInView={{ opacity: 1, scale: 2 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            manifesto
          </motion.h1>
        </section>
        <section id="test" className="section">
          <SelfAwarenessTest />
        </section>
        <section id="workwithus" className="section">
          <motion.h1
            initial={{ opacity: 0.5, scale: 0 }}
            whileInView={{
              opacity: 1,
              scale: 2
             
            }}
            transition={{ delay: 0.5, duration: 0.51 }}
          >
            workwithus.jsx
          </motion.h1>
        </section>
        
      </div>
    </div>
  );
};

export default App;

