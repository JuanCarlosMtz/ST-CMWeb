import React from "react";
import {Link} from "react-router-dom";


function NavBar(){
    return(
        <nav className="navBar">
            <ul>
                <li><Link to="/home" className="title">Enciclopedia</Link></li>
                <li><Link to="/astronomy" className="link">Astronomy</Link> </li>
            </ul>
        </nav>
    )
}

export default NavBar