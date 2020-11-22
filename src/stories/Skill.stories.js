import React from 'react';
import Skill from '../components/Skill'


const support = {
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

const experienceMissing = {
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

const corruptedSupport = {
  "verified": false,
  "w": 1,
  "h": 1,
  "icon": "https://web.poecdn.com/image/Art/2DItems/Gems/Support/Enlighten.png?v=d7347c51862d2bfd7e7dcf36942baebb&w=1&h=1&scale=1",
  "support": true,
  "id": "d84b5a9c61c2c40a2bfd435b7d8f4aea4a6966988b2242f34be21d43e96f1f3b",
  "name": "",
  "typeLine": "Enlighten Support",
  "identified": true,
  "ilvl": 0,
  "corrupted": true,
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
          "3 (Max)",
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
          "92%",
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
          "45",
          0
        ]
      ],
      "displayMode": 0
    },
    {
      "name": "Int",
      "values": [
        [
          "73",
          0
        ]
      ],
      "displayMode": 1
    }
  ],
  "secDescrText": "Supports any skill gem. Once this gem reaches level 2 or above, will apply a mana multiplier to supported gems. Cannot support skills that don''t come from gems.",
  "explicitMods": [
    "This Gem gains 100% increased Experience"
  ],
  "descrText": "This is a Support Gem. It does not grant a bonus to your character, but to skills in sockets connected to it. Place into an item socket connected to a socket containing the Active Skill Gem you wish to augment. Right click to remove from a socket.",
  "frameType": 4,
  "socket": 3,
  "colour": "I"
}

const active = {
  "verified": false,
  "w": 1,
  "h": 1,
  "icon": "https://web.poecdn.com/image/Art/2DItems/Gems/EnduringCry.png?v=c1ec5c5bb54ac4e93b34ef15e1ad0d19&w=1&h=1&scale=1",
  "support": false,
  "id": "a3a6bb8661b2838ad28b5e3a270b9513bab9ca65f3731a74d73de05b3b6e3555",
  "name": "",
  "typeLine": "Enduring Cry",
  "identified": true,
  "ilvl": 0,
  "properties": [
    {
      "name": "Warcry, AoE, Duration",
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
          "19",
          0
        ]
      ],
      "displayMode": 0
    },
    {
      "name": "Cooldown Time",
      "values": [
        [
          "8.00 sec",
          0
        ]
      ],
      "displayMode": 0
    },
    {
      "name": "Use Time",
      "values": [
        [
          "0.80 sec",
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
  "secDescrText": "Performs a warcry, taunting all nearby enemies to attack the user and granting endurance charges. Gives a brief burst of life regeneration, as well as a buff which grants resistances and physical damage reduction based on your endurance charges.",
  "explicitMods": [
    "Base duration is 2.00 seconds",
    "Regenerate 1976 Life over 1 second",
    "20% increased Skill Effect Duration",
    "38% increased Warcry Speed",
    "Counts total Power of Enemies in Range",
    "Gain 1 Endurance Charge per 5 Power",
    "Buff grants +2% to all Elemental Resistances per Endurance Charge",
    "Buff grants 2% additional Physical Damage Reduction per Endurance Charge"
  ],
  "descrText": "Place into an item socket of the right colour to gain this skill. Right click to remove from a socket.",
  "frameType": 4,
  "socket": 2,
  "colour": "S"
}

const Template = (args) => <Skill {...args} />;

export default {
  title: 'Skill',
  component: Skill
};  

export const Support = Template.bind({});
Support.args = {
  gem: support
};

export const CorruptedSupport = Template.bind({});
CorruptedSupport.args = {
  gem: corruptedSupport
};

export const Active = Template.bind({});
Active.args = {
  gem: active
};

export const ExperienceMissing = Template.bind({});
ExperienceMissing.args = {
  gem: experienceMissing
};
