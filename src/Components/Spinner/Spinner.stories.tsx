import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Spinner } from '.';

export default {
  title: 'Shared/Spinner',
  component: Spinner,
} as Meta;

const Template: Story = (args) => <Spinner {...args} />;

export const SimpleSpinner = Template.bind({});
