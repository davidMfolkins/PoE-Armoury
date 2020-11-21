import React from 'react';

import Item from '../components/Item';

const item = 
{"verified":false,"w":1,"h":1,"icon":"https://web.poecdn.com/image/Art/2DItems/Rings/DemigodsBand2.png?v=173f6bb13c211fc376a770b5d12c72e4&w=1&h=1&scale=1","league":"Hardcore","id":"4f8c5076263f5cbdc0a1bb087a9b52ef255673bbcbfbb454bd435f79e7b56cec","name":"Demigod's Eye","typeLine":"Golden Hoop","identified":true,"ilvl":100,"requirements":[{"name":"Level","values":[["12",0]],"displayMode":0}],"implicitMods":["+8 to all Attributes"],"explicitMods":["33% increased Mana Regeneration Rate","16% increased Rarity of Items found","3% increased Character Size"],"flavourText":["#5 Overall in One Month Hardcore Flashback Event"],"frameType":3,"x":0,"y":0,"inventoryId":"Ring"};

const item2 = 
{"verified":false,"w":2,"h":3,"icon":"https://web.poecdn.com/image/Art/2DItems/Armours/Shields/DemigodsShieldAlt.png?v=26b5d682e63a0eba479baec14ee1f472&w=2&h=3&scale=1","league":"Hardcore","id":"3520051a8cb7e49cb1cff1c391d600e32a52bfe0f6830365b63ed9eb0335f050","sockets":[{"group":0,"attr":"S","sColour":"R"},{"group":0,"attr":"D","sColour":"G"},{"group":0,"attr":"S","sColour":"R"}],"name":"Demigod's Beacon","typeLine":"Golden Flame","identified":true,"ilvl":100,"properties":[{"name":"Chance to Block","values":[["20%",0]],"displayMode":0,"type":15}],"requirements":[{"name":"Level","values":[["15",0]],"displayMode":0}],"implicitMods":["+16% to Chaos Resistance"],"explicitMods":["Adds 10 to 20 Fire Damage to Attacks","12% increased Rarity of Items found","20% increased Light Radius"],"flavourText":["#4 Overall in the Hardcore Flashback Event"],"frameType":3,"x":0,"y":0,"inventoryId":"Offhand2","socketedItems":[]};

const Template = (args) => <Item {...args} />;

export default {
  title: 'Item',
  component: Item
};  


export const Ring = Template.bind({});
Ring.args = {
  item: item
};

export const Offhand = Template.bind({});
Offhand.args = {
  item: item2
};

