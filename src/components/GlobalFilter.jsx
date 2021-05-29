import React from 'react'

const GlobalFilter = ({ filter, setfilter, text}) => {
    return (
        <div className="filter">
            {text} : &nbsp; {""}
            <input value={filter || ""}  onChange={(e) => setfilter(e.target.value)}/>
        </div>
    )
}

export default GlobalFilter
