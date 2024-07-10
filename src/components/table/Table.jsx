import React from "react";
import styles from "./Table.module.css"

const Table = ({ users }) => {
  return (
    <table>
      <thead>
        
        <tr>
              {Object.keys(users[0]).map((key) => (
                <th>{key.toUpperCase()}</th>
              ))}
            </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.nombre}</td>
            <td>{user.apellido}</td>
            
            <td>{user.edad}</td>
            <td>{user.promedio}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
/*<table>
                <thead>
                  <tr>
                    <th>Tema</th>
                    <th>Puntaje</th>
                  </tr>
                </thead>
                <tbody>
                  {user.examenes.map((examen, index) => (
                    <tr key={index}>
                      <td>{examen.tema}</td>
                      <td>{examen.puntaje}</td>
                    </tr>
                  ))}
                </tbody>
              </table>*/