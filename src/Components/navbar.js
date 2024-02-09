import React from "react";

function Navbar() {
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
                    <li><a href="#">Resume</a></li>
                    <li><a href="#">Portfolio</a></li>
                    <li><a href="#">Contact</a></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
export default Navbar;