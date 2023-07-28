/* User
*  The user file contains interfaces that provide a way to define the properties of the user.
*/

export type User = User2[]

export interface User2 {
  id: number
  username: string
  pokemon: string[]
}