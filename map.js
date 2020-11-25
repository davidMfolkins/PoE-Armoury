const gems = [1, 2, 3, 4, 5, 6]

const connections = [4, 0, 0, 0, 2, 0];
const render = function () {



  const gem = gems.map((gem, index) => {
  
  // all the logic that currently exists

  if (connections[index]) {
    return '<td rowspan={connections[index]}><Skill/>'
  } else {
    return '<Skill/>'
  }
  })

  return gem




}

console.log(render())
