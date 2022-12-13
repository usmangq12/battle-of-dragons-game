import { Monster } from '../../models/interfaces/monster.interface';
import {
  BattleMonsterCard,
  BattleMonsterTitle,
  Image,
  MonsterDivider,
  ProgressBar,
  ProgressBarTitle,
} from './MonsterBattleCard.styled';

type MonsterCardProps = {
  monster?: Monster | null;
  title?: string;
};

const MonsterBattleCard: React.FC<MonsterCardProps> = ({ title, monster }) => {
  return (
    <BattleMonsterCard>
      {monster && (
        <>
          <Image src={monster?.imageUrl} />
          <BattleMonsterTitle>{title!}</BattleMonsterTitle>
          <MonsterDivider />

          <ProgressBarTitle>HP</ProgressBarTitle>
          <ProgressBar variant="determinate" value={monster?.hp} />

          <ProgressBarTitle>Attack</ProgressBarTitle>
          <ProgressBar variant="determinate" value={monster?.attack} />

          <ProgressBarTitle>Defense</ProgressBarTitle>
          <ProgressBar variant="determinate" value={monster?.defense} />

          <ProgressBarTitle>Speed</ProgressBarTitle>
          <ProgressBar variant="determinate" value={monster?.speed} />
        </>
      )}
      {!monster && (
        <BattleMonsterTitle sx={{ fontSize: '36px' }}>
          {title!}
        </BattleMonsterTitle>
      )}
    </BattleMonsterCard>
  );
};

export { MonsterBattleCard };
