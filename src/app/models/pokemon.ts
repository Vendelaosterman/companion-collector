/* Pokemon
*  The pokemon file contains interfaces that provide a way to define the properties of the pokemon objects
*/

export interface Pokemon {
  id: number
  name: string
  sprites: Sprites
  types: Type[]
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
}

export interface Type {
  slot: number
  type: Type2
}

export interface Type2 {
  name: string
  url: string
}
