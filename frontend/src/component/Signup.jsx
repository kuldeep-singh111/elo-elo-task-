import React, { useState } from 'react'
import "./login.css"
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleForm = async (e) => {
        e.preventDefault();

        try {
            const send = await axios.post("http://localhost:9000/signup", {
                name, email, password
            });


        } catch (error) {
            console.log("error in signup", error)
        }

    }



    return (
        <>
            <div className='container'>
                <form method='post' onSubmit={handleForm} className='form'>
                    <input type="text" onChange={(e) => setName(e.target.value)} name='name' className='input' placeholder='Enter your name' />
                    <input type="email" onChange={(e) => setEmail(e.target.value)} name="email" className='input' placeholder='Enter your email' />
                    <input type="password" onChange={(e) => setPassword(e.target.value)} name='password' className='input' placeholder='Enter your password' />

                    <button type='submit' className='button'>Sent</button>
                    <div className='text'>
                        <span className='account'>if alrady you have account then/.. <span className='login' onClick={() => navigate("/login")}>Login</span> </span>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Signup;