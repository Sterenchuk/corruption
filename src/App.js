import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Model from './Components/Model.jsx/Model';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Model />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
