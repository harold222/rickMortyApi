export interface Character {
  id: number;
  name: string;
  image: string;
  species: string;
  gender: string;
  created: string;
  status: string;
  type?: string;
  origin: OriginCharacter;
  location: LocationCharacter;
}

export interface OriginCharacter {
  name: string;
  url: string;
}

export interface LocationCharacter {
  name: string;
  url: string;
}