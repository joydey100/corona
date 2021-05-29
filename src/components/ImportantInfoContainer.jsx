import React from 'react'
import ImportantInformation from './ImportantInformation'
import {InfoData} from './Importantinfodata'

const ImportantInfoContainer = () => {
    return (
        <section className="important-info-container">
            <div className="container">
            
            <h2 className="cardtitle"> প্রয়োজনীয় তথ্যাবলি </h2>

            <div className="important-info-card-container">
                {
                    InfoData.map(info => {
                        return <ImportantInformation key={info.id} {...info} />
                    })
                }
                
            </div>
            </div>
        </section>
    )
}

export default ImportantInfoContainer
