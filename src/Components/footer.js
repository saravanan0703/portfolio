import React from "react"
import webIcon from '../json/web.json'
import Lottie from "lottie-react";
function Footer() {
  return(
    <div>
      <div className="container">
        <footer className="py-3 my-4">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Home</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">About</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Resume</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Portfolio</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Contact</a></li>
          </ul>
          <div className="center website-icon">
            <Lottie animationData={webIcon} loop={true} autoplay={true} />
          </div>
          <p className="text-center text-body-secondary">© 2025 - 2026</p>
        </footer>
      </div>
    </div>
  )
}
export default Footer;