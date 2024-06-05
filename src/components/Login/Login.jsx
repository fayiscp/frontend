import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import "./Login.css"
import axios from 'axios'

function Login() {


    let [error, setError] = useState('')

    let [data, setData] = useState({
        email: '',
        password: ''
    })

    function getData(event) {
        setData({
            ...data,
            [event.target.name]: event.target.value
        })

    }
    console.log(data);

    let navigate = useNavigate()
    function sendData() {
        axios.post("http://localhost:5000/user/login", data).then((res) => {
            console.log(res);

            if (res.data.message == 'login successful') {
                localStorage.setItem('token', res.data.token)
                navigate('/products')

            }else{
                setError(res.data.message)

            }

        }).catch(() => {

        })
    }


    return (
        <div className="login-page">

            <div className="login-box">

                <h1>Login Page</h1>
                <p style={{color:'red'}}>{error}</p>
                <form>

                    <input onChange={getData} type="email" placeholder='Enter your email' name='email' value={data.email} />
                    <input onChange={getData} type="password" placeholder='Enter your password' name="password" value={data.password} />

                    <button type='button' onClick={sendData}>Login</button>
                    <Link to='/otp'>
                        <p>OTP LOGIN</p>
                    </Link>

                    <Link to='/signup'>
                        <p>Don't have an account?</p>
                        <p>Forgot password</p>
                    </Link>
                </form>
            </div>


        </div>
    )
}

export default Login