import { episodeCode } from "../utils/episodeCode";
import { summaryFix } from "../utils/summaryFix";
import { imageURLFix } from "../utils/imageURLFix";

export interface IEpisode {
  id: number;
  url: string;
  name: string;
  season: number;
  number: number;
  type: string;
  airdate: string;
  airtime: string;
  airstamp: string;
  runtime: number;
  image: {
    medium: string;
    original: string;
  };
  summary: string;
  _links: { self: { href: string } };
}

export interface EpisodeProps {
  episode: IEpisode;
}

export function Episode(props: EpisodeProps): JSX.Element {
  return (
    <div className="episode">
      <h2 style={{ textAlign: "center" }}>
        {props.episode.name}
        {" - "}
        {episodeCode(props.episode.season, props.episode.number)}
      </h2>
      <div style={{ textAlign: "center" }}>
        <img
          src={imageURLFix(props.episode.image.medium)}
          alt={props.episode.image.original}
          width="75%"
          height="auto"
        ></img>
      </div>
      <p>{summaryFix(props.episode.summary)}</p>
    </div>
  );
}
