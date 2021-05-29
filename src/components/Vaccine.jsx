import React from 'react'
import vaccine from '../images/vaccine.gif'

let vaccinedata = [
    {
        id: 1,
        listname: " নিবন্ধকরণ ",
        listlink: "https://corona.gov.bd/corona_surokkha"
    },
    {
        id: 2,
        listname: "অ্যাপ ডাউনলোড",
        listlink: "https://play.google.com/store/apps/details?id=com.codersbucket.surokkha_app"
    },
    {
        id: 3,
        listname: " ভ্যাক্সিন পরবর্তী শারীরিক জটিলতার বিষয়ে ডাক্তারি পরামর্শ",
        listlink: "https://corona.gov.bd/corona_surokkha"
    }
]

const Vaccine = () => {
    return (
        <section className="vaccine">
            <h2 className="cardtitle">কোভিড-১৯ টীকা সংক্রান্ত তথ্য </h2>
            <div className="container">
                <div className="vaccine-cont">
                    <div className="vaccine-cont-left">
                       <p className="para">
                           টিকা পেতে আগ্রহী সবাইকে অনলাইনে নিবন্ধন করতে হবে; সেজন্য একটি অ্যাপ তৈরি করা হয়েছে, যার নাম দেওয়া হয়েছে সুরক্ষা অ্যাপ। <br /> <br />
                           করোনাভাইরাসের টিকা পেতে আগ্রহীরা সুরক্ষা প্ল্যাটফর্মের ওয়েব অ্যাপ্লিকেশনে <a href="https://surokkha.gov.bd/" target="_blank" rel="noreferrer">(https://surokkha.gov.bd/) </a>  গিয়ে অথবা মোবাইলে অ্যাপ ডাউনলোড করে নিবন্ধনের কাজটি সারতে পারবেন।‘রিয়েল টাইম’ অ্যাপটি ফ্রি ডাউনলোড করা যাবে। নিবন্ধনের পর সেখান থেকেই জানা যাবে, কবে কখন টিকা নিতে হবে। 
                       </p>
                        <ul className="all-list-item">
                            {
                                vaccinedata.map(data => {
                                    return <li key={data.id}>
                                        <a href={data.listlink} target="_blank" rel="noreferrer"> {data.listname} </a>
                                    </li>
                                })
                            }
                            </ul>
                    </div>
                    <div className="vaccine-cont-right">
                        <img src={vaccine} alt="vaccine" />         
                    </div>
                </div>
            </div>            
        </section>
    )
}

export default Vaccine
