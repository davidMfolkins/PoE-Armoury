import React from 'react';

import Skills from '../components/Skills';

const gems = [
  {
    "verified": false,
    "w": 1,
    "h": 1,
    "icon": "https://web.poecdn.com/image/Art/2DItems/Gems/ImmortalCall.png?v=3843ced383e5dca18e076e57e9f67819&w=1&h=1&scale=1",
    "support": false,
    "id": "c476849d47d4df1525bf7ae908e8aaea6bab3f61be191d4b7bcaf876a148db22",
    "name": "",
    "typeLine": "Immortal Call",
    "identified": true,
    "ilvl": 0,
    "properties": [
      {
        "name": "Spell, Duration, Guard",
        "values": [],
        "displayMode": 0
      },
      {
        "name": "Level",
        "values": [
          [
            "20 (Max)",
            0
          ]
        ],
        "displayMode": 0,
        "type": 5
      },
      {
        "name": "Mana Cost",
        "values": [
          [
            "36",
            0
          ]
        ],
        "displayMode": 0
      },
      {
        "name": "Cooldown Time",
        "values": [
          [
            "3.00 sec",
            0
          ]
        ],
        "displayMode": 0
      },
      {
        "name": "Cast Time",
        "values": [
          [
            "Instant",
            0
          ]
        ],
        "displayMode": 0
      },
      {
        "name": "Quality",
        "values": [
          [
            "+20%",
            1
          ]
        ],
        "displayMode": 0,
        "type": 6
      }
    ],
    "requirements": [
      {
        "name": "Level",
        "values": [
          [
            "70",
            0
          ]
        ],
        "displayMode": 0
      },
      {
        "name": "Str",
        "values": [
          [
            "155",
            0
          ]
        ],
        "displayMode": 1
      }
    ],
    "secDescrText": "Take less Physical and Elemental Damage for a short time. Consumes up to 5 Endurance Charges to lengthen the buff and further lessen Physical Damage taken. Shares a cooldown with other Guard skills.",
    "explicitMods": [
      "Base duration is 1.00 seconds",
      "20% increased Skill Effect Duration",
      "20% increased Buff Duration per Endurance Charge removed",
      "This Skill''s Cooldown does not recover during its effect",
      "34% less Elemental Damage taken",
      "35% less Physical Damage taken",
      "15.0% less Physical Damage taken per Endurance Charge removed"
    ],
    "descrText": "Place into an item socket of the right colour to gain this skill. Right click to remove from a socket.",
    "frameType": 4,
    "socket": 0,
    "colour": "S"
  },
  {
    "verified": false,
    "w": 1,
    "h": 1,
    "icon": "https://web.poecdn.com/image/Art/2DItems/Gems/ProjectileWeakness.png?v=fcccaf5d4a2dc0f2b432aa56830a6a6c&w=1&h=1&scale=1",
    "support": false,
    "id": "e63adf7d793a4943bfe943d470025adbef0123ec88ef124fb43e0090c191c006",
    "name": "",
    "typeLine": "Sniper''s Mark",
    "identified": true,
    "ilvl": 0,
    "properties": [
      {
        "name": "Spell, Duration, Curse, Mark",
        "values": [],
        "displayMode": 0
      },
      {
        "name": "Level",
        "values": [
          [
            "20 (Max)",
            0
          ]
        ],
        "displayMode": 0,
        "type": 5
      },
      {
        "name": "Mana Cost",
        "values": [
          [
            "33",
            0
          ]
        ],
        "displayMode": 0
      },
      {
        "name": "Cast Time",
        "values": [
          [
            "0.50 sec",
            0
          ]
        ],
        "displayMode": 0
      },
      {
        "name": "Quality",
        "values": [
          [
            "+20%",
            1
          ]
        ],
        "displayMode": 0,
        "type": 6
      }
    ],
    "requirements": [
      {
        "name": "Level",
        "values": [
          [
            "70",
            0
          ]
        ],
        "displayMode": 0
      },
      {
        "name": "Dex",
        "values": [
          [
            "155",
            0
          ]
        ],
        "displayMode": 1
      }
    ],
    "secDescrText": "Curses a single enemy, increasing the damage they take from projectiles, and making projectiles split when hitting them, to hit other targets around them. You can gain charges for your life and mana flasks by hitting the cursed enemy. You can only have one Mark at a time.",
    "explicitMods": [
      "Base duration is 9.80 seconds",
      "Cursed enemies take 40% increased Damage from Projectile Hits",
      "You gain a Life Flask Charge when you Hit Cursed Enemy, no more\nthan once every 0.5 seconds",
      "You gain a Mana Flask Charge when you Hit Cursed Enemy, no more\nthan once every 0.5 seconds",
      "Projectiles which Hit Cursed Enemies Split towards 4 additional targets"
    ],
    "descrText": "Place into an item socket of the right colour to gain this skill. Right click to remove from a socket.",
    "frameType": 4,
    "socket": 1,
    "colour": "D"
  },
  {
    "verified": false,
    "w": 1,
    "h": 1,
    "icon": "https://web.poecdn.com/image/Art/2DItems/Gems/Support/IncreasedDuration.png?v=14b3a91933f0b921d1b573358e31f768&w=1&h=1&scale=1",
    "support": true,
    "id": "a62506ea64474b1ec70e2d8ebb99feaca05bd598259a2d6d0fdab380925025ca",
    "name": "",
    "typeLine": "Increased Duration Support",
    "identified": true,
    "ilvl": 0,
    "properties": [
      {
        "name": "Support, Duration",
        "values": [],
        "displayMode": 0
      },
      {
        "name": "Level",
        "values": [
          [
            "20 (Max)",
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
            "140%",
            0
          ]
        ],
        "displayMode": 0
      },
      {
        "name": "Quality",
        "values": [
          [
            "+20%",
            1
          ]
        ],
        "displayMode": 0,
        "type": 6
      }
    ],
    "requirements": [
      {
        "name": "Level",
        "values": [
          [
            "70",
            0
          ]
        ],
        "displayMode": 0
      },
      {
        "name": "Str",
        "values": [
          [
            "111",
            0
          ]
        ],
        "displayMode": 1
      }
    ],
    "secDescrText": "Supports any skill with a duration.",
    "explicitMods": [
      "Supported Skills have 74% increased Skill Effect Duration"
    ],
    "descrText": "This is a Support Gem. It does not grant a bonus to your character, but to skills in sockets connected to it. Place into an item socket connected to a socket containing the Active Skill Gem you wish to augment. Right click to remove from a socket.",
    "frameType": 4,
    "socket": 2,
    "colour": "S"
  }
]

const Template = (args) => <Skills {...args} />;

export default {
  title: 'Skills',
  component: Skills
};  


export const Inventory = Template.bind({});
Inventory.args = {
  gems: gems
};

