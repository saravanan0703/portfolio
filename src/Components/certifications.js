import React from "react";
import reactcert from '../images/react_page-0001.jpg'
import sqlcert from '../images/sql_cert.jpg'
import mlcert from '../images/ml.jpg'
import aicert from '../images/ai.jpg'
function Certification () {

    return(
        <div className="certifications">
            <h1 className="header-certify">Certificates</h1>
            <div className="certificates container shadow-lg">
                <div className="certify">
                    <div>
                        <a href={reactcert} target="_blank">
                            <img src={reactcert} />
                        </a>
                    </div>
                    <div>
                        <a href={sqlcert} target="_blank">
                            <img src={sqlcert} />
                        </a>
                    </div>
                </div>
                <div className="certify">
                    <div>
                        <a href={mlcert} target="_blank">
                            <img src={mlcert} />
                        </a>
                    </div>
                    <div>
                        <a href={aicert} target="_blank">
                            <img src={aicert} />
                        </a>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Certification