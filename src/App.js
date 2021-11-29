import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import ChuckList from "./components/chuck/ChuckList";
import Navbar from "./components/layouts/navbar";
import ChuckDetail from "./components/chuckDetail/chuckDetail";

const App = () => {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Routes>
          <Route path="/" element={<ChuckList />} />
          <Route path="/detail" element={<ChuckDetail />} />
        </Routes>
      </Fragment>
    </Router>
  );
};

export default App;
