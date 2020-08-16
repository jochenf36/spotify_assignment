import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import { ArtistCover, ArtistCoverProps } from '.';

export default {
  title: 'Shared/ArtistCover',
  component: ArtistCover,
} as Meta;

const Template: Story<ArtistCoverProps> = (args) => <ArtistCover {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  id: '1',
  name: 'Red Hot Chili Peppers',
  image: 'https://i.scdn.co/image/ab67616d0000b27358406b3f1ac3ceaff7a64fef',
};
