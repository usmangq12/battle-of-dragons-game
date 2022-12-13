import {
  fetchMonstersData,
  setSelectedMonster,
  setWinningMonster,
  setSelectedComputerMonster,
} from './monsters.actions';
import { monstersReducer } from './monsters.reducer';
import monstersData from '../../../data/monsters.json';

describe('Monsters Reducer', () => {
  it('should return the initial state', () => {
    expect(monstersReducer(undefined, { type: undefined })).toEqual({
      monsters: [],
      selectedMonster: null,
      computerMonster: null,
      winningMonster: null,
    });
  });

  it('should not change the monsters list on action pending', () => {
    const action = { type: fetchMonstersData.pending };
    const state = monstersReducer(undefined, action);
    expect(state).toEqual(
      expect.objectContaining({
        monsters: [],
      }),
    );
  });

  it('should not change the monsters list on action rejected', () => {
    const action = { type: fetchMonstersData.rejected };
    const state = monstersReducer(undefined, action);
    expect(state).toEqual(
      expect.objectContaining({
        monsters: [],
      }),
    );
  });

  it('should change the monsters list on action fulfilled', () => {
    const action = {
      type: fetchMonstersData.fulfilled,
      payload: monstersData.monsters,
    };
    const state = monstersReducer(undefined, action);
    expect(state).toEqual(
      expect.objectContaining({
        monsters: monstersData.monsters,
      }),
    );
  });

  it('should add the selected monster to the state', () => {
    const state = monstersReducer(
      undefined,
      setSelectedMonster(monstersData.monsters[0]),
    );

    expect(state).toEqual(
      expect.objectContaining({
        selectedMonster: monstersData.monsters[0],
      }),
    );
  });

  it('should add the selected computer monster to the state', () => {
    const state = monstersReducer(
      undefined,
      setSelectedComputerMonster(monstersData.monsters[0]),
    );

    expect(state).toEqual(
      expect.objectContaining({
        computerMonster: monstersData.monsters[0],
      }),
    );
  });

  it('should add the winning monster to the state', () => {
    const winner = monstersData.monsters[0];
    const state = monstersReducer(
      undefined,
      setWinningMonster({
        tie: false,
        winner,
      }),
    );

    expect(state?.winningMonster?.winner.name).toEqual(winner.name);
    expect(state?.winningMonster?.tie).not.toBeTruthy();
  });
});
