const containerStyle = {
  width: "70px",
  height: "100%",
  background: "transparent",
  padding: "15px 17px",
  cursor: "pointer",
};

const lineStyle = {
  width: "35px",
  height: "4px",
  background: "white",
  margin: "5px 0",
  borderRadius: "5px",
};

export default function MenuButton() {
  const sidebarClick = () => {
    const wrapper = document.getElementById("wrapper");
    if (wrapper) wrapper.classList.toggle("collapse");
  };

  return (
    <button
      className="hamburger"
      onClick={sidebarClick}
      id="hamburger"
      style={containerStyle}
    >
      <div className="one" style={lineStyle} />
      <div className="two" style={lineStyle} />
      <div className="three" style={lineStyle} />
    </button>
  );
}
