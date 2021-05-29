import React from 'react'
import onlinedoctor from '../images/onlinedoctor.gif'

let doctordata = [
    {
        id: 1,
        listname: "কোভিড-১৯ স্বাস্থ্যসেবা ",
        listlink: "https://corona.gov.bd/doctor-suggest"
    },
    {
        id: 2,
        listname: "সাধারণ স্বাস্থ্যসেবা",
        listlink: "https://corona.gov.bd/doctor-suggest"
    },
    {
        id: 3,
        listname: "মা ও শিশুর স্বাস্থ্যসেবা",
        listlink: "https://corona.gov.bd/doctor-suggest"
    }
]

const DoctorHelp = () => {
    return (
        <section className="doctorhelp">
            <h2 className="cardtitle">কোভিড-১৯ সংক্রান্ত সরাসরি ডাক্তারি পরামর্শ ও তথ্য সেবা </h2>
            <div className="container">
                <div className="doctor-help-cont">
                    <div className="doctor-cont-left">
                        <img src={onlinedoctor} alt="online-doctor" className="w-85" />
                    </div>
                    <div className="doctor-cont-right">
                        <p className="para">
                            করোনাভাইরাসের লক্ষণ দেখা দিলে হটলাইন ১৬২৬৩ নম্বরে যোগাযোগ করার পরামর্শ দিয়েছে বাংলাদেশের কর্তৃপক্ষ। এরপর তারাই পরীক্ষানিরীক্ষা, পরামর্শ বা হাসপাতালে নেয়ার ব্যাপারে নির্দেশনা দেবেন। <br /> <br />

                        এছাড়াও জাতীয় কল সেন্টার, কোভিড-১৯ টেলিহেলথ, কমিউনিটি সাপোর্ট টিম এবং মা টেলিহেলথ থেকে প্রয়োজনীয় সাহায্য পাবেন।
                        </p>
                        <ul className="all-list-item">
                            {
                                doctordata.map(data => {
                                    return <li key={data.id}>
                                        <a href={data.listlink} className="blue" target="_blank" rel="noreferrer"> {data.listname} </a>
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

export default DoctorHelp
