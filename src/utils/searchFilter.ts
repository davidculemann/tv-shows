interface FilterEpisode {
  name: string;
  summary: string;
}

export const searchFilter = (episode: FilterEpisode, search: string): boolean =>
  episode.name.toLowerCase().includes(search.toLowerCase()) ||
  episode.summary.toLowerCase().includes(search.toLowerCase()) ||
  search === "";
