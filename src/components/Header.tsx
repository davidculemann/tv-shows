export function Header(show: IShow[]): JSX.Element {
  return <h1 className="header">{show[0].name} episodes</h1>;
}

interface IShow {
  name: string;
  id: number;
}
