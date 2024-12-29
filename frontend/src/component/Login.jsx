import React, { useState } from 'react'
import "./login.css"
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setError] = useState('');

    const navigate = useNavigate();


    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:9000/login", {
                email, password,
            });

            if (response.status === 200) {
                navigate("/home");
            } else {
                setError("invalid Credintial")
            }
        }

        catch (error) {
            console.log("error in login", error.response ? error.response.data : error.message)
            setError("invalid Credintial")
        }

    }






    return (
        <>
            <div className=''> <span>{errors}</span></div>
            <div className='container'>

                <form method='post' className='form' onSubmit={handleLogin}>

                    <input type="email" onChange={(e) => setEmail(e.target.value)} required name="email" className='input' placeholder='Enter your email' />
                    <input type="password" onChange={(e) => setPassword(e.target.value)} required name='password' className='input' placeholder='Enter your password' />

                    <button type='submit' className='button'>Sent</button>

                    <div className='text'>
                        <span className='account'>Create new account/.... <span className='login' onClick={() => navigate("/signup")}>Register/</span> </span>
                    </div>

                </form>
            </div>
        </>
    )
}

export default Login;