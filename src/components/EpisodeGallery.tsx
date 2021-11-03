import { Episode } from "./Episode";
import episodes from "../episodes.json";
import { useState } from "react";
import { searchFilter } from "../utils/searchFilter";
import Select from 'react-select'

export function EpisodeGallery(): JSX.Element {
  const [search, setSearch] = useState("");
  const options = episodes

  return (
    <>
      <div className="search">
        <Select className="select" options={options} />
        Search episodes:&nbsp;
        <input
          value={search}
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />
        &nbsp; <span style={{ fontSize: "13px" }}>showing{" "}
          {episodes.filter((epi) => searchFilter(epi, search)).length} out of{" "}
          {episodes.length} episodes</span>
      </div>
      <div className="gallery">
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
