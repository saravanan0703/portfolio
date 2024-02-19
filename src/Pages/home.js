import React from "react";
import profileImage from '../profile-image.jpeg'
import Cards from "../Components/cards";
import Lottie from 'lottie-react';
import animationData from '../json/json.json';
import { ReactTyped } from "react-typed";
import resumepdf from '../pdfdocs/resume.pdf'
function Home() {
  const handleDownload = () => {
    const filePath = resumepdf;
    window.open(filePath, '_blank');
  };

    return(
        <section className="section">
            <div className="section__container">
              <div className="content">
                  <div className="hello-json">
                    <Lottie
                      animationData={animationData}
                      loop={true}
                      autoplay={true} 
                    />
                  </div>
                  <p className="subtitle">HELLO</p>
                  <h1 className="title">
                      I'm <span>Saravanan<br />a </span> 
                      <ReactTyped strings={["Full Stack Developer" , 'Web Developer']} typeSpeed={100} loop />
                  </h1>      
                  <p className="description">
                      Welcome to my portfolio! I'm Saravanan, a skilled and
                      creative web developer with a passion for creating beautiful,
                      responsive, and user-friendly websites. I've worked on a variety of
                      web projects, ranging from personal blogs to e-commerce platforms.
                  </p>
                  <div className="action__btns">
                      <button className="portfolio" onClick={handleDownload}>View Resume</button>
                  </div>
              </div>
              <div className="image">
                  <img src={profileImage} alt="profile" />
              </div>
            </div>

            <div className="container">
              <div className="technologies">
                    <h1>Technologies I've Worked With</h1>
                    <Cards />
                    
              </div>
            </div>
            
        </section>
    )
}

export default Home;