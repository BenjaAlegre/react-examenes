import React from "react";
import "./App.css";
import { Footer } from "./components/Footer";
import Header from "./components/Header";
import Table from "./components/table/Table";

import { useCount } from "./hooks/useCount";
import Home from "./pages/Home";
const App = () => {



  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Header />
        <Home/>
      <Footer number="12345" />
    </div>
  );
};

export default App;
