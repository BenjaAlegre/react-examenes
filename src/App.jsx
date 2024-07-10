import React from "react";
import "./App.css";
import { Footer } from "./components/Footer";
import Header from "./components/Header";
import Table from "./components/table/Table";

const App = () => {

  const users = [
    {
      id: 1,
      apellido: "Jon",
      nombre: "Hernandez",
      edad: 25,
      examenes: [
        { tema: "Matematicas", puntaje: 95 },
        { tema: "Fisica", puntaje: 88 },
      ],
      promedio: 1
    },
    {
      id: 2,
      apellido: "Smith",
      nombre: "Jane",
      edad: 30,
      examenes: [
        { tema: "Matematicas", puntaje: 85 },
        { tema: "Fisica", puntaje: 92 },
      ],
      promedio: 1
    },
  ];

  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Header />
      <div style={{ flexGrow: 1 }}>
        <div>
          <h1>Tabla</h1>
          <Table users={users} />
        </div>
      </div>
      <Footer number="12345" />
    </div>
  );
};

export default App;
