const connections = [4, 0, 0, 0, 2, 0];

const gems = [{socket: 1}, {socket: 2}, {socket: 4}, {socket: 5}]

const check = connections.map((con, index) => {
  if (gems.find(gem => gem.socket === index)) {
    return '<Con/> <Gem/>'
  } else {
    return '<Con/> <Empty/>'
  }
})

console.log(check)