import React from 'react'

const MoreInfo = ({todaysData, yesterdayData, banglafunc}) => {
    return (
        <div className="more-info">
            <h3 className="info-title"> এক নজরে  </h3>

            <div className="moreinfocont">
                 <h5> মোট পরীক্ষা : {banglafunc(!todaysData.tests ? yesterdayData.tests : todaysData.tests)} টি </h5>
                <h5> সক্রিয় রোগী : {banglafunc(!todaysData.active ? yesterdayData.active : todaysData.active)} জন   </h5>
                <h5> সংকটাপন্ন রোগী : {banglafunc(!todaysData.critical ? yesterdayData.critical : todaysData.critical)} জন     </h5>
                <h5> প্রতি মিলিয়নে সক্রিয় রোগী  : {banglafunc(!todaysData.activePerOneMillion ? yesterdayData.activePerOneMillion : todaysData.activePerOneMillion)} জন   </h5>
                <h5> প্রতি মিলিয়নে আক্রান্ত রোগী :  {banglafunc(!todaysData.casesPerOneMillion ? yesterdayData.casesPerOneMillion : todaysData.casesPerOneMillion)} জন </h5>
                <h5> প্রতি মিলিয়নে সুস্থ রোগী :  {banglafunc(!todaysData.recoveredPerOneMillion ? yesterdayData.recoveredPerOneMillion : todaysData.recoveredPerOneMillion)} জন</h5>
                <h5> প্রতি মিলিয়নে করোনা পরীক্ষা :  {banglafunc(!todaysData.testsPerOneMillion ? yesterdayData.testsPerOneMillion : todaysData.testsPerOneMillion)} টি </h5>
                <h5> প্রতি মিলিয়নে মৃত রোগী :  {banglafunc(!todaysData.deathsPerOneMillion ? yesterdayData.deathsPerOneMillion : todaysData.deathsPerOneMillion)} জন </h5>              
                <h5> মানুষ প্রতি আক্রান্ত :  {banglafunc(!todaysData.oneCasePerPeople ? yesterdayData.oneCasePerPeople : todaysData.oneCasePerPeople)} জন </h5>
                <h5> মানুষ প্রতি মৃত্যু  :   {banglafunc(!todaysData.oneDeathPerPeople ? yesterdayData.oneDeathPerPeople : todaysData.oneDeathPerPeople)} জন</h5>
                <h5> মানুষ প্রতি করোনা পরীক্ষা :   {banglafunc(!todaysData.oneTestPerPeople ? yesterdayData.oneTestPerPeople : todaysData.oneTestPerPeople)} জন </h5>                
                <h5> মোট জনসংখ্যা :    {banglafunc(!todaysData.population ? yesterdayData.population : todaysData.population)} জন </h5>
               
            </div>
        </div>
    )
}

export default React.memo(MoreInfo)
