import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Aboutus from "./Pages/aboutus";
import Ourclients from "./Pages/ourclients";
import Homepage from "./Pages/home";
import Ourservices from "./Pages/ourservices";
import Ourprojects from "./Pages/ourprojects";
import Safety from "./Pages/safety";
import Contactus from "./Pages/contactus";

const App = () => {
  document.title = "Sovit international";


  return (
    <Router>
      {/* <Navbar userStr={user} /> */}
      <Routes>
        <Route path="/" element={<Homepage />} exact />
        <Route path="/aboutus" element={<Aboutus />} exact />
        <Route path="/ourservices" element={<Ourservices />} exact />
        <Route path="/ourprojects" element={<Ourprojects />} exact />
        <Route path="/ourclients" element={<Ourclients />} exact />
        <Route path="/safety-and-compliance" element={<Safety />} exact />
        <Route path="/contact-us" element={<Contactus />} exact />
      </Routes>
      {/* <Footer /> */}
    </Router>

  )
};

export default App;