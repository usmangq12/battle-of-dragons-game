import { createReducer } from '@reduxjs/toolkit';
import {
  Monster,
  WinningMonster,
} from '../../models/interfaces/monster.interface';
import {
  fetchMonstersData,
  setSelectedMonster,
  setSelectedComputerMonster,
  setWinningMonster,
} from './monsters.actions';

interface MonsterState {
  monsters: Monster[];
  selectedMonster: Monster | null;
  computerMonster: Monster | null;
  winningMonster: WinningMonster | null;
}

const initialState: MonsterState = {
  monsters: [],
  selectedMonster: null,
  computerMonster: null,
  winningMonster: null,
};

export const monstersReducer = createReducer(initialState, (builder) => {
  builder.addCase(fetchMonstersData.pending, (state) => ({
    ...state,
    monsters: [],
  }));

  builder.addCase(fetchMonstersData.rejected, (state) => ({
    ...state,
    monsters: [],
  }));

  builder.addCase(fetchMonstersData.fulfilled, (state, action) => ({
    ...state,
    monsters: action.payload,
  }));

  builder.addCase(setSelectedMonster, (state, action) => ({
    ...state,
    selectedMonster: action.payload,
  }));

  builder.addCase(setSelectedComputerMonster, (state, action) => ({
    ...state,
    computerMonster: action.payload,
  }));

  builder.addCase(setWinningMonster, (state, action) => ({
    ...state,
    winningMonster: action.payload,
  }));
});
