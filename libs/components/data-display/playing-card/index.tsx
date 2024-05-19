import type { PlayingCardElementsCount, PlayingCardNumeral } from '@types';

import { PlayingCardBase } from './base';
import { elementClassNameHandler } from './class-name';
import { PlayingCardStencil } from './stencil';
import { suitCodeHandler } from './suits-handler';

interface PlayingCardProps {
  suit: 'CLUB' | 'DIAMOND' | 'HEART' | 'SPADE';
  numeral: PlayingCardNumeral;
}

export const PlayingCard = ({ numeral, suit }: PlayingCardProps) => {
  const elementCounts = (
    numeral > 10 ? 1 : numeral
  ) as PlayingCardElementsCount;

  return (
    <PlayingCardBase>
      <PlayingCardStencil
        elementsCount={elementCounts}
        element={
          <span className={elementClassNameHandler({ suit })}>
            {suitCodeHandler(suit)}
          </span>
        }
      />
    </PlayingCardBase>
  );
};
