import "./css/App.css";
import Astronomy from "./pages/Astronomy.jsx"
import Home from "./pages/Home.jsx"
import LogIn from "./pages/LogIn";
import TestPage from "./pages/TestPage";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
            <Route path='/' element={<LogIn />} />
            <Route path='/testpage' element={<TestPage />} />
            <Route path="/home" element={<Home />}/>
            <Route path="/astronomy" element={<Astronomy />}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
