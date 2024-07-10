import "./App.css";
import { Footer } from "./components/Footer";
import Header from "./components/Header";
import { useCount } from "./hooks/useCount";

const App = () => {
  const { state, add, desc, reset } = useCount();

  const users = [
    { id: 1, nombre: "Juan" },
    { id: 2, nombre: "Lautaro" },
    { id: 3, nombre: "David" },
    { id: 4, nombre: "Gonzalo" },
    { id: 5, nombre: "Pablo" },
  ];

  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header />
      <div style={{ flexGrow: 1 }}>
        {/* <p>Contador {state}</p>
        <div>
          <button onClick={add}>Aumentar contador</button>
          <button onClick={desc}>Disminuir contador</button>
          <button onClick={reset}>Resetear contador</button>
        </div> */}

        <table>
          <thead>
            <tr>
              {Object.keys(users[0]).map((key) => (
                <th>{key}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr>
                <td>{user.id}</td>
                <td>{user.nombre}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer number="12345" />
    </div>
  );
};

export default App;
