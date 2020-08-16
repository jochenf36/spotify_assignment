import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import { AlbumCover, AlbumCoverProps } from '.';

export default {
  title: 'Shared/AlbumCover',
  component: AlbumCover,
} as Meta;

const Template: Story<AlbumCoverProps> = (args) => <AlbumCover {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  id: '1',
  name: 'The Getaway',
  image: 'https://i.scdn.co/image/ab67616d0000b27358406b3f1ac3ceaff7a64fef',
};
