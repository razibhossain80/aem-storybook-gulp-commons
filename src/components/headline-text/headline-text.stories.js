import React from 'react';
import HeadlineText from './HeadlineText';


export default {
    title: 'Components/Headline',
    component: HeadlineText,
    argTypes: {
      backgroundColor: { control: 'color' },
    },
  };

const Template = (args) => <HeadlineText {...args} />;

export const HeadlineTextDefault = Template.bind({});