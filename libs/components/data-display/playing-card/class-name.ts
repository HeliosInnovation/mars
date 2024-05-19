import { cva } from 'class-variance-authority';

export const elementClassNameHandler = cva('text-5xl', {
  variants: {
    suit: {
      CLUB: ['text-black'],
      DIAMOND: ['text-red-800'],
      HEART: ['text-red-800'],
      SPADE: ['text-black'],
    },
  },
});

export const stencilClassNameHandler = cva(
  'grid h-full items-center justify-items-center',
  {
    variants: {
      elementsCount: {
        1: 'grid-cols-1',
        2: 'grid-cols-1',
        3: 'grid-cols-1',
        4: 'grid-cols-2',
        5: 'grid-cols-2',
        6: 'grid-cols-2',
        7: 'grid-cols-2',
        8: 'grid-cols-2',
        9: 'grid-cols-2',
        10: 'grid-cols-2',
      },
    },
  },
);

export const restStencilClassNameHandler = cva('grid justify-items-center', {
  variants: {
    elementsCount: {
      1: 'hidden',
      2: 'hidden',
      3: 'hidden',
      4: 'hidden',
      5: 'h-full items-center',
      6: 'hidden',
      7: 'h-3/5 items-start',
      8: 'h-3/4 items-center',
      9: 'h-full items-center',
      10: 'h-full items-center',
    },
  },
});
