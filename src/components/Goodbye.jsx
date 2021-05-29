import React from 'react'
import goodbye from '../images/goodbye.gif'

const Goodbye = () => {
    return (
        <section className="goodbye container">
            <div className="goodbye-cont">
            <img src={goodbye} alt="beawarefromcorona" />
            <h2> সুস্থ থাকুন, সাবধানে থাকুন </h2>
            <p > করোনা ভাইরাস মোকাবেলায় সবাই যথাযথ স্বাস্থ্যবিধি মেনে চলুন। করোনায় আক্রান্ত হলে আতঙ্কিত না হয়ে রোগীকে যত তারাতারি সম্ভব ডাক্তারের শরনাপন্ন হতে হবে। মনে রাখতে হবে, রোগ প্রতিকারের চেয়ে প্রতিরোধই সর্বোত্তম পন্থা। তাই, যথাসম্ভব বাড়িতে থাকুন, বাইরে বের হলে মাস্ক পড়ুন এবং প্রয়োজনীয় দিক নির্দেশনা মেনে চলুন।</p>
            </div>            
        </section>
    )
}

export default Goodbye
