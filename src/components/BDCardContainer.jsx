import React, {useEffect, useState} from 'react'
import axios from 'axios'
import BDSingleCard from './BDSingleCard'
import MoreInfo from './MoreInfo'



const BDCardContainer = () => {

    let[data, setdata] = useState([])
    let[yesterday, setyesterday] = useState([])
    const {toBengaliNumber} = require('bengali-number')

      useEffect(() => {
        axios.get('https://corona.lmao.ninja/v2/countries/bangladesh?yesterday=true&strict=true&query')
        .then(res => {            
            setyesterday(res.data)
        })        
        .catch(err => console.log(err))
    }, [])


    useEffect(() => {
        axios.get('https://disease.sh/v3/covid-19/countries/bangladesh')
        .then(res => { 
           setdata(res.data)
        })        
        .catch(err => console.log(err))
    }, [])




    return (
        <section className="bd-container container pt-30">
                <h2 className="cardtitle"> সর্বশেষ করোনা পরিস্থিতি </h2>


                <div className="bd-card-container">    
                <BDSingleCard 
                todayCases= { toBengaliNumber( data.todayCases === 0 ?  yesterday.todayCases : data.todayCases)  }
                totalcase={toBengaliNumber(data.cases) }
                time= "২৪ ঘণ্টা"
                cardtitle = "নতুন আক্রান্ত"
                titlebg =  "#9DEDF9"
                bodybg = "#DBFFFD"
                /> 

                <BDSingleCard 
                todayCases= { toBengaliNumber(data.todayDeaths === 0 ? yesterday.todayDeaths : data.todayDeaths)} 
                totalcase={ toBengaliNumber(data.deaths)}
                time= "২৪ ঘণ্টা"
                cardtitle = "মৃত্যু"
                titlebg =  "#F99D9D"
                bodybg =  "#FFDBDB"
                /> 


                <BDSingleCard 
                todayCases={toBengaliNumber(data.todayRecovered === 0 ? yesterday.todayRecovered : data.todayRecovered)}
                totalcase={toBengaliNumber(data.recovered)}
                cardtitle = "সুস্থ"
                titlebg = "#59F3A6"
                bodybg = "#D4FBE7"
                /> 

               

                <MoreInfo todaysData = {data} yesterdayData= {yesterday} banglafunc = {toBengaliNumber}/>



                
                </div>
                
        </section>
    )
}


export default BDCardContainer
