import { episodeCode } from "../utils/episodeCode";
import { summaryFix } from "../utils/summaryFix";
import { imageURLFix } from "../utils/imageURLFix";

export interface IEpisode {
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

export function Episode(props: IEpisode): JSX.Element {
  return (
    <div className="episode">
      <h2 style={{ textAlign: "center" }}>
        {props.name}
        {" - "}
        {episodeCode(props.season, props.number)}
      </h2>
      <div style={{ textAlign: "center" }}>
        <img
          src={imageURLFix(props.image.medium)}
          alt={props.image.original}
          width="90%"
          height="auto"
        ></img>
      </div>
      <p>{summaryFix(props.summary)}</p>
    </div>
  );
}
