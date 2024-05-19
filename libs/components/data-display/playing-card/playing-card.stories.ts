import type { Meta, StoryObj } from '@storybook/react';

import { PlayingCard } from '.';

const meta = {
  title: 'Data Display/Playing Card',
  component: PlayingCard,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof PlayingCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    suit: 'SPADE',
    numeral: 1,
  },
};
