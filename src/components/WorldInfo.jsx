import React, {useState, useEffect} from 'react'
import axios from 'axios'

const WorldInfo = () => {

     let[data, setdata] = useState([])
    let[yesterday, setyesterday] = useState([])
    const {toBengaliNumber} = require('bengali-number')

      useEffect(() => {
        axios.get('https://disease.sh/v3/covid-19/all?yesterday=true&strict=true&query')
        .then(res => {            
            setyesterday(res.data)
        })        
        .catch(err => console.log(err))
    }, [])


    useEffect(() => {
        axios.get('https://disease.sh/v3/covid-19/all')
        .then(res => { 
           setdata(res.data)
        })        
        .catch(err => console.log(err))
    }, [])



    return (
        <>
        <div className="worldinfo">
            <div className="world-effect">
                <h5> বিশ্বে মোট করোনা আক্রান্ত রোগী  </h5>
                <h2> {toBengaliNumber(!data.cases ? yesterday.cases : data.cases)} </h2>                
            </div>

            <div className="world-death">
                <h5> বিশ্বে মোট করোনা মৃত রোগী  </h5>
                <h2> {toBengaliNumber(!data.deaths ? yesterday.deaths : data.deaths)} </h2> 
            </div>

            <div className="world-recover">
                <h5> বিশ্বে মোট সুস্থ রোগী  </h5>
                <h2> {toBengaliNumber(!data.recovered ? yesterday.recovered : data.recovered)} </h2> 
            </div>

            <div className="world-test">
                <h5> বিশ্বে মোট সংকটাপন্ন রোগী  </h5>
                <h2>  {toBengaliNumber(!data.critical ? yesterday.critical : data.critical)}</h2> 
            </div>            
        </div> 
        </>
    )
}

export default WorldInfo
