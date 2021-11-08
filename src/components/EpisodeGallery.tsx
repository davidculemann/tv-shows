import { Episode, IEpisode } from "./Episode";
//import episodes from "../episodes.json";
import { useEffect, useState } from "react";
import { searchFilter } from "../utils/searchFilter";
import { episodeCode } from "../utils/episodeCode";

export function EpisodeGallery(): JSX.Element {
  const [search, setSearch] = useState("");
  const [selectedEpisode, setSelectedEpisode] = useState<IEpisode | null>(null);
  const [episodes, setEpisodes] = useState<IEpisode[]>([]);
  const episodesToShow: IEpisode[] = selectedEpisode
    ? [selectedEpisode]
    : episodes.filter((epi) => searchFilter(epi, search));

  useEffect(() => {
    fetch("https://api.tvmaze.com/shows/82/episodes")
      .then((response) => response.json())
      .then((jsonBody: IEpisode[]) => setEpisodes(jsonBody));

    setSearch("");
  }, []);

  function handleEpisodeSelected(id: string) {
    const foundEpisode = episodes.find((episode) => episode.id === Number(id));
    if (foundEpisode) {
      setSelectedEpisode(foundEpisode);
    } else {
      setSelectedEpisode(null);
    }
  }

  return (
    <>
      <div className="search">
        {/* =======================================================
          Show select bar and clear button if selectedEpisode is not null*/}
        {selectedEpisode ? (
          <>
            <button
              onClick={() => setSelectedEpisode(null)}
              style={{ height: 25 }}
            >
              Show all
            </button>
            <span style={{ fontSize: "13px" }}>
              {" "}
              showing 1 out of {episodes.length} episodes
            </span>
          </>
        ) : (
          <select
            className="select"
            style={{ height: 25 }}
            onChange={(e) => handleEpisodeSelected(e.target.value)}
            value={episodesToShow.length > 0 ? episodesToShow[0].id : ""}
          >
            {episodes.map((option) => (
              <option value={option.id} key={option.id}>
                {episodeCode(option.season, option.number) +
                  " - " +
                  option.name}
              </option>
            ))}
          </select>
        )}
        {/* =======================================================
          Show input bar if episode selection is empty (null) */}
        {!selectedEpisode && (
          <>
            {" "}
            Search episodes:{"  "}
            <input
              placeholder="search..."
              style={{ height: 25 }}
              value={search}
              onChange={(event) => {
                setSearch(event.target.value);
              }}
            />
            &nbsp;{" "}
            <span style={{ fontSize: "13px" }}>
              showing{" "}
              {episodes.filter((epi) => searchFilter(epi, search)).length} out
              of {episodes.length} episodes
            </span>
          </>
        )}
      </div>

      {/* =======================================================
          Episode gallery */}
      <div className="gallery">
        {episodesToShow.map((episode) => (
          <Episode episode={episode} key={episode.id} />
        ))}
      </div>
    </>
  );
}
