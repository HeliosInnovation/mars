export const suitCodeHandler = (
  suitName: 'CLUB' | 'DIAMOND' | 'HEART' | 'SPADE',
) => {
  const suitsCode = {
    CLUB: '\u2663',
    DIAMOND: '\u2666',
    HEART: '\u2665',
    SPADE: '\u2660',
  };
  return suitsCode[suitName];
};
