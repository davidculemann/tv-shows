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

export const searchFilter =
  (episode: IEpisode, search: string): boolean =>
    episode.name.includes(search) ||
    episode.summary.includes(search) ||
    search === ""
