import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.js";
import UploadPage from "./pages/UploadPage/UploadPage.js";
import Navbar from "./components/Navbar/Navbar.js";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/upload" element={<UploadPage />} />
          <Route path="/videos/:videoID" element={<HomePage />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
