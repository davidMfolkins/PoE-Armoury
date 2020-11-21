import React from 'react';

import Character from '../components/Character';


const Template = (args) => <Character {...args} />;

export default {
  title: 'Character',
  component: Character
};  


export const Char1 = Template.bind({});
Char1.args = {
};

