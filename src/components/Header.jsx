const Header = () => {
  return (
    <header
      style={{
        width: "100vw",
        backgroundColor: "#adadad",
        height: "90px",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}>
      <img
        src="https://media.a24.com/p/ca612ec80059dcd108ce1fe51663267b/adjuntos/296/imagenes/008/555/0008555573/1200x675/smart/shrek-netflixpng.png"
        style={{ width: "120px" }}></img>
      <nav style={{ display: "flex", gap: "10px" }}>
        {["Home", "Contacto", "Quienes somos"].map((link) => (
          <a>{link}</a>
        ))}
      </nav>
    </header>
  );
};

export default Header;
