import React from "react";
import reactImage from '../gifs/react-img.gif'
import laravelImage from '../gifs/laravel.gif'
import mysqlImg from '../images/pngimg.com - mysql_PNG29.png'
import nodeImage from '../gifs/nodejs.gif'
import bitbucket from '../images/pngegg.png'
import supabase from '../images/1_uySwOV9bWmcDaSVyKdGe2A-removebg-preview.png'
import Lottie from 'lottie-react';
import animationData from '../json/html.json';
import CssData from '../json/css.json'
import jsData from '../json/javascript.json'
import sassimg from '../images/sass.png'
import bootstrapimg from '../gifs/bootstrap.gif'
import tailwindimg from '../images/tailwind.png'
function Cards() {
    return(
        <div className="tech-cards">
            <div class="card-group">
                <div className="cards-cont1">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Version Control</h5>
                            <div className="tech-item version">
                            <p class="card-text d-flex justify-content-start flex-column card-text">
                                <a class="text-dark text-decoration-none" href="/   " target="_blank" rel="noopener noreferrer">
                                    <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUwMCIgaGVpZ2h0PSIyNTAwIiB2aWV3Qm94PSIwIDAgMjU2IDI1NiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWluWU1pbiBtZWV0Ij48cGF0aCBkPSJNMjUxLjE3MiAxMTYuNTk0TDEzOS40IDQuODI4Yy02LjQzMy02LjQzNy0xNi44NzMtNi40MzctMjMuMzE0IDBsLTIzLjIxIDIzLjIxIDI5LjQ0MyAyOS40NDNjNi44NDItMi4zMTIgMTQuNjg4LS43NjEgMjAuMTQyIDQuNjkzIDUuNDggNS40ODkgNy4wMiAxMy40MDIgNC42NTIgMjAuMjY2bDI4LjM3NSAyOC4zNzZjNi44NjUtMi4zNjUgMTQuNzg2LS44MzUgMjAuMjY5IDQuNjU3IDcuNjYzIDcuNjYgNy42NjMgMjAuMDc1IDAgMjcuNzQtNy42NjUgNy42NjYtMjAuMDggNy42NjYtMjcuNzQ5IDAtNS43NjQtNS43Ny03LjE4OC0xNC4yMzUtNC4yNy0yMS4zMzZsLTI2LjQ2Mi0yNi40NjItLjAwMyA2OS42MzdhMTkuODIgMTkuODIgMCAwIDEgNS4xODggMy43MWM3LjY2MyA3LjY2IDcuNjYzIDIwLjA3NiAwIDI3Ljc0Ny03LjY2NSA3LjY2Mi0yMC4wODYgNy42NjItMjcuNzQgMC03LjY2My03LjY3MS03LjY2My0yMC4wODYgMC0yNy43NDZhMTkuNjU0IDE5LjY1NCAwIDAgMSA2LjQyMS00LjI4MVY5NC4xOTZhMTkuMzc4IDE5LjM3OCAwIDAgMS02LjQyMS00LjI4MWMtNS44MDYtNS43OTgtNy4yMDItMTQuMzE3LTQuMjI3LTIxLjQ0Nkw4MS40NyAzOS40NDJsLTc2LjY0IDc2LjYzNWMtNi40NCA2LjQ0My02LjQ0IDE2Ljg4NCAwIDIzLjMyMmwxMTEuNzc0IDExMS43NjhjNi40MzUgNi40MzggMTYuODczIDYuNDM4IDIzLjMxNiAwbDExMS4yNTEtMTExLjI0OWM2LjQzOC02LjQ0IDYuNDM4LTE2Ljg4NyAwLTIzLjMyNCIgZmlsbD0iI0RFNEMzNiIvPjwvc3ZnPg==" alt="GIT" class="image-style m-1 rounded" /> GIT</a></p>
                            </div>
                            <div className="tech-item version">
                                <img src={bitbucket} alt="React" />
                            </div>
                        </div>
                    </div>
                    <div class="card">
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
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Frameworks</h5>
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
                <div class="card scripts">
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
    )
}
export default Cards;