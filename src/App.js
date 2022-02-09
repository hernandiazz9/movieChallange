import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import CreateMovie from "./pages/CreateMovie";
import EditMovie from "./pages/EditMovie";
import Wave from "./components/wave/Wave";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/create-movie" element={<CreateMovie />} />
        <Route path="/edit-movie/:id" element={<EditMovie />} />
      </Routes>
      <Wave />
    </Router>
  );
}
