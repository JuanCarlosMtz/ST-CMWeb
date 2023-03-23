import "./css/App.css";
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
        </Routes>
      </Router>
    </div>
  )
}

export default App
