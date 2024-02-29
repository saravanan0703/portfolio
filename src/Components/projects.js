import React from "react";


function Projects () {

    const cardData = [
        { header: 'Header 1', title: 'Dark card title 1', text: 'Some quick example text for card 1.' },
        { header: 'Header 2', title: 'Dark card title 2', text: 'Some quick example text for card 2.' },
        { header: 'Header 3', title: 'Dark card title 3', text: 'Some quick example text for card 2.' },
        { header: 'Header 4', title: 'Dark card title 4', text: 'Some quick example text for card 2.' },

      ];


    return(
        <div className="project-worksrow">
            <div className="container">
                <h1 className="projects-header">
                    Projects Works
                </h1>
            <div class="projects">
                {cardData.map((card, index) => (
                    <div key={index} className="col-md-4">
                    <div className="card text-white bg-dark mb-3" style={{ maxWidth: '18rem' }}>
                        <div className="card-header">{card.header}</div>
                        <div className="card-body">
                        <h5 className="card-title">{card.title}</h5>
                        <p className="card-text">{card.text}</p>
                        </div>
                    </div>
                    </div>
                ))}

            </div>
            
            </div>
        </div>

    )
}

export default Projects;