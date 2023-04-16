import "./App.css";
import DiseaseList from "./pages/DiseaseList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/diseases" element={<DiseaseList />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
