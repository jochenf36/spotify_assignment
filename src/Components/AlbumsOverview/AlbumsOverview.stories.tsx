import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { AlbumsOverview, AlbumsOverviewProps } from '.';

export default {
  title: 'Shared/AlbumsOverview',
  component: AlbumsOverview,
} as Meta;

const Template: Story<AlbumsOverviewProps> = (args) => (
  <AlbumsOverview {...args} />
);

export const List = Template.bind({});
List.args = {
  albums: [
    {
      id: '1',
      name: 'The Getaway',
      image: 'https://i.scdn.co/image/ab67616d0000b27358406b3f1ac3ceaff7a64fef',
    },
    {
      id: '2',
      name: "I'm with You",
      image: 'https://i.scdn.co/image/ab67616d0000b27396136a2ab5696812e9b26723',
    },
    {
      id: '3',
      name: 'Stadium Arcadium',
      image: 'https://i.scdn.co/image/ab67616d0000b27309fd83d32aee93dceba78517',
    },
    {
      id: '4',
      name: 'By the Way',
      image: 'https://i.scdn.co/image/ab67616d0000b273fdbcee40748537ff80a7af70',
    },
    {
      id: '5',
      name: 'By the Way (Deluxe Edition)',
      image: 'https://i.scdn.co/image/ab67616d0000b273de1af2785a83cc660155a0c4',
    },
    {
      id: '6',
      name: 'Californication',
      image: 'https://i.scdn.co/image/ab67616d0000b273a9249ebb15ca7a5b75f16a90',
    },
  ],
};
