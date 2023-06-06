import React from "react";
import "../styles/SelfAwarenessTest.css";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

function SelfAwarenessTest() {
  const animate = [" Team Ahead."];

  return (
    <div className="self-awareness-test-parent-container">
      <div className="self-awareness-test-item">
        <motion.h5
          className="privacy"
          initial={{ opacity: 1, y: 20 }}
          whileInView={{ opacity: 1, y: [0, -10, 0] }}
          transition={{ duration: 1.3, delay: 0.5 }}
        >
          We take privacy seriously!
        </motion.h5>
        <motion.h2
          initial={{ opacity: 1, y: 20 }}
          whileInView={{ opacity: 1, y: [0, -10, 0] }}
          transition={{ duration: 1.3, delay: 0.5 }}
        >
          Before you get started
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="animate-text"
        >
          <h3>"We wont share your answers with anyone, (and won't ever tell</h3>
          <h3>you which friend said what about you.)"</h3>
        </motion.div>
        <h5 className="team-signature">
          <span className="with-love">with love,</span>
          <span className="signature">
            <Typewriter
              words={animate}
              typeSpeed={150}
              style={{ fontFamily: "Sacramento, cursive" }}
            />
          </span>
        </h5>
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{
            type: "spring",
            stiffness: 800,
            opacity: 1,
            scale: 1.1,
            transition: {
              type: "spring",
              stiffness: 400,
              damping: 10,
              delay: 0.5,
              duration: 3
            }
          }}
          whileHover={{ scale: 1.3, dealy:0 }}
        >
          Start a test
        </motion.button>
        <p>Take only 5 minutes</p>
      </div>
    </div>
  );
}

export default SelfAwarenessTest;
