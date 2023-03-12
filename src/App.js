import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Closeredirect from "./Pages/closeredirect";
import Homepage from "./Pages/home";

const App = () => {
  document.title = "Sovit international";


  return (
    <Router>
      {/* <Navbar userStr={user} /> */}
      <Routes>
        <Route path="/" element={<Homepage />} exact />
        <Route path="/how-it-works" element={<Homepage />} exact />
        <Route path="/rates" element={<Homepage />} exact />
        <Route path="/#" element={<Homepage />} exact />
        <Route path="/stories" element={<Homepage />} exact />
        <Route path="/become-a-iplug-partner" element={<Homepage />} exact />
      </Routes>
      {/* <Footer /> */}
    </Router>

  )
};

export default App;