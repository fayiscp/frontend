import React, { useState } from 'react'
import "./Otp.css"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Otp() {

    let navigate = useNavigate()


    let [data, setData] = useState('')
    let [otp, setOtp] = useState('')
    let [state, setState] = useState("true")
    let [error, setError] = useState('')


    function getData(event) {
        setData(event.target.value)

    }
    console.log(data);

    let sendData = (event) => {
        event.preventDefault()

        console.log(data);

        axios.post('http://localhost:5000/user/otp-login', { email: data }).then((res) => {
            setState(false)
            console.log(res);
        }).catch((err) => {
            console.log(err);

        })

    }


    let sendOtp = (event) => {
        event.preventDefault()

        let obj = {
            otp: otp,
            email: data
        }

        axios.post("http://localhost:5000/user/verify-otp", obj).then((res) => {
            console.log(res);

            if (res.data.loginStatus) {
                navigate('/')
            }else{
                setError("invalid otp")
                
            }

        })

    }

    return (
        <div className="otp-page">

            {state ?
                <div className="otp-box">

                    <h1>OTP LOGIN</h1>
                    <form onSubmit={sendData}>

                        <input onChange={getData} type="email" placeholder='Enter your email' name='email' value={data} />


                        <button type='submit'>Send OTP</button>
                    </form>
                </div>
                :
                <div className="otp-box">

                    <h1>OTP</h1>
                    <p style={{color:'red'}}>{error}</p>
                    <form onSubmit={sendOtp}>

                        <input type="text" placeholder='Enter your OTP' name='otp' onChange={(e) => { setOtp(e.target.value) }} value={otp} />


                        <button type='submit'>Send OTP</button>
                    </form>
                </div>
            }
        </div>
    )
}

export default Otp