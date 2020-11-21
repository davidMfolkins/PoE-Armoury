import React from 'react';

import Items from '../components/Items';


const Template = (args) => <Items {...args} />;

export default {
  title: 'Items',
  component: Items
};  


export const Item = Template.bind({});
Item.args = {
};

