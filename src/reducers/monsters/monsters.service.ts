import { API_URL } from '../../constants/env';
import {
  IPostWinningMonsterData,
  Monster,
  WinningMonster,
} from '../../models/interfaces/monster.interface';

const getAll = async (): Promise<Monster[]> =>
  await fetch(`${API_URL}/monsters`).then((response) => response.json());

const postMonsterBattleData = async (
  data: IPostWinningMonsterData,
): Promise<WinningMonster> => {
  const requestOptions = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };
  return await fetch(`${API_URL}/battle`, requestOptions).then((response) =>
    response.json(),
  );
};

export const MonsterService = {
  getAll,
  postMonsterBattleData,
};
