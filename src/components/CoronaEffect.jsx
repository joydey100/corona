import React from 'react'
import coronaeffect from '../images/coronaeffect.gif'
import {coronadata} from './CoronaEffectData'

const CoronaEffect = () => {
    return (
        <section className="corona-effect-section">
            <h2 className="cardtitle"> করোনার উপসর্গ ও আপনার করনীয় </h2>
            <div className="container">
                <div className="corona-effect-content">
                    <div className="corona-left-cont">
                        <img src={coronaeffect} alt="" />
                    </div>
                    <div className="corona-right-cont">
                        <p className="para"> করোনাভাইরাস সংক্রমণের প্রথম লক্ষণ হলো জ্বর এবং শুকনো কাশি। এছাড়া থাকতে পারে শরীরের পেশীতে ব্যথা, গলা ব্যথা, স্বাদ ও গন্ধের অনুভূতি না থাকা, শ্বাসকষ্ট, কখনো পেট খারাপ ও বমি বা বমি বমি ভাব। <br /> <br />

                         তাই সম্পুর্ন নিশ্চিত হওয়ার জন্য নিম্নলিখিত লক্ষণ সমূহ দেখে প্রয়োজনীয় ব্যবস্থা গ্রহণ করুন। </p>
                        <ul className="all-list-item">
                            {
                                coronadata.map(list => {
                                   return <li key={list.id}>
                                        <a href={list.listlink} target="_blank" rel="noreferrer"> {list.listname}</a>    
                                     </li>
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>            
        </section>
    )
}

export default CoronaEffect
