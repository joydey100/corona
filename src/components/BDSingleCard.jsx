import React from 'react'

const BDSingleCard = (props) => {
    return (
        <div className="bdsingleCard">
            <div className="cardTitle" style={{backgroundColor: props.titlebg}}>
                <h2> {props.cardtitle} </h2>    
            </div>    
            <div className="bd-effect" style={{backgroundColor: props.bodybg}}>
                <div className="bd-time-effect">
                    <h4> ২৪ ঘণ্টা </h4>
                    <h5> {props.todayCases} </h5>
                </div>
                <div className="bd-total-effect">
                    <h4> মোট </h4>
                    <h5> {props.totalcase} </h5>
                </div>
            </div>        
        </div>
    )
}

export default React.memo(BDSingleCard)
