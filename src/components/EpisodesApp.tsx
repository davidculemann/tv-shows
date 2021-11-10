import { useState } from "react";
import { EpisodeGallery } from "./EpisodeGallery";
import { Header } from "./Header";
import shows from "../shows.json";

interface IShow {
  name: string;
  id: number;
}

export function EpisodesApp(): JSX.Element {
  const [show, setShow] = useState<IShow[]>([
    {
      name: "Game of Thrones",
      id: 82,
    },
  ]);

  function handleShowSelected(id: string) {
    setShow(shows.filter((show) => show.id === Number(id)));
  }

  return (
    <>
      <div className="show-picker">
        Choose TV show:{" "}
        <select
          className="select"
          onChange={(e) => handleShowSelected(e.target.value)}
          value={show[0].id}
        >
          {shows.map((option) => (
            <option value={option.id} key={option.id}>
              {option.name}
            </option>
          ))}
        </select>
      </div>

      {Header(show)}
      {EpisodeGallery(show)}
    </>
  );
}
