const {PoolHall} = require('./models')

const listPoolHalls = async () => {
  return await PoolHall.findAll()
}

module.exports={
  listPoolHalls
}
