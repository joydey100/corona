import React, { useState } from 'react'
import TableDhaka from './TableDhaka'
import TableDistrict from './TableDistrict'

const TableConatiner = () => {



    let [tableformat, setTableFormat] = useState(<TableDistrict />)
    let [bgbutton, setbgbutton] = useState(true)
    let [bgbutton2, setbgbutton2] = useState(false)


    return (
        <div className="table-container">
            <div className="button-field">

                <button className="button-area" style={
                        {backgroundColor : bgbutton ? "#3E6CBE" : "#fff", color: bgbutton && "#fff"}
                        } onClick={() => {
                            setbgbutton(true)
                            setbgbutton2(false)      
                setTableFormat(<TableDistrict />)
                }}> <i className="fas fa-chart-pie pie-chart"></i> দেশব্যাপী  </button>

                <button onClick={() => {
                    setbgbutton(false)
                    setbgbutton2(true)
                    setTableFormat(<TableDhaka />
                    )}} className="button-area" style={
                        {backgroundColor : bgbutton2 ? "#3E6CBE" : "#fff", color: bgbutton2 && "#fff"}
                        }> <i className="fas fa-list list"></i>  ঢাকা জেলার	অঞ্চল সমূহ  </button>            

            </div>           

            {tableformat}
        </div>
    )
}

export default TableConatiner
