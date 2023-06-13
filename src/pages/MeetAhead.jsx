import React from 'react';
import "../styles/MeetAhead.css";
import {motion} from "framer-motion";
import Lottie from "lottie-react";
import girlCyclingAnimation from '../assets/girl-cycling-in-autumn.json';



function MeetAhead() {
  return (
    <div className='main-container'>
      <div className='main-container-item'>
          <motion.div className="left-section"
                          initial={{x:-200, opacity:0.1}}
                          whileInView={{x:0, opacity:1}}
                          transition={{duration:1}}
          >
            <motion.h4
                // initial={{opacity:0.5, x:-100}}
                // whileInView={{x:0, opacity:1}}
                // transition={{duration:10, type:"spring", stiffness:150}}
            >
              Built out of frustration</motion.h4>
            <motion.h2
                // initial={{opacity:0.5, x:-100}}
                // whileInView={{x:0, opacity:1}}
                // transition={{duration:10, type:"spring", stiffness:150}}
            >
              Meet the ahead app
            </motion.h2>
            <Lottie
                style={{ width: '600px', height: '500px'}}
                animationData={girlCyclingAnimation}
                loop={true}
              />
          </motion.div>
      
          <div className="right-section">
              <motion.h5
                          initial={{y:150, opacity:0.1}}
                          whileInView={{y:0, opacity:0.6}}
                          transition={{duration:0.8}}
              >
                A personalised pocket coach that provides bite-<br/> sized, science-driven tools to boost emotional <br/> intelligence .
                 <br/> Think of it as a pocket cheerleader towards a<br/> better, more fulfilling.
              </motion.h5>
          </div>
      </div>
       
    </div>
  )
}

export default MeetAhead;