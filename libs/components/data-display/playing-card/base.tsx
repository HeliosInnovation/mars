import type { ReactNode } from 'react';

interface PlayingCardBaseProps {
  children: ReactNode;
}

export const PlayingCardBase = ({ children }: PlayingCardBaseProps) => {
  return <div className="relative h-64 w-48 rounded-xl border">{children}</div>;
};
