import React, { useState } from "react";
import resumepdf from '../pdfdocs/resume.pdf'

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
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>

                    <li><a href="#" onClick={handleDownload}>Resume</a>
                    </li>
                    <li><a href="#">Certifications</a></li>
                    <li><a href="#">Contact</a></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
export default Navbar;