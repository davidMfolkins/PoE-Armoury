import React from 'react';
import Flasks from '../components/Flasks'

const flasks = [
  {"verified":false,"w":1,"h":2,"icon":"https://web.poecdn.com/gen/image/WzksMTQseyJmIjoiMkRJdGVtc1wvRmxhc2tzXC9saWZlZmxhc2sxMW9sZCIsInciOjEsImgiOjIsInNjYWxlIjp0cnVlLCJsZXZlbCI6MX1d/6cb90911ad/Item.png","league":"Standard","id":"94a416713049b436d1eb810be996112e1e9908c5ff91d0dcebcc5da43f1a34d2","name":"","typeLine":"Saturated Eternal Life Flask of Staunching","identified":true,"ilvl":80,"properties":[{"name":"Quality","values":[["+20%",1]],"displayMode":0,"type":6},{"name":"Recovers {0} Life over {1} Seconds","values":[["3744",1],["6.00",1]],"displayMode":3},{"name":"Consumes {0} of {1} Charges on use","values":[["15",0],["45",0]],"displayMode":3},{"name":"Currently has {0} Charges","values":[["45",0]],"displayMode":3}],"requirements":[{"name":"Level","values":[["65",0]],"displayMode":0}],"explicitMods":["50% increased Amount Recovered","33% reduced Recovery rate","Immunity to Bleeding during Flask effect\nRemoves Bleeding on use"],"descrText":"Right click to drink. Can only hold charges while in belt. Refills as you kill monsters.","frameType":1,"x":2,"y":0,"inventoryId":"Flask"},
  {"verified":false,"w":1,"h":2,"icon":"https://web.poecdn.com/gen/image/WzksMTQseyJmIjoiMkRJdGVtc1wvRmxhc2tzXC9saWZlZmxhc2sxMW9sZCIsInciOjEsImgiOjIsInNjYWxlIjp0cnVlLCJsZXZlbCI6MX1d/6cb90911ad/Item.png","league":"Standard","id":"ae39efaad921a9b45cc6aab034433c2264b854a9526bbfa4662084ae76304bbf","name":"","typeLine":"Saturated Eternal Life Flask of Heat","identified":true,"ilvl":78,"properties":[{"name":"Quality","values":[["+20%",1]],"displayMode":0,"type":6},{"name":"Recovers {0} Life over {1} Seconds","values":[["3744",1],["6.00",1]],"displayMode":3},{"name":"Consumes {0} of {1} Charges on use","values":[["15",0],["45",0]],"displayMode":3},{"name":"Currently has {0} Charges","values":[["45",0]],"displayMode":3}],"requirements":[{"name":"Level","values":[["65",0]],"displayMode":0}],"explicitMods":["50% increased Amount Recovered","33% reduced Recovery rate","Immunity to Freeze and Chill during Flask effect\nRemoves Freeze and Chill on use"],"descrText":"Right click to drink. Can only hold charges while in belt. Refills as you kill monsters.","frameType":1,"x":3,"y":0,"inventoryId":"Flask"},
  {"verified":false,"w":1,"h":2,"icon":"https://web.poecdn.com/gen/image/WzksMTQseyJmIjoiMkRJdGVtc1wvRmxhc2tzXC9zcHJpbnQiLCJ3IjoxLCJoIjoyLCJzY2FsZSI6dHJ1ZSwibGV2ZWwiOjF9XQ/5d974e29ea/Item.png","league":"Standard","id":"ed1f7191db592866fc75d263c98e7dc04ca120c5615b55d5609ca78271f331db","name":"","typeLine":"Ample Quicksilver Flask of Adrenaline","identified":true,"ilvl":77,"properties":[{"name":"Quality","values":[["+20%",1]],"displayMode":0,"type":6},{"name":"Lasts {0} Seconds","values":[["4.80",1]],"displayMode":3},{"name":"Consumes {0} of {1} Charges on use","values":[["20",0],["65",1]],"displayMode":3},{"name":"Currently has {0} Charges","values":[["65",0]],"displayMode":3}],"requirements":[{"name":"Level","values":[["4",0]],"displayMode":0}],"utilityMods":["40% increased Movement Speed"],"explicitMods":["+15 to Maximum Charges","28% increased Movement Speed during Flask effect"],"descrText":"Right click to drink. Can only hold charges while in belt. Refills as you kill monsters.","frameType":1,"x":4,"y":0,"inventoryId":"Flask"}
]

const Template = (args) => <Flasks {...args} />;

export default {
  title: 'Flasks',
  component: Flasks
};  


export const Primary = Template.bind({});
Primary.args = {
  items: flasks
};