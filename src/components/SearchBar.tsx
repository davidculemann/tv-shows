import { useState } from "react";

export function SearchBar(): JSX.Element {
  const [search, setSearch] = useState("");
  const SearchStyle: React.CSSProperties = {
    color: "white",
    fontSize: "20px",
  };

  return (
    <div style={SearchStyle}>
      <p>Search episode:</p>
      <input
        value={search}
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      />
    </div>
  );
}
