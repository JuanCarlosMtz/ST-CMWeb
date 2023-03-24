import './App.css'
import Astronomy from "./Components/Astronomy.jsx"
import Home from "./Components/Home"
import {Link, Route, Routes} from "react-router-dom"
import Science from './Components/Science.jsx';
function App() {
    return(
        <>

            <nav className="navBar">
                <ul>
                    <li><Link to="/" className="title">Enciclopedia</Link></li>
                    <li><Link to="/astronomy" className="link">Astronomy</Link> </li>
                    <li><Link to="/science" className="link">Science</Link> </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/astronomy" element={<Astronomy />}/>
                <Route path="/science" element={<Science />}/>
            </Routes>
        </>
    );
}

export default App
