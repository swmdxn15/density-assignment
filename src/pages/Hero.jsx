import React from 'react';
import "../styles/Hero.css";
import {motion} from "framer-motion"

function Hero() {
  return (
      <div className="main-container">
        <div className="main-container-item">
          <motion.div className="left-section"
              initial={{x:-130, opacity:0.1}}
              whileInView={{x:30, opacity:1}}
              transition={{duration:0.9}}
          >
          <h4>Ahead App</h4>  
          <h1>Master your life <br/>by mastering <br/>emotions</h1>
          <div children="download-app">
             <span>Download on App Store </span> <span>stars</span>
          </div>
          </motion.div>
          <motion.div className="right-section"
             
          >
                     <img src='' alt='img'/>
          </motion.div>
        </div>
      </div>
  )
}

export default Hero;