interface FilterEpisode {
  name: string;
  summary: string;
}

export const searchFilter = (episode: FilterEpisode, search: string): boolean =>
  episode.name.includes(search) ||
  episode.summary.includes(search) ||
  search === "";
