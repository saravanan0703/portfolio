import React from "react";


function Projects () {

    const cardData = [
        { id: 'https://create-headlines.vercel.app/' ,header: 'Open Ai', title: 'Generate the title', text: 'Generate the title of your page or blogs etc..,' , tech : 'React js ,Openai APi ,CSS3' },
        { id:'https://typescript-form-builder.vercel.app/' ,header: 'Form Builder', title: 'Create a Form', text: 'Create a Form With just drag and drop with customize text and label',tech : 'React js ,TypeScript, Tailwind Css ' },
        { id: 'https://coming-soon-rosy-alpha.vercel.app/',header: 'Coming-Soon', title: 'Coming soon Page', text: 'Page for Coming soon with Customize content with time lapse' ,tech: 'React js, Tailwind Css'},
        { id:'#' ,header: 'CRM App', title: 'CRM App', text: 'CRM Application with all Functionalities like CRUD with Api ' , tech: 'React Js , Antd icons, Material Ui'},
        { id:'https://sara-secondbrain.vercel.app/' ,header: 'Second Brain Chat Bot', title: 'Second Brain Ai Chat Bot', text: 'Chat Bot with Custom Documents upload with Mistral Ai ' , tech: 'Typescript'}
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
                        <a className="proj-links" href={`${card.id}`} target="_blank">
                            <div className="card text-black mb-3" style={{ maxWidth: '20rem' }}>
                                <div className="card-header">{card.header}</div>
                                <div className="card-body">
                                <h5 className="card-title">{card.title}</h5>
                                <p className="card-text">{card.text}</p>
                                <div class="techs">
                                    <span className="card-text">{card.tech}</span>
                                </div>
                                </div>
                            </div>
                        </a>
                    </div>
                ))}

            </div>
            
            </div>
        </div>

    )
}

export default Projects;