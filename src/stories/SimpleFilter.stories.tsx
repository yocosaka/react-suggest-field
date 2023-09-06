import React from 'react';
import { StoryFn } from '@storybook/react';
import {
  SimpleFilter,
  SimpleFilterPropsType,
} from '../components/SimpleFilter';
import { originSuggestions } from '../data/examples';
import { CompContainer } from '../components/base/CompContainer';

export default {
  title: 'SimpleFilter',
  component: SimpleFilter,
};

const Template: StoryFn<SimpleFilterPropsType> = (args) => (
  <CompContainer title={'Simple Filter'}>
    <SimpleFilter {...args} />
  </CompContainer>
);

export const Default = Template.bind({});
Default.args = {
  originSuggestions: originSuggestions,
  placeholder: 'Input something to filter',
  btnLabel: 'Go!',
};
