import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../app/hooks';
import { MessageBox } from '../../components/message-box/MessageBox';
import { MonsterBattleCard } from '../../components/monster-battle-card/MonsterBattleCard';
import { MonstersList } from '../../components/monsters-list/MonstersList';
import { Title } from '../../components/title/Title';
import {
  fetchMonstersData,
  postMonstersData,
} from '../../reducers/monsters/monsters.actions';
import {
  selectMonsters,
  selectSelectedMonster,
  selectSelectedComputerMonster,
  selectWinningMonster,
} from '../../reducers/monsters/monsters.selectors';
import {
  BattleSection,
  PageContainer,
  StartBattleButton,
} from './BattleOfMonsters.styled';

const BattleOfMonsters = () => {
  const dispatch = useAppDispatch();

  const monsters = useSelector(selectMonsters);
  const selectedMonster = useSelector(selectSelectedMonster);
  const selectedComputerMonster = useSelector(selectSelectedComputerMonster);
  const winningMonster = useSelector(selectWinningMonster);
  const [hideMessage, setHideMessage] = useState(false);

  useEffect(() => {
    dispatch(fetchMonstersData());
  }, [dispatch]);

  const handleStartBattleClick = () => {
    dispatch(
      postMonstersData({
        monster1Id: selectedMonster?.id,
        monster2Id: selectedComputerMonster?.id,
      }),
    );
    setHideMessage(true);
  };
  return (
    <PageContainer>
      <Title>Battle of Monsters</Title>
      <MonstersList monsters={monsters} setHideMessage={setHideMessage} />
      {hideMessage ? (
        <div>
          {winningMonster?.winner.name && (
            <MessageBox text={winningMonster?.winner.name} />
          )}
        </div>
      ) : (
        <div></div>
      )}

      <BattleSection>
        <MonsterBattleCard
          title={selectedMonster?.name || 'Player'}
          monster={selectedMonster}></MonsterBattleCard>
        <StartBattleButton
          data-testid="start-battle-button"
          disabled={selectedMonster === null}
          onClick={handleStartBattleClick}>
          Start Battle
        </StartBattleButton>
        <MonsterBattleCard
          title={selectedComputerMonster?.name || 'Computer'}
          monster={selectedComputerMonster}></MonsterBattleCard>
      </BattleSection>
    </PageContainer>
  );
};

export { BattleOfMonsters };
