import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import SpinWheel from "./pages/Spin/SpinWheel";
import Navbar from "./components/Navbar/Navbar";
import Controls from "./pages/Controls/Controls";
import Home from "./pages/Home/Home";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/spin" element={<SpinWheel />} />
        <Route path="/controls" element={<Controls />} />
      </Routes>
    </Router>
  )
}

export default App;