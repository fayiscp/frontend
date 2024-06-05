import React from 'react'
import "./Card.css"

function Card(props) {
    let { data } = props
    return (
        <div className='card'>
            <img src="" alt={data.Productname} height={100} width={100} />
            <h2>{data.Productname}</h2>
            {/* <p>{data.Brandname}</p>
            <p>{data.Category}</p>
            <p>{data.Price}</p>
            <p>{data.Stock}</p> */}
        </div>
    )
} 

export default Card