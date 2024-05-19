import type { PlayingCardElementsCount } from '@types';
import type { ReactNode } from 'react';
import { Fragment } from 'react';

import {
  restStencilClassNameHandler,
  stencilClassNameHandler,
} from './class-name';

const handleBasicElementsCount = (count: PlayingCardElementsCount) => {
  const basicElementsCounts: { [key in PlayingCardElementsCount]?: number } = {
    5: 4,
    7: 6,
    8: 6,
    9: 8,
    10: 8,
  };

  return basicElementsCounts[count] ?? count;
};

interface PlayingCardStencilProps {
  element: ReactNode;
  elementsCount: PlayingCardElementsCount;
}

export const PlayingCardStencil = ({
  element,
  elementsCount,
}: PlayingCardStencilProps) => {
  if (elementsCount < 1 || elementsCount > 10) return null;
  const basicElementsCount = handleBasicElementsCount(elementsCount);
  const restElementsCount = elementsCount - basicElementsCount;

  return (
    <>
      <div className="absolute left-1/2 top-1/2 h-5/6 w-3/4 -translate-x-1/2 -translate-y-1/2">
        <div className={stencilClassNameHandler({ elementsCount })}>
          {new Array(basicElementsCount).fill(null).map((_, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <Fragment key={index}>{element}</Fragment>
          ))}
        </div>
      </div>
      {restElementsCount ? (
        <div className="absolute left-1/2 top-1/2 grid h-5/6 w-1/4 -translate-x-1/2 -translate-y-1/2 grid-cols-1 items-center text-center">
          <div className={restStencilClassNameHandler({ elementsCount })}>
            {new Array(restElementsCount).fill(null).map((_, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <Fragment key={index}>{element}</Fragment>
            ))}
          </div>
        </div>
      ) : null}
    </>
  );
};
