import { Routes, Route } from "react-router-dom";
import Navigation from "./component/Navigation/Navigation";
import Home from "./component/Home/Home";
import Projects from "./component/Projects/Projects";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navigation />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
