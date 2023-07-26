/*export interface Pokemon {
  id: number;
  name: string;
  sprites: {
    front_default: string;
    back_default: string;
    // Add other sprite URLs as needed
  };
  types: [
    slot: number;
    type: {
      name: string; 
    ]

  }
}*/

export interface Pokemon {
  id: number
  name: string
  order: number
  sprites: Sprites
  types: Type[]
  weight: number
}

export interface Sprites {
  back_default: string
  back_female: any
  back_shiny: string
  back_shiny_female: any
  front_default: string
  front_female: any
  front_shiny: string
  front_shiny_female: any
  //other: Other
  //versions: Versions
}

export interface Type {
  slot: number
  type: Type2
}

export interface Type2 {
  name: string
  url: string
}
