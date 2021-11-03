import { Episode } from "./Episode";
import episodes from "../episodes.json";
import { useState } from "react";
import { searchFilter } from "../utils/searchFilter";

export function EpisodeGallery(): JSX.Element {
  const [search, setSearch] = useState("");
  const SearchStyle: React.CSSProperties = {
    color: "white",
    fontSize: "20px",
  };

  return (
    <>
      <div style={SearchStyle}>
        Search episodes:&nbsp;
        <input
          value={search}
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />
        &nbsp;{" "}
        <span style={{ fontSize: "13px" }}>
          showing {episodes.filter((epi) => searchFilter(epi, search)).length}{" "}
          out of {episodes.length} episodes
        </span>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridGap: 20,
        }}
      >
        <>
          {episodes
            .filter((epi) => searchFilter(epi, search))
            .map((episode) => (
              <Episode
                key={episode.name}
                name={episode.name}
                season={episode.season}
                number={episode.number}
                image={episode.image}
                summary={episode.summary}
              />
            ))}
        </>
      </div>
    </>
  );
}
