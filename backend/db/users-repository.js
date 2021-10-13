const {Event} = require("./models")
const {RSVP} = require('./models')
const {User} = require('./models')

const listMyEvents = async (userId) => {
  return await User.findAll(
    {
    where: userId,
    include: {model: Event} //
  }
  )
}



module.exports={
  listMyEvents
}
