import "./App.css";
import { Footer } from "./components/Footer";
import Header from "./components/Header";
import { useCount } from "./hooks/useCount";
import Home from "./pages/Home";
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
        <Home/>
      <Footer number="12345" />
    </div>
  );
};

export default App;
