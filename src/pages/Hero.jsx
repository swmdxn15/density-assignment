import React from 'react';
import "../styles/Hero.css";
import {motion} from "framer-motion";
import Lottie from "lottie-react";


import phoneAnimation from '../assets/phone.json';
import starsAnimation from '../assets/stars.json';
import downloadAppStore from "../assets/download-appstore.png"
// import waterSplash from "../assets/water-splash.json"
// import business from "../assets/business.json";
// import loading from "../assets/loading.gif";

function Hero() {
 
  return (
      <div className="main-container">
        <div className="main-container-item">
          <motion.div className="left-section"
              initial={{x:-50, opacity:0.1}}
              whileInView={{x:50, opacity:1}}
              transition={{duration:1}}
          >
          <h4>Ahead App</h4>  
          <h1>Master your life <br/>by mastering <br/>emotions</h1>
          <div className="download-app">
             <img src={downloadAppStore} alt="app-store" style={{width: '124px', height: '45px'}}/>
             <span className='stars-reviews'>
              <Lottie
                style={{ width: '24%', height: '24%'}}
                animationData={starsAnimation}
                loop={false}
              />
              <h6>100+ AppStore Reviews </h6>
             </span>
             
          </div>
          </motion.div>
          <motion.div className="right-section">
              
              <Lottie
                style={{ width: '450px', height: '450px' }}
                animationData={phoneAnimation}
                loop={true}
              />
             
           
          </motion.div>
        </div>
      </div>
  )
}

export default Hero;