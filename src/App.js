import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProjectDetail from "./components/ProjectDetail";
import Home from "./components/Home";
import React from "react";
import Header from "./components/header";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
