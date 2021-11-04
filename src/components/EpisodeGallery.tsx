import { Episode, IEpisode } from "./Episode";
//import episodes from "../episodes.json";
import { useEffect, useState } from "react";
import { searchFilter } from "../utils/searchFilter";
import { episodeCode } from "../utils/episodeCode";

export function EpisodeGallery(): JSX.Element {
  const [search, setSearch] = useState("");
  const [episodes, setEpisodes] = useState<IEpisode[]>([]);

  // useEffect(() => {
  //   const fetchEpisodes = () => {
  //     fetch("https://api.tvmaze.com/shows/82/episodes")
  //       .then((response) => response.json())
  //       .then((jsonBody: IEpisode[]) => setEpisodes(jsonBody))
  //   };
  //   fetchEpisodes();
  // }, [])

  useEffect(() => {
    fetch("https://api.tvmaze.com/shows/82/episodes")
      .then((response) => response.json())
      .then((jsonBody: IEpisode[]) => setEpisodes(jsonBody))
  }, [])

  return (
    <>
      {/* Search bar, clear button and select */}
      <div className="search">
        <select
          className="select"
          style={{ height: 25 }}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        >
          {episodes.map((option) => (
            <option value={option.name} key={option.name}>
              {episodeCode(option.season, option.number) + " - " + option.name}
            </option>
          ))}
        </select>
        <button onClick={() => setSearch("")} style={{ height: 25 }}>
          reset
        </button>
        &nbsp;Search episodes:&nbsp;
        <input
          placeholder='search...'
          style={{ height: 25 }}
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
      {/* Episode gallery */}
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
