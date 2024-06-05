import React, { useEffect, useState } from 'react'

import "./ProductDetails.css"
import { useParams } from 'react-router-dom'
import axios from 'axios'

function ProductDetails() {

    let {id}= useParams()

    console.log(id);

    let [details ,setDetails] = useState({})

    useEffect(()=>{
        axios.get(`http://localhost:5000/product/get-product/${id}`).then((res)=>{
            console.log(res);
            setDetails(res.data.message)
        }).catch((err)=>{
            console.log(err);
        })
    },[])


  return (
    <div>
        <h2>{details.Productname}</h2>
        <h2>{details.Brandname}</h2>
        <h2>{details.Category}</h2>
        <h2>{details.Price}</h2>
        <h2>{details.Stock}</h2>
    </div>
  )
}

export default ProductDetails