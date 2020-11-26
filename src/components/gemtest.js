
  const finalArray = [1, 2, 0]

  const gems = [
    {
      "verified": false,
      "w": 1,
      "h": 1,
      "icon": "https://web.poecdn.com/image/Art/2DItems/Gems/Support/enhance.png?v=b73522896f57347070e142debec35be8&w=1&h=1&scale=1",
      "support": true,
      "id": "4b2f5ddf38c9c8ee36ec8db5176112a2528239f87829a9e84e9d8641d3fa2ea3",
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
              "698600133/1439190228",
              0
            ]
          ],
          "displayMode": 2,
          "progress": 0.48541194200515747,
          "type": 20
        }
      ],
      "secDescrText": "Supports any skill gem. Once this gem reaches level 2 or above, will raise the quality of supported gems. Cannot support skills that don''t come from gems.",
      "explicitMods": [
        "This Gem gains 100% increased Experience",
        "+8% to Quality of Supported Active Skill Gems"
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
      "icon": "https://web.poecdn.com/image/Art/2DItems/Gems/MoltenShell.png?v=e8e7e6c0bf2ddaf50de0856a8b4abca8&w=1&h=1&scale=1",
      "support": false,
      "id": "88e0d355980fcea883a33afb9571296f30374c03cb7847d68ffe88f916f4163f",
      "name": "",
      "typeLine": "Molten Shell",
      "identified": true,
      "ilvl": 0,
      "properties": [
        {
          "name": "Spell, AoE, Duration, Fire, Physical, Guard",
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
              "12",
              0
            ]
          ],
          "displayMode": 0
        },
        {
          "name": "Cooldown Time",
          "values": [
            [
              "4.00 sec",
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
      "secDescrText": "Applies a buff that adds to your armour, and can take some of the damage from hits for you before being depleted. When the buff expires or is depleted, the skill deals reflected damage to enemies around you based on the total damage that was taken from the buff. Shares a cooldown with other Guard skills.",
      "explicitMods": [
        "Base duration is 3.00 seconds",
        "20% increased Skill Effect Duration",
        "This Skill''s Cooldown does not recover during its effect",
        "75% of Damage from Hits is taken from the Buff before your Life or Energy Shield\nBuff can take Damage equal to 20% of your Armour, up to a maximum of 10000",
        "Reflects 3000% of Damage taken from Buff as Fire Damage when Buff expires or is depleted",
        "Buff grants +858 to Armour"
      ],
      "descrText": "Place into an item socket of the right colour to gain this skill. Right click to remove from a socket.",
      "frameType": 4,
      "socket": 2,
      "colour": "S"
    }
  ]

  finalArray.map((connections, index) => {

    const gem = gems.find(g => g.socket === index)

    if (gems.some(g => g.socket === index)) {
      console.log(connections, gem.socket)
    } else {
      console.log(connections, "x")
    }
  })

  // 1 gem
  // 2 x
  // 0 gem