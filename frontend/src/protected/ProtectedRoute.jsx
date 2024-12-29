import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ProtectedRoute = ({ children }) => {

    const navigate = useNavigate();

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await axios.get("http://localhost:9000/profile", {
                    withCredentials: true,
                });

                if (!response.data.user) {
                    navigate("/login")
                }
            } catch (error) {
                navigate('/login')
            }
        };
        checkAuth();
    }, [navigate])

    return children;

}

export default ProtectedRoute