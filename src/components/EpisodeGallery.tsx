import { Episode } from "./Episode";
import episodes from "../episodes.json";

export function EpisodeGallery(): JSX.Element {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gridGap: 20,
      }}
    >
      <>
        {episodes.map((episode) => (
          <Episode
            name={episode.name}
            season={episode.season}
            number={episode.number}
            image={episode.image}
            summary={episode.summary}
          />
        ))}
      </>
    </div>
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