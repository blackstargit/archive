import MenuButton from "./MenuButton";

export default function TopNavbar() {
  const navbarStyle = {
    width: "calc(100%)",
    height: "60px",
    display: "flex",
    position: "fixed",
    justifyContent: "space-between",
    backgroundColor: "transparent",
    zIndex: 100,
  };

  const menuStyle = {
    width: "calc(100% - 70px)",
    height: "100%",
    background: "transparent",
    color: "white",
    display: "flex",
    alignItems: "center",
    padding: "0 20px",
    boxShadow: "0 1px 1px rgba(0, 0, 0, 0.1)",
  };

  const logoStyle = {
    color: "#2e4ead",
    fontSize: "20px",
    fontWeight: 700,
    letterSpacing: "3px",
  };

  return (
    <div className="top_navbar" style={navbarStyle}>
      <MenuButton />
      <div className="top_menu" style={menuStyle}>
        <h1 className="logo-text" style={logoStyle}>
          𝕾𝖎𝖌𝖒𝖆
        </h1>
      </div>
    </div>
  );
}
