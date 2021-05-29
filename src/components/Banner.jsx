import React from 'react'
import doctors from '../images/doctors.svg'
import WorldInfo from './WorldInfo'

const Banner = () => {

    return (
         <div className="banner-area">
                <div className="container">
                    <div className="banner-content">
                        <div className="banner-content-left">
                            <h2> <span className="highlight"> করোনা </span>  মোকাবেলায় সচেতন হোন </h2>
                            <p> কোভিড - ১৯ বা নভেল করোনা ভাইরাস এর সর্বশেষ তথ্য, করোনা উপসর্গ, করোনা পরীক্ষা, হাসপাতালে ভর্তি সংক্রান্ত তথ্য, ডাক্তারি পরামর্শ ও সেবা, টিকা সংক্রান্ত তথ্য এবং জরুরি সেবার সকল তথ্য জানুন এখানেই।  </p>

                            <WorldInfo />
                        </div>   
                        <div className="banner-content-right">
                            <img src={doctors} alt="doctor" />
                        </div> 
                    </div>                        
                </div>    
            </div>   
    )
}

export default Banner
