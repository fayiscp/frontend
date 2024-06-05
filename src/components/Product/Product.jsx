import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'

import './Product.css'
import { Link, useNavigate } from 'react-router-dom'

function Product() {

  let [products, setProducts] = useState(null)
  let navigate = useNavigate()

  useEffect(() => {
    let getAllProducts = async () => {
      let accessToken = localStorage.getItem('token')
      let response = await axios.get('http://localhost:5000/product/get-all-products', {
        headers: {
          'authorization': `Bearer ${accessToken}`
        }
      })
      console.log(response);
      if (response.data == 'Invalid token') {
        navigate('/login')
      } else {

        setProducts(response.data)

      }
    }
    getAllProducts()


  }, [])

  return (
    <div className='card-container'>

      {
        products?.map((obj, index) => {
          return (
            <div key={index}>
              <Link to={`/productdetails/${obj._id}`} className='product-link'>
                <Card data={obj} />
              </Link>
            </div>

          )
        })
      }

    </div>
  )
}

export default Product