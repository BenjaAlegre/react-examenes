export const Footer = ({ number = "123" }) => {
  return (
    <footer
      style={{
        width: "100vw",
        backgroundColor: "#adadad",
        height: "200px",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        position: "relative",
        bottom:0,
      }}>
      <p>Milagros - Gabriel - Benjamin</p>
    </footer>
  );
};
