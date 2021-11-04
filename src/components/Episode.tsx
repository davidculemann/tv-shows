import { episodeCode } from "../utils/episodeCode";
import { summaryFix } from "../utils/summaryFix";

interface IEpisode {
  // id: number;
  // url: string;
  name: string;
  season: number;
  number: number;
  // type: string;
  // airdate: string;
  // airtime: string;
  // airstamp: string;
  // runtime: number;
  image: {
    medium: string;
    original: string;
  };
  summary: string;
  // _links: { self: { href: string } };
}

export function Episode(episodeProps: IEpisode): JSX.Element {
  return (
    <div className="episode">
      <h2 style={{ textAlign: "center" }}>
        {episodeProps.name}
        {" - "}
        {episodeCode(episodeProps.season, episodeProps.number)}
      </h2>
      <div style={{ textAlign: "center" }}>
        <img
          src={episodeProps.image.medium}
          alt={episodeProps.image.original}
          width="90%"
          height="auto"
        ></img>
      </div>
      <p>{summaryFix(episodeProps.summary)}</p>
    </div>
  );
}
