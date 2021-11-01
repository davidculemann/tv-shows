import { episodeStyle } from "./EpisodeStyle";

interface IEpisode {
  // id: number;
  // url: string;
  name: string;
  // season: number;
  // number: number;
  // type: string;
  // airdate: string;
  // airtime: string;
  // airstamp: string;
  // runtime: number;
  image: {
    medium: string;
    original: string;
  }
  summary: string
  // _links: { self: { href: string } };
}

export function Episode(episodeProps: IEpisode): JSX.Element {
  return (
    <div style={episodeStyle}>
      <h3>{episodeProps.name} -S01E01</h3>
      <img src={episodeProps.image.medium} alt={episodeProps.image.original}></img>
      <p>{episodeProps.summary}</p>
    </div>
  );
}
