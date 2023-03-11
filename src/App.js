import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Become from "./Pages/become";
import Closeredirect from "./Pages/closeredirect";
import Homepage from "./Pages/home";
import Howitworks from "./Pages/howitworks";
import Partners from "./Pages/partners";
import Rates from "./Pages/rates";
import Stories from "./Pages/stories";

const App = () => {
  document.title = "Sovit international";


  return (
    <Router>
      {/* <Navbar userStr={user} /> */}
      <Routes>
        <Route path="/" element={<Homepage />} exact />
        <Route path="/how-it-works" element={<Howitworks />} exact />
        <Route path="/rates" element={<Rates />} exact />
        <Route path="/#" element={<Homepage />} exact />
        <Route path="/stories" element={<Stories />} exact />
        <Route path="/become-a-iplug-partner" element={<Become />} exact />
        <Route path="/redirect" element={<Closeredirect />} exact />
      </Routes>
      {/* <Footer /> */}
    </Router>

  )
};

export default App;