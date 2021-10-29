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
      <p>episodes will go here</p>
      <p>column 2</p>
      <p>column 3</p>
      <p>column 1</p>
      <p>column 2</p>
      <p>column 3</p>
      <p>column 1</p>
      <Episode name="Winter is coming" />
    </div>
  );
}
