import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Mahasiswa from "./pages/Mahasiswa";

import AddMahasiswa from "./components/mahasiswa/AddMahasiswa";
import EditMahasiswa from "./components/mahasiswa/EditMahasiswa";

function App() {
  return (
    <Router>
      <Navbar />

      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mahasiswa" element={<Mahasiswa />} />
          <Route path="/add" element={<AddMahasiswa />} />
          <Route path="/edit/:id" element={<EditMahasiswa />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
