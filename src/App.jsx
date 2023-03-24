import "./css/App.css";
import Astronomy from "./pages/Astronomy.jsx"
import Home from "./pages/Home.jsx"
import LogIn from "./pages/LogIn";
import News from "./pages/News";
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
            <Route path="/home" element={<Home />}/>
            <Route path="/astronomy" element={<Astronomy />}/>
            <Route path="/news" element={<News />}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
