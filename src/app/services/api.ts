interface Character {
  name: string;
  height: string;
  mass: string;
  birth_year: string;
  films: string[];
  homeworld: string;
  species: { name: string }[];
}

interface ApiResponse {
  results: Character[];
}

export const fetchCharacters = async (
  page: number,
  searchTerm: string,
  filters: Record<string, string>
): Promise<ApiResponse> => {
  let url = `https://swapi.dev/api/people/?page=${page}&limit=9&search=${searchTerm}`;

  if (filters.homeworld) {
    url += `&homeworld=${filters.homeworld}`;
  }

  if (filters.species) {
    url += `&species=${filters.species}`;
  }

  if (filters.film) {
    url += `&film=${filters.film}`;
  }

  const response = await fetch(url);
  return await response.json();
};

export const fetchHomeworld = async (url: string): Promise<any> => {
  const response = await fetch(url);
  return await response.json();
};
