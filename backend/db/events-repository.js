const {Event} = require("./models")
const {PoolHall} = require('./models')

const listEvents = async () => {
  return await Event.findAll({include: PoolHall})
}

const createEvent = async (details) => {
  return await Event.create(details)
}

const getOneEvent = async (id) => {
 return await Event.findByPk(id, {include: PoolHall})
}

const update = async (details) => {
  const id = details.id;
  delete details.id
  await Event.update(
    details,
    {
      where: {id},
      returning: true,
      plain: true
    }
  )
  return id;
}

const deleteEvent = async (eventId) => {
  const event = await Event.findByPk(eventId)
  if(!event) throw new Error('Event does not exist')

  await Event.destroy({where: {id: event.id}})
  return event.id
}


module.exports = {
  listEvents,
  createEvent,
  getOneEvent,
  update,
  deleteEvent
};
