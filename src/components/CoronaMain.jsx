import React from 'react'
import BDCardContainer from './BDCardContainer'
import CoronaEffect from './CoronaEffect'
import CoronaTest from './CoronaTest'
import DoctorHelp from './DoctorHelp'
import Footer from './Footer'
import Goodbye from './Goodbye'
import Header from './Header'
import ImportantInfoContainer from './ImportantInfoContainer'
import Vaccine from './Vaccine'

const CoronaMain = () => {
    return (
        <>
            <Header />
            <BDCardContainer />            
            <ImportantInfoContainer />
            <CoronaEffect />
            <CoronaTest />
            <DoctorHelp />
            <Vaccine />
            <Goodbye />
            <Footer />
        </>
    )
}

export default CoronaMain
