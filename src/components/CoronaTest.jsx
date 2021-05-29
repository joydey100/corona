import React from 'react'
import coronatest from '../images/coronatest.svg'
import {coronadata} from './CoronaTestData'

const CoronaTest = () => {
    return (
        <section className="corona-test-section">
            <h2 className="cardtitle">করোনা টেস্ট ও হাসপাতালে ভর্তি সংক্রান্ত তথ্য </h2>
            <div className="container">
                <div className="corona-test-content">
                    <div className="test-left-cont">
                        <p className="para">
                            সাধারণভাবে জ্বরের সঙ্গে আরো এক বা একাধিক উপসর্গ দেখা গেলে কোভিড-১৯ ধরে নিয়েই ব্যবস্থা নিতে হবে অর্থাৎ নমুনা পরীক্ষা এবং চিকিৎসার ব্যবস্থা করতে হবে।<br /> <br />

সরকারি এবং বেসরকারি উভয় খাতে নমুনা পরীক্ষা করানো যায়। বাংলাদেশে এই মুহূর্তে ৬২ টি সরকারি পরীক্ষাগারে করোনাভাইরাস নমুনা পরীক্ষা করা হচ্ছে।
                        </p>
                        <ul className="all-list-item">
                            {
                                coronadata.map(coronadata => {
                                    return <li key={coronadata.id}>
                                        <a href={coronadata.listlink} target="_blank" rel="noreferrer" > {coronadata.listname} </a>
                                    </li>
                                })
                            }
                        </ul>                        
                    </div>
                    <div className="test-right-cont">
                        <img src={coronatest} alt="coronatest" className="testimg" />
                    </div>
                </div>
            </div>            
        </section>
    )
}

export default CoronaTest

