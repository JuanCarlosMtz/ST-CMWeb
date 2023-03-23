import React from "react"
import {Link} from "react-router-dom";
import NavBar from "../Components/NavBar.jsx";

function Home(){
    return (
        <>
            <NavBar/>
            <div className="Home">

                <Link to="/astronomy">Astronomy time</Link>

            </div>
        </>


    );
}
export default Home