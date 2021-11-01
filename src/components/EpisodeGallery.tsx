import { Episode } from "./Episode";

export function EpisodeGallery(): JSX.Element {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gridGap: 20,
      }}
    >
      <Episode
        name={"Winter is coming"}
        image={{
          medium: "https://static.tvmaze.com/uploads/images/medium_landscape/1/2668.jpg",
          original: "https://static.tvmaze.com/uploads/images/medium_landscape/1/2668.jpg"
        }}
        summary={"Lord Eddard Stark, ruler of the North, is summoned to court by his old friend, King Robert Baratheon, to serve as the King's Hand. Eddard reluctantly agrees after learning of a possible threat to the King's life. Eddard's bastard son Jon Snow must make a painful decision about his own future, while in the distant east Viserys Targaryen plots to reclaim his father's throne, usurped by Robert, by selling his sister in marriage"}
      />
      {/* <Episode name="Winter is coming" />
      <Episode name="Winter is coming" />
      <Episode name="Winter is coming" /> */}
      <p>column 2</p>
      <p>column 3</p>
      <p>column 1</p>
    </div>
  );
}
