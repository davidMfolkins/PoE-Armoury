import React from 'react';

import Items from '../components/Items';

const items = 
[ {"verified":false,"w":1,"h":1,"icon":"https://web.poecdn.com/image/Art/2DItems/Rings/DemigodsBand2.png?v=173f6bb13c211fc376a770b5d12c72e4&w=1&h=1&scale=1","league":"Hardcore","id":"4f8c5076263f5cbdc0a1bb087a9b52ef255673bbcbfbb454bd435f79e7b56cec","name":"Demigod's Eye","typeLine":"Golden Hoop","identified":true,"ilvl":100,"requirements":[{"name":"Level","values":[["12",0]],"displayMode":0}],"implicitMods":["+8 to all Attributes"],"explicitMods":["33% increased Mana Regeneration Rate","16% increased Rarity of Items found","3% increased Character Size"],"flavourText":["#5 Overall in One Month Hardcore Flashback Event"],"frameType":3,"x":0,"y":0,"inventoryId":"Ring"},
{"verified":false,"w":2,"h":3,"icon":"https://web.poecdn.com/image/Art/2DItems/Armours/Shields/DemigodsShieldAlt.png?v=26b5d682e63a0eba479baec14ee1f472&w=2&h=3&scale=1","league":"Hardcore","id":"3520051a8cb7e49cb1cff1c391d600e32a52bfe0f6830365b63ed9eb0335f050","sockets":[{"group":0,"attr":"S","sColour":"R"},{"group":0,"attr":"D","sColour":"G"},{"group":0,"attr":"S","sColour":"R"}],"name":"Demigod's Beacon","typeLine":"Golden Flame","identified":true,"ilvl":100,"properties":[{"name":"Chance to Block","values":[["20%",0]],"displayMode":0,"type":15}],"requirements":[{"name":"Level","values":[["15",0]],"displayMode":0}],"implicitMods":["+16% to Chaos Resistance"],"explicitMods":["Adds 10 to 20 Fire Damage to Attacks","12% increased Rarity of Items found","20% increased Light Radius"],"flavourText":["#4 Overall in the Hardcore Flashback Event"],"frameType":3,"x":0,"y":0,"inventoryId":"Offhand2","socketedItems":[]},

{"verified":false,"w":2,"h":2,"icon":"https://web.poecdn.com/image/Art/2DItems/Armours/Helmets/HelmetDexUnique2.png?v=3a1d216d1feccd885829f6dd4d0f1d5e&w=2&h=2&scale=1","league":"Hardcore","id":"159df31450ee2866d5479bf7c2268844ea7095aaa0b1f3959c16921357bc47f7","sockets":[{"group":0,"attr":"D","sColour":"G"},{"group":0,"attr":"D","sColour":"G"},{"group":1,"attr":"I","sColour":"B"}],"name":"Goldrim","typeLine":"Leather Cap","identified":true,"ilvl":82,"properties":[{"name":"Evasion Rating","values":[["49",1]],"displayMode":0,"type":17}],"explicitMods":["+30 to Evasion Rating","10% increased Rarity of Items found","+36% to all Elemental Resistances","Reflects 4 Physical Damage to Melee Attackers"],"flavourText":["No metal slips as easily through the fingers as gold."],"frameType":3,"x":0,"y":0,"inventoryId":"Helm","socketedItems":[]},
{"verified":false,"w":2,"h":2,"icon":"https://web.poecdn.com/image/Art/2DItems/Armours/Boots/Wanderlust.png?v=0ff39442b18a833e6f12db84fac2c28c&w=2&h=2&scale=1","league":"Hardcore","id":"b80dae2213087894b2131bf1d5c53bab8a8ed33dadd0dacddb31ef0b62d57ed8","sockets":[{"group":0,"attr":"G","sColour":"W"},{"group":0,"attr":"D","sColour":"G"},{"group":0,"attr":"S","sColour":"R"},{"group":0,"attr":"I","sColour":"B"}],"name":"Wanderlust","typeLine":"Wool Shoes","identified":true,"ilvl":68,"corrupted":true,"properties":[{"name":"Energy Shield","values":[["17",1]],"displayMode":0,"type":18}],"explicitMods":["+5 to Dexterity","+13 to maximum Energy Shield","21% increased Mana Regeneration Rate","20% increased Movement Speed","Cannot be Frozen"],"flavourText":["All the world is my home."],"frameType":3,"x":0,"y":0,"inventoryId":"Boots","socketedItems":[]},
{"verified":false,"w":1,"h":1,"icon":"https://web.poecdn.com/image/Art/2DItems/Rings/MoonstoneRingUnique.png?v=81a85c443c6efb3d4410836327242bb9&w=1&h=1&scale=1","league":"Hardcore","id":"56428f54806cece03bcc8b4e638dbf973676af46d7d4e76a21c345ae66d7e518","name":"Shavronne's Revelation","typeLine":"Moonstone Ring","identified":true,"ilvl":80,"requirements":[{"name":"Level","values":[["30",0]],"displayMode":0}],"implicitMods":["+15 to maximum Energy Shield"],"explicitMods":["+60 to Intelligence","Right ring slot: You cannot Regenerate Mana","Right ring slot: Regenerate 3% of Energy Shield per second","Left ring slot: You cannot Recharge or Regenerate Energy Shield","Left ring slot: 100% increased Mana Regeneration Rate"],"flavourText":["\"Shavronne held Sanity in her right\r","hand and Revelation in her left.\r","Brutus chose the left hand.\"\r","- Kadavrus, Surgeon to the Umbra"],"frameType":3,"x":0,"y":0,"inventoryId":"Ring2"},
{"verified":false,"w":2,"h":3,"icon":"https://web.poecdn.com/image/Art/2DItems/Armours/BodyArmours/TabulaRasa.png?v=c169e1ab88583925693bb3a35cc49b6b&w=2&h=3&scale=1","league":"Hardcore","id":"155270e540e4aa9a48ac9f1863c00fa4cc41192fc96a70882defb377a9a15532","sockets":[{"group":0,"attr":"G","sColour":"W"},{"group":0,"attr":"G","sColour":"W"},{"group":0,"attr":"G","sColour":"W"},{"group":0,"attr":"G","sColour":"W"},{"group":0,"attr":"G","sColour":"W"},{"group":0,"attr":"G","sColour":"W"}],"name":"Tabula Rasa","typeLine":"Simple Robe","identified":true,"ilvl":70,"frameType":3,"x":0,"y":0,"inventoryId":"BodyArmour","socketedItems":[]},
{"verified":false,"w":2,"h":2,"icon":"https://web.poecdn.com/image/Art/2DItems/Armours/Gloves/GlovesDexIntUnique1.png?v=7f0286e47d36b4c4a50966ae736e58c5&w=2&h=2&scale=1","league":"Hardcore","id":"86f17492306b44fe810839c058a6ffc77545e14ba9daebb0f2eee17668cde534","sockets":[{"group":0,"attr":"I","sColour":"B"},{"group":1,"attr":"S","sColour":"R"}],"name":"Facebreaker","typeLine":"Strapped Mitts","identified":true,"ilvl":72,"properties":[{"name":"Evasion Rating","values":[["30",0]],"displayMode":0,"type":17},{"name":"Energy Shield","values":[["6",0]],"displayMode":0,"type":18}],"requirements":[{"name":"Level","values":[["16",0]],"displayMode":0}],"explicitMods":["+60% to Global Critical Strike Multiplier","10% reduced Enemy Stun Threshold","600% more Physical Damage with Unarmed Attacks","Extra gore"],"flavourText":["Fly like a Storm Crow, crush like a Rhoa"],"frameType":3,"x":0,"y":0,"inventoryId":"Gloves","socketedItems":[]},
{"verified":false,"w":1,"h":1,"icon":"https://web.poecdn.com/image/Art/2DItems/Amulets/Amulet7.png?v=ecac1e6f4574572eeef0379d955811cd&w=1&h=1&scale=1","league":"Hardcore","id":"6c82f1e998f9ec1aa4b2988a3236082a0ffc2bd8f9d47bb985fe4b70cbc067c0","name":"","typeLine":"Onyx Amulet","identified":true,"ilvl":37,"requirements":[{"name":"Level","values":[["20",0]],"displayMode":0}],"implicitMods":["+10 to all Attributes"],"frameType":0,"x":0,"y":0,"inventoryId":"Amulet"},
{
  "verified": false,
  "w": 2,
  "h": 1,
  "icon": "https://web.poecdn.com/image/Art/2DItems/Belts/Belt3.png?v=a559821037f54c94dae053b90bcea363&w=2&h=1&scale=1",
  "league": "Hardcore",
  "id": "419a1b001c01d7069d86f0dadedc026a8fd1d9fef123424b49f5ff9cbc36b759",
  "name": "Onslaught Girdle",
  "typeLine": "Leather Belt",
  "identified": true,
  "ilvl": 72,
  "requirements": [
    {
      "name": "Level",
      "values": [
        [
          "54",
          0
        ]
      ],
      "displayMode": 0
    }
  ],
  "implicitMods": [
    "+35 to maximum Life"
  ],
  "explicitMods": [
    "15% reduced Enemy Stun Threshold",
    "+43 to maximum Energy Shield",
    "+99 to maximum Life",
    "+28% to Chaos Resistance",
    "31% increased Stun Duration on Enemies"
  ],
  "craftedMods": [
    "13% increased Flask Life Recovery rate"
  ],
  "frameType": 2,
  "x": 0,
  "y": 0,
  "inventoryId": "Belt"
},
{
  "verified": false,
  "w": 2,
  "h": 3,
  "icon": "https://web.poecdn.com/image/Art/2DItems/Weapons/OneHandWeapons/Daggers/VerdantGuardianSword2.png?v=8093c692366f590bb1628316202a63fa&w=2&h=3&scale=1",
  "league": "Heist",
  "id": "10fa537a9953c19589a6b2301eed209716f5ffaf1485d7d452d56c32879e0db3",
  "sockets": [
    {
      "group": 0,
      "attr": "D",
      "sColour": "G"
    },
    {
      "group": 0,
      "attr": "D",
      "sColour": "G"
    },
    {
      "group": 0,
      "attr": "S",
      "sColour": "R"
    }
  ],
  "name": "Beltimber Blade",
  "typeLine": "Eternal Sword",
  "identified": true,
  "ilvl": 83,
  "properties": [
    {
      "name": "One Handed Sword",
      "values": [],
      "displayMode": 0
    },
    {
      "name": "Quality",
      "values": [
        [
          "+28%",
          1
        ]
      ],
      "displayMode": 0,
      "type": 6
    },
    {
      "name": "Physical Damage",
      "values": [
        [
          "136-225",
          1
        ]
      ],
      "displayMode": 0,
      "type": 9
    },
    {
      "name": "Critical Strike Chance",
      "values": [
        [
          "5.00%",
          0
        ]
      ],
      "displayMode": 0,
      "type": 12
    },
    {
      "name": "Attacks per Second",
      "values": [
        [
          "1.79",
          1
        ]
      ],
      "displayMode": 0,
      "type": 13
    },
    {
      "name": "Weapon Range",
      "values": [
        [
          "11",
          0
        ]
      ],
      "displayMode": 0,
      "type": 14
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
      "displayMode": 0,
      "suffix": "(gem)"
    },
    {
      "name": "Str",
      "values": [
        [
          "155",
          0
        ]
      ],
      "displayMode": 1,
      "suffix": "(gem)"
    },
    {
      "name": "Dex",
      "values": [
        [
          "122",
          0
        ]
      ],
      "displayMode": 1
    },
    {
      "name": "Int",
      "values": [
        [
          "48",
          0
        ]
      ],
      "displayMode": 1,
      "suffix": "(gem)"
    }
  ],
  "implicitMods": [
    "+475 to Accuracy Rating"
  ],
  "explicitMods": [
    "203% increased Physical Damage",
    "19% increased Attack Speed",
    "80% increased Evasion Rating while moving",
    "Skills fire 2 additional Projectiles if you''ve used a Movement Skill Recently",
    "Far Shot"
  ],
  "flavourText": [
    "By wind and wing they are carried,\r",
    "Their fates not theirs to control,\r",
    "Yet the fates of others dragged in their wake."
  ],
  "frameType": 3,
  "x": 0,
  "y": 0,
  "inventoryId": "Weapon",
  "socketedItems": [
    {
      "verified": false,
      "w": 1,
      "h": 1,
      "icon": "https://web.poecdn.com/image/Art/2DItems/Gems/Support/enhance.png?v=b73522896f57347070e142debec35be8&w=1&h=1&scale=1",
      "support": true,
      "id": "b22d3f30957c146c8012e4cf1244158f26c22a165defe4ecf4a09d763faf408b",
      "name": "",
      "typeLine": "Enhance Support",
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
              "115%",
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
          "name": "Dex",
          "values": [
            [
              "73",
              0
            ]
          ],
          "displayMode": 1
        }
      ],
      "secDescrText": "Supports any skill gem. Once this gem reaches level 2 or above, will raise the quality of supported gems. Cannot support skills that don''t come from gems.",
      "explicitMods": [
        "This Gem gains 100% increased Experience",
        "+16% to Quality of Supported Active Skill Gems"
      ],
      "descrText": "This is a Support Gem. It does not grant a bonus to your character, but to skills in sockets connected to it. Place into an item socket connected to a socket containing the Active Skill Gem you wish to augment. Right click to remove from a socket.",
      "frameType": 4,
      "socket": 0,
      "colour": "D"
    },
    {
      "verified": false,
      "w": 1,
      "h": 1,
      "icon": "https://web.poecdn.com/image/Art/2DItems/Gems/Support/SecondWindSupport.png?v=69ddc81af19c809eff8a98e10fe9d3e7&w=1&h=1&scale=1",
      "support": true,
      "id": "8b69d6aaf30189e00a910604df20cf13e3a92bf4adad2a151960d77d78d8fc67",
      "name": "",
      "typeLine": "Second Wind Support",
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
              "125%",
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
              "70",
              0
            ]
          ],
          "displayMode": 1
        },
        {
          "name": "Int",
          "values": [
            [
              "48",
              0
            ]
          ],
          "displayMode": 1
        }
      ],
      "secDescrText": "Supports skills with cooldowns.\nCannot support triggered skills.",
      "explicitMods": [
        "Supported Skills have 29% increased Cooldown Recovery Rate",
        "Supported Non-Instant Skills have +1 Cooldown Use"
      ],
      "descrText": "This is a Support Gem. It does not grant a bonus to your character, but to skills in sockets connected to it. Place into an item socket connected to a socket containing the Active Skill Gem you wish to augment. Right click to remove from a socket.",
      "frameType": 4,
      "socket": 1,
      "colour": "D"
    },
    {
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
  ],
  "incubatedItem": {
    "name": "Rare Abyss Item",
    "level": 68,
    "progress": 7955,
    "total": 8924
  }
}
];

const Template = (args) => <Items {...args} />;

export default {
  title: 'Items',
  component: Items
};  


export const Inventory = Template.bind({});
Inventory.args = {
  items: items
};

