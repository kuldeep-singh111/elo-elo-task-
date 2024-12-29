import React, { useEffect, useState } from 'react'
import axios from "axios";


const Profile = () => {

    axios.defaults.withCredentials = true;
    const [message, setMessage] = useState('');

    useEffect(() => {
        axios.get("http://localhost:9000/profile", { withCredentials: true })
            .then((response) => {
                setMessage(response.data.user)
            })
            .catch((err) => {
                console.log("error in data fetching", err)
            })

    }, [])

    if (!message) return <div> Loading....</div>

    return (
        <>
            <p>{message.id}</p>
            <h1>{message.email}</h1>

        </>
    )
}

export default Profile;