import React from "react";
import "./App.css";
import { Footer } from "./components/Footer";
import Header from "./components/Header";
import Table from "./components/table/Table";

import { useCount } from "./hooks/useCount";
import Card from "./components/card/Card"
import CardContainer from "./components/cardContainer/CardContainer";

const App = () => {

  const users = [
    {
      id: 1,
      nombre: "Jon",
      apellido: "A",
      
      edad: 25,
      examenes: [
        { tema: "Matematicas", puntaje: 95 },
        { tema: "Fisica", puntaje: 88 },
      ],
      promedio: 1
    },
    {
      id: 2,
      nombre: "Jane",
      apellido: "Smith",
      
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

          

        

        <CardContainer>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        </CardContainer>
      </div>
      <Footer number="12345" />
    </div>
  );
};

export default App;
