import React from "react"
import devop from "../gifs/developer.gif"

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
          <div className="center">
            <img src={devop} />
          </div>
          <p className="text-center text-body-secondary">© 2024</p>
        </footer>
      </div>
    </div>
  )
}
export default Footer;