import "./App.css";
import Header from "./components/header/Header";
import DiseaseList from "./pages/DiseaseList";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <DiseaseList />
    </div>
  );
}

export default App;
