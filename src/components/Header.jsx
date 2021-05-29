import React from 'react'
import logo from '../images/corona.svg'
import Banner from './Banner'

const Header = () => {
    return (
        <header>
            <div className="container">
                <img src={logo} alt="corona" />
            </div> 
           <Banner />
        </header>
    )
}

export default Header
