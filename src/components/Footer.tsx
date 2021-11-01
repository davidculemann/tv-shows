export function Footer(): JSX.Element {
  const FooterStyle: React.CSSProperties = {
    color: "white",
    fontSize: "15px",
  };
  return (
    <div style={FooterStyle}>
      <p>
        Episode data obtained from{" "}
        <a href="https://www.tvmaze.com/">TVMaze.com</a>
      </p>
    </div>
  );
}
