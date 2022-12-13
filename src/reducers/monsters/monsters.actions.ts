import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import {
  IPostWinningMonsterData,
  Monster,
  WinningMonster,
} from '../../models/interfaces/monster.interface';
import { MonsterService } from './monsters.service';

export const fetchMonstersData = createAsyncThunk<Monster[]>(
  'monsters/fetchMonstersData',
  MonsterService.getAll,
);

export const postMonstersData = createAsyncThunk(
  'monsters/postMonstersData',
  async (data: IPostWinningMonsterData, thunkAPI) => {
    const winningMonster = await MonsterService.postMonsterBattleData(
      data,
    ).then((res) => res);
    thunkAPI.dispatch(setWinningMonster(winningMonster));
  },
);

export const setSelectedMonster = createAction<Monster | null>(
  'monsters/setSelectedMonster',
);

export const setSelectedComputerMonster = createAction<Monster | null>(
  'monsters/setSelectedComputerMonster',
);

export const setWinningMonster = createAction<WinningMonster | null>(
  'monsters/setWinningMonster',
);
