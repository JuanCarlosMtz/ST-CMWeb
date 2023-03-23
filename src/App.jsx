import './App.css'
import Astronomy from "./Components/Astronomy.jsx"
import Home from "./Components/Home"
import {Link, Route, Routes} from "react-router-dom"
function App() {
    return(
        <>
            <Routes>
                <Route path="/home" element={<Home />}/>
                <Route path="/astronomy" element={<Astronomy />}/>
            </Routes>
        </>
    );
}

export default App
