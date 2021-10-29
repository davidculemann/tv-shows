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
  // image: {
  //     medium: string;
  //     original: string;
  // };
  // summary: string;
  // _links: { self: { href: string } };
}

export function Episode(episodeProps: IEpisode): JSX.Element {
  return (
    <div>
      <h2>S01E01</h2>
      <h2>{episodeProps.name}</h2>
    </div>
  );
}
