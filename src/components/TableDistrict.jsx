import React, { useEffect, useMemo, useState } from 'react'
import axios from 'axios'
import {useTable, useGlobalFilter} from 'react-table'
import {DistrictColumns} from './TableDistrictColumn'
import GlobalFilter from './GlobalFilter'

const TableDistrict = () => {

    // Area of Dhaka
    let [districtData, setdistrictData] = useState([])
    const {toBengaliNumber} = require('bengali-number')

    // Get Data from Dhaka Effect in Corona
    useEffect(() => {
        axios.get('/district')
        .then(res => {                       
            let mainData = res.data.features.map(val => {
                return val.properties
            })
            setdistrictData(mainData)
            
        })
        .catch(err => console.log(err))

        return () => {
           setdistrictData("")
        }
    },[])

    // useTable Hook

    

    const columns = useMemo(() => DistrictColumns, [])
    const data = useMemo(() => districtData, [districtData])

    

    // Destructure Table Instance

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, state, setGlobalFilter } = useTable({
        columns,
         data
    }, useGlobalFilter)


    const {globalFilter} = state
    


    return (
        <>
        <GlobalFilter  filter={globalFilter} setfilter={setGlobalFilter} text={" অনুসন্ধান"} />
        <div className="tablewrap">

            <table {...getTableProps()}>
            <thead>
                {
                    headerGroups.map(headerGroup => {
                        return <tr {...headerGroup.getHeaderGroupProps()}>  
                        <th> ক্রম  </th>                          
                            {                                
                                headerGroup.headers.map(column => {
                                    return  <th {...column.getHeaderProps()}>         
                                    {column.render('Header')}
                                     </th>
                                     
                                    
                                })
                            }
                           
                        </tr>
                    })
                }
                
            </thead>
            <tbody {...getTableBodyProps()}>
                {
                    rows.map((row, ind) => {
                        prepareRow(row)
                        return(
                        <tr {...row.getRowProps()}>
                        <td> {toBengaliNumber(ind+ 1)} </td>
                            {                                
                                row.cells.map(cell => {
                                   return(
                                       <td {...cell.getCellProps()} className="area-td"> 
                                       {cell.render("Cell")}
                                     </td>
                                   ) 
                                })
                            }
                               
                        </tr>
                         )
                    })
                }                
            </tbody>
        </table>

        </div>        
        </>
    )
}

export default TableDistrict
