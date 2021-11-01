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
      <Episode name="Winter is coming" />
      <Episode name="Winter is coming" />
      <Episode name="Winter is coming" />
      <Episode name="Winter is coming" />
      <p>column 2</p>
      <p>column 3</p>
      <p>column 1</p>
    </div>
  );
}
