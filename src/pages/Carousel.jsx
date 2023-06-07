import React from "react";
import "../styles/Carousel.css";

function Carousel(){
    return(
        <div className="main-container">
            <div className="section-one">
                <div className="one">
                    <h2>EQ beats IQ</h2>
                </div>
                <div className="two">
                    People with high emotional intelligence live more fulfilled lives. <br/>They tend to be happier and have healthier relationships.
                </div>
                <div className="three">
                    People with high emotional intelligence live more fulfilled lives. <br/>They tend to be happier and have healthier relationships.
                </div>
            </div>
            <div className="section-two">
                
                <h1>Does this sound familiar...</h1><span>LOGO</span>
                <div className="cards">
                        <div className="card one"></div>
                        <div className="card two"></div>
                        <div className="card three"></div>
                        <div className="card four"></div>
                        <div className="card five"></div>
                        
                </div>
            </div>
            
        </div>
    )
}
export default Carousel;