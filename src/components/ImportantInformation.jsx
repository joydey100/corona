import React from 'react'

const ImportantInformation = (props) => {
    return (
        <a className="important-info-card" target="_blank" href={props.link} rel="noreferrer">
            <div className="container">
                <div className="important-info-singlecard">
                    <div className="left-cont">
                            <img src={props.img} alt="info_image" className="info_image"/>
                    </div>
                    <div className="right-content">
                        <h4> {props.title}  </h4>
                        <p> {props.desc}  </p>
                    </div>
                </div>
            </div>
        </a>
    )
}

export default ImportantInformation
