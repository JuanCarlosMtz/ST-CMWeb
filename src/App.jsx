import './App.css'
import Astronomy from "./Components/Astronomy.jsx"
import Home from "./Components/Home"
import {Link, Route, Routes} from "react-router-dom"
function App() {
    return(
        <>

            <nav className="navBar">
                <ul>
                    <li><Link to="/" className="title">Enciclopedia</Link></li>
                    <li><Link to="/astronomy" className="link">Astronomy</Link> </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/astronomy" element={<Astronomy />}/>
            </Routes>
        </>
    );
}

export default App
