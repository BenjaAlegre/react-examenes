import React from "react";
import styles from "./Table.module.css"

const Table = ({ users }) => {
  return (
    <table>
      <thead>
        
        <tr>
              { users && Object.keys(users[0]).map((key) => (
                <th>{key}</th>
              ))}
            </tr>
      </thead>
      <tbody>
        {users && users.map(user => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.apellido}</td>
            <td>{user.nombre}</td>
            <td>{user.edad}</td>
            <td>9</td>
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