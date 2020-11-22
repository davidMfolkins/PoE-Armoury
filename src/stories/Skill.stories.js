import React from 'react';
import Skill from '../components/Skill'


const gem = {
  "verified": false,
  "w": 1,
  "h": 1,
  "icon": "https://web.poecdn.com/image/Art/2DItems/Gems/Support/enhance.png?v=b73522896f57347070e142debec35be8&w=1&h=1&scale=1",
  "support": true,
  "id": "c3f7a7e08c6e7a0879f04dcb748c6221ac4538fd49f7fd411de7ef337b64082b",
  "name": "",
  "typeLine": "Enhance Support",
  "identified": true,
  "ilvl": 0,
  "properties": [
    {
      "name": "Support",
      "values": [],
      "displayMode": 0
    },
    {
      "name": "Level",
      "values": [
        [
          "2",
          0
        ]
      ],
      "displayMode": 0,
      "type": 5
    },
    {
      "name": "Mana Multiplier",
      "values": [
        [
          "115%",
          0
        ]
      ],
      "displayMode": 0
    }
  ],
  "requirements": [
    {
      "name": "Level",
      "values": [
        [
          "10",
          0
        ]
      ],
      "displayMode": 0
    },
    {
      "name": "Dex",
      "values": [
        [
          "21",
          0
        ]
      ],
      "displayMode": 1
    }
  ],
  "additionalProperties": [
    {
      "name": "Experience",
      "values": [
        [
          "937264384/1439190228",
          0
        ]
      ],
      "displayMode": 2,
      "progress": 0.6512442231178284,
      "type": 20
    }
  ],
  "secDescrText": "Supports any skill gem. Once this gem reaches level 2 or above, will raise the quality of supported gems. Cannot support skills that don''t come from gems.",
  "explicitMods": [
    "+8% to Quality of Supported Active Skill Gems"
  ],
  "descrText": "This is a Support Gem. It does not grant a bonus to your character, but to skills in sockets connected to it. Place into an item socket connected to a socket containing the Active Skill Gem you wish to augment. Right click to remove from a socket.",
  "frameType": 4,
  "socket": 0,
  "colour": "D"
}

const Template = (args) => <Skill {...args} />;

export default {
  title: 'Skill',
  component: Skill
};  

export const Support = Template.bind({});
Support.args = {
  gem: gem
};
