import React from "react";
import Marquee from "react-fast-marquee";

import reactImage from '../gifs/react-img.gif'
import laravelImage from '../gifs/laravel.gif'
import mysqlImg from '../images/pngimg.com - mysql_PNG29.png'
import nodeImage from '../gifs/node-js.gif'
import bitbucket from '../images/pngegg.png'
import github from '../gifs/github.gif'
import supabase from '../images/1_uySwOV9bWmcDaSVyKdGe2A-removebg-preview.png'
import Lottie from 'lottie-react';
import animationData from '../json/html.json';
import CssData from '../json/css.json'
import jsData from '../json/javascript.json'
import sassimg from '../images/sass.png'
import bootstrapimg from '../gifs/bootstrap.gif'
import tailwindimg from '../images/tailwind.png'
import jsimage from '../images/javascript-small.png'
import cssimage from '../images/css3-small.png'
import htmlimg from '../images/html5-small.png'
import supimg from '../images/supabase-small.webp'
import sasssmall from '../images/sass-small.png'
function Cards() {

    const images = [
        { src: laravelImage, text: "Laravel" },
        { src: nodeImage, text: "Node.js" },
        { src: reactImage, text: "React" },
        { src: sasssmall, text: "Sass" },
        { src: bootstrapimg, text: "Bootstrap" },
        { src: jsimage, text: "Javascript" },
        { src: cssimage, text: "CSS" },
        { src: htmlimg, text: "HTML5" },
        { src: supimg, text: "Supabase" },
        { src: mysqlImg, text: "MySql" },

    ];  

    return(
        <>
        <div className="marquee-container">
            <Marquee speed={80} loop={0} className="absolute mt-4 inset-x-0 top-0 h-669">
                {images.map((item, index) => (
                <div key={index} className="marquee-item">
                    <img className="image-width mr-6 h-669" src={item.src} alt={`Image ${index}`} />
                    <p className="image-text">{item.text}</p>
                </div>
                ))}
            </Marquee>
        </div>
        <div className="tech-cards">
            <div class="card-group">
                <div className="cards-cont1">
                    <div class="card shadow-lg p-3 mb-5 bg-white rounded">
                        <div class="card-body">
                            <h5 class="card-title">Version Control</h5>
                            <div className="tech-item version">
                                <img src={github} alt="Github" />
                                <span>GitHub</span>
                            </div>
                            <div className="tech-item version">
                                <img src={bitbucket} alt="BitBucket" />
                            </div>
                        </div>
                    </div>
                    <div class="card shadow-lg p-3 mb-5 bg-white rounded">
                        <div class="card-body">
                            <h5 class="card-title">Databases</h5>
                            <div className="tech-item version">
                                <img src={supabase} alt="React" />
                            </div>
                            <div className="tech-item version mysql">
                                <img src={mysqlImg} alt="MySQL" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card shadow-lg p-3 mb-5 bg-white rounded">
                    <div class="card-body">
                        <h5 class="card-title">Frameworks</h5>
                        <div className="tech-item">
                            <img src={reactImage} alt="React" />
                            <span>React.js</span>
                        </div>
                        <div className="tech-item node-img">
                            <img src={nodeImage} alt="Node.js" />
                            <span>Node.js</span>
                        </div>
                        <div className="tech-item">
                            <img src={laravelImage} alt="Laravel" />
                            <span>Laravel PHP</span>
                        </div>
                        <div>
                            <div className="tech-item">
                                <img src={bootstrapimg} alt="Laravel" />
                                <span>Bootstrap</span>
                            </div>
                            <div className="tech-item">
                                <img src={tailwindimg} alt="Laravel" />
                                <span>TailWind Css</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card scripts shadow-lg p-3 mb-5 bg-white rounded">
                    <div class="card-body">
                        <h5 class="card-title">Scripting Languages</h5>
                        <div className="hello-json">
                            <div className="icons">
                                <Lottie
                                animationData={animationData}
                                loop={true}
                                autoplay={true} 
                                />
                                <p className="html">HTML 5</p>
                            </div> 
                            <div className="icons">
                                <Lottie
                                animationData={CssData}
                                loop={true}
                                autoplay={true} 
                                />
                                <p className="css">CSS 3</p>
                            </div>   
                            <div className="icons js-icons">
                                <Lottie
                                animationData={jsData}
                                loop={true}
                                autoplay={true} 
                                />
                                <p className="js">JavaScript</p>
                            </div>    
                            <div className="icons sass-icons">
                                <img src={sassimg} alt="sass" />
                                <p className="sass">sass</p>
                            </div>                         
                        </div>
                    </div>
                </div>
            </div>

        </div>
        </>
    )
}
export default Cards;