export function episodeCode(season: number, number: number): string {
  let paddedSeason = season.toString();
  let paddedEpisode = number.toString();

  if (season < 10) {
    paddedSeason = "0" + paddedSeason;
  }
  if (number < 10) {
    paddedEpisode = "0" + paddedEpisode;
  }
  return `S${paddedSeason}E${paddedEpisode}`;
}
