export interface Monster {
  id: string;
  name: string;
  attack: number;
  defense: number;
  hp: number;
  speed: number;
  type: string;
  imageUrl: string;
}

export interface WinningMonster {
  tie: boolean;
  winner: Monster;
}

export interface IPostWinningMonsterData {
  monster1Id: string | undefined;
  monster2Id: string | undefined;
}
