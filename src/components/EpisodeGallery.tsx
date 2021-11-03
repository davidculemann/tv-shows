import { Episode } from "./Episode";
import episodes from "../episodes.json";
import { useState } from "react";
import { searchFilter } from "../utils/searchFilter"

export function EpisodeGallery(): JSX.Element {
  const [search, setSearch] = useState("");
  const SearchStyle: React.CSSProperties = {
    color: "white",
    fontSize: "20px",
  };

  return (
    <>
      <div style={SearchStyle}>
        <p>Search episode:</p>
        <input
          value={search}
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridGap: 20,
        }}
      >
        <>
          {episodes.filter(epi => searchFilter(epi, search)).map((episode) => (
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

/*
<Episode
        name={"Winter is coming"}
        season={1}
        number={1}
        image={{
          medium:
            "https://static.tvmaze.com/uploads/images/medium_landscape/1/2668.jpg",
          original:
            "https://static.tvmaze.com/uploads/images/medium_landscape/1/2668.jpg",
        }}
        summary={
          "Lord Eddard Stark, ruler of the North, is summoned to court by his old friend, King Robert Baratheon, to serve as the King's Hand. Eddard reluctantly agrees after learning of a possible threat to the King's life. Eddard's bastard son Jon Snow must make a painful decision about his own future, while in the distant east Viserys Targaryen plots to reclaim his father's throne, usurped by Robert, by selling his sister in marriage"
        }
      />
      <Episode
        name={"The Kingsroad"}
        season={1}
        number={2}
        image={{
          medium:
            "https://static.tvmaze.com/uploads/images/medium_landscape/1/2669.jpg",
          original:
            "https://static.tvmaze.com/uploads/images/medium_landscape/1/2669.jpg",
        }}
        summary={
          "An incident on the Kingsroad threatens Eddard and Robert's friendship. Jon and Tyrion travel to the Wall, where they discover that the reality of the Night's Watch may not match the heroic image of it."
        }
      />
      */
