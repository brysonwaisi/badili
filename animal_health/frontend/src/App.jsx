import "./App.css";
import Header from "./components/header/Header";
import DiseaseList from "./pages/DiseaseList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/diseases" element={<DiseaseList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
