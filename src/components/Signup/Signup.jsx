import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import "./Signup.css"
import axios from 'axios'

function Signup() {

    let navigate = useNavigate()

    let [data, setData] = useState({
        username: '',
        email: '',
        password: ''
    })

    let [response, setResponse] = useState('')

    function getData(event) {
        setData({
            ...data,
            [event.target.name]: event.target.value
        })

    }
    console.log(data);


    let sendData = () => {

        console.log(data);
        axios.post('http://localhost:5000/user', data).then((res) => {
            console.log(res);
            setResponse(res.data)
            navigate('/login')


        }).catch((err) => {
            console.log(err);
        })

    }


    return (
        <div className="signup-page">

            <div className="signup-box">

                <h1>SIGNUP</h1>
                <form>

                    <input onChange={getData} value={data.username} type="text" placeholder='Enter your username' name="username" />

                    <input onChange={getData} type="email" placeholder='Enter your email' name='email' />
                    
                    <input onChange={getData} type="password" placeholder='pass required 8 characters (a-1)' name="password" />


                    <button type='button' onClick={sendData}>Create Account</button>

                    <p style={{ color: 'red' }}>{response}</p>

                    <Link to='/login' className='signup-link'>
                        <p>Already have an account</p>
                        <p>Forgot password</p>
                    </Link>
                </form>
            </div>


        </div>
    )
}

export default Signup