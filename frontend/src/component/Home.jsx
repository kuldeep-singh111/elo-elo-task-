

import { useNavigate } from "react-router-dom";
const Home = () => {

    const navigate = useNavigate();

    return (
        <>
            <h1>hello how are you developers, wel come to Home</h1>


            <button onClick={() => navigate("/profile")}>Profile</button>

        </>
    )
}

export default Home;