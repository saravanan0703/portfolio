import React from "react";
import profileImage from '../profile-image.jpeg'
import reactImage from '../gifs/react-img.gif'
import laravelImage from '../gifs/laravel.gif'
import mysqlImg from '../gifs/mysql.gif'
import nodeImage from '../gifs/nodejs.gif'
function Home() {
    return(
        <section class="section">
            <div class="section__container">
              <div class="content">
                  <p class="subtitle">HELLO</p>
                  <h1 class="title">
                      I'm <span>Saravanan<br />a</span> full-stack developer
                  </h1>
                  <p class="description">
                      Welcome to my portfolio! I'm Saravanan, a skilled and
                      creative web developer with a passion for creating beautiful,
                      responsive, and user-friendly websites. I've worked on a variety of
                      web projects, ranging from personal blogs to e-commerce platforms.
                  </p>
                  <div class="action__btns">
                      <button class="hire__me">Click Here</button>
                      <button class="portfolio">Portfolio</button>
                  </div>
              </div>
              <div class="image">
                  <img src={profileImage} alt="profile" />
              </div>
            </div>

            <div className="container">
              <div className="technologies">
                    <h2>Technologies I've Worked With</h2>
                    <div className="tech-item">
                      <img src={reactImage} alt="React" />
                      <span>React.js</span>
                    </div>
                    <div className="tech-item">
                      <img src={nodeImage} alt="Node.js" />
                      <span>Node.js</span>
                    </div>
                    <div className="tech-item">
                      <img src={laravelImage} alt="Laravel" />
                      <span>Laravel PHP</span>
                    </div>
                    <div className="tech-item">
                      <img src={mysqlImg} alt="MySQL" />
                      <span>MySQL</span>
                    </div>
              </div>
            </div>
            
        </section>
    )
}

export default Home;