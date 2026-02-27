export interface PokemonCard {
  id: string;
  name: string;
  set: string;
  setNumber: string;
  rarity: string;
  type: string;
  hp?: number;
  imageUrl: string;
  owned: boolean;
  quantity: number;
}

export interface CardSet {
  id: string;
  name: string;
  code: string;
  releaseDate: string;
  totalCards: number;
  logoUrl: string;
}