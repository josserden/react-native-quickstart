export interface PokemonProps {
  abilities?: AbilitiesProps[];
  id: number;
  name: string;
  sprites?: SpritesProps;
  stats?: StatsProps[];
  url: string;
}

export interface AbilitiesProps {
  ability: BaseAbilityProps;
  is_hidden: boolean;
  slot: number;
}

export interface StatsProps {
  base_stat: number;
  effort: number;
  stat: BaseAbilityProps;
}

export interface BaseAbilityProps {
  name: string;
  url: string;
}

export interface SpritesProps {
  back_default: string;
  back_female: string;
  back_shiny: string;
  back_shiny_female: string;
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
}
