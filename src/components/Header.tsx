export function Header(): JSX.Element {
  const HeaderStyle: React.CSSProperties = {
    color: "white",
    textAlign: "center",
    fontSize: "50px",
  };
  return <h1 style={HeaderStyle}>Game of Thrones episodes</h1>;
}
