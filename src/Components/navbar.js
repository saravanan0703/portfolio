import React, { useState } from "react";
import resumepdf from '../pdfdocs/resume.pdf'
import { Link, animateScroll as scroll } from "react-scroll";
function Navbar() {
    const handleDownload = () => {
        const filePath = resumepdf;
        window.open(filePath, '_blank');
      };

    return(
        <>
            <nav>
                <div className="nav__content">
                    <div className="logo"><a href="#">Saravanan</a></div>
                    <label htmlFor="check" className="checkbox">
                    <i className="ri-menu-line"></i>
                    </label>
                    <input type="checkbox" name="check" id="check" />
                    <ul>
                    <li><Link spy={true}
                            offset={-70} 
                            to="home-section">
                            Home
                        </Link>
                    </li>
                    <li><Link spy={true}
                            offset={-70} 
                            to="home-section">About
                        </Link>
                    </li>

                    <li><a href="#" onClick={handleDownload}>Resume</a></li>
                    <li><a href="#">Works</a></li>

                    <li><Link spy={true}
                            offset={-70} 
                            to="certifications">Certifications
                        </Link>
                    </li>
                    <li><a href="#">Contact</a></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
export default Navbar;