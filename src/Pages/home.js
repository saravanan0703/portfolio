import React from "react";
import profileImage from '../profile-image.jpeg'

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
                <div className="technologies">
      <h2>Technologies I've Worked With</h2>
      <div className="tech-item">
        <img src="/images/react.png" alt="React" />
        <span>React.js</span>
      </div>
      <div className="tech-item">
        <img src="/images/node.png" alt="Node.js" />
        <span>Node.js</span>
      </div>
      <div className="tech-item">
        <img src="/images/laravel.png" alt="Laravel" />
        <span>Laravel PHP</span>
      </div>
      <div className="tech-item">
        <img src="/images/mysql.png" alt="MySQL" />
        <span>MySQL</span>
      </div>
    </div>
            </div>
        </section>
    )
}

export default Home;