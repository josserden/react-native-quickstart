import { PokemonProps } from '@/shared/api/pokeapi/types';

const BASE_URL = 'https://pokeapi.co/api/v2';
const BASE_IMAGE_URL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon';

export const getAllPokemon = async (): Promise<PokemonProps[]> => {
  const response = await fetch(`${BASE_URL}/pokemon?limit=150`);

  if (!response.ok) {
    throw new Error('Failed to fetch Pokemon');
  }

  const data = await response.json();

  return data.results.map((pokemon: PokemonProps, index: number) => ({
    id: index + 1,
    name: pokemon.name,
    url: `${BASE_IMAGE_URL}/${index + 1}.png`,
  }));
};

export const getPokemon = async (id: string): Promise<PokemonProps> => {
  const response = await fetch(`${BASE_URL}/pokemon/${id}`);

  if (!response.ok) {
    throw new Error('Failed to fetch Pokemon');
  }

  return await response.json();
};
