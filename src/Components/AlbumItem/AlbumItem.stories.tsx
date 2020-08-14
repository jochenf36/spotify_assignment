import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { AlbumItem, AlbumItemProps } from '.';

export default {
  title: 'Shared/AlbumItem',
  component: AlbumItem,
} as Meta;

const Template: Story<AlbumItemProps> = (args) => <AlbumItem {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  name: 'Red Hot Chili Peppers',
  image: 'https://i.scdn.co/image/89bc3c14aa2b4f250033ffcf5f322b2a553d9331',
};
