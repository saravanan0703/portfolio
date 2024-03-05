import React from "react";


function Projects () {

    const cardData = [
        { header: 'Open Ai', title: 'Generate the title', text: 'Generate the title of your page or blogs etc..,' },
        { header: 'Form Builder', title: 'Create a Form', text: 'Create a Form With just drag and drop with customize text and label' },
        { header: 'Coming-Soon', title: 'Coming soon Page', text: 'Page for Coming soon with Customize content with time lapse' },
        { header: 'CRM App', title: 'CRM App', text: 'CRM Application with all Functionalities like CRUD with Api ' },

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