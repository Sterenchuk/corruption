import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ModelWrapper from "./Components/Model.jsx/ModelWrapper";
import Graphs from "./Components/Model.jsx/Graph.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ModelWrapper />} />
          <Route path="/graphs" element={<Graphs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
