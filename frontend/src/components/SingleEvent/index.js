import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getOneEvent } from '../../store/event';
import { getPoolHalls } from '../../store/event';
import UpdateEventModal from '../UpdateEventModal';
import { createAttendingEvent } from '../../store/event';
import { deleteEvent } from '../../store/event';
import { useHistory } from 'react-router-dom';
import './SingleEvent.css'

const SingleEvent = () => {
  const {eventId} = useParams()
  const dispatch = useDispatch()
  const history = useHistory()


  const userId = useSelector(state=> state.session.user.id)


  const events = useSelector(state=>state.event)
  const event = events.list[eventId]
  const poolHall = event?.PoolHall
  const poolHallName = event?.PoolHall?.name
  const poolHallAddress = event?.PoolHall?.address
  const poolHallCity = event?.PoolHall?.city
  const poolHallState = event?.PoolHall?.state

console.log('>>>>>>>', eventId)
  useEffect(() => {
    dispatch(getOneEvent(eventId))
  }, [dispatch, eventId])

  // const handleSubmit = async(e) => {
  //   e.preventDefault();
  //   const payload = {
  //     ownerId,
  //     poolHallId: poolHall,
  //     name,
  //     date,
  //     playerAmount,
  //   }
  //   let createdEvent = await dispatch(createEvent(payload))
  //   if (createdEvent){
  //     history.push(`/events/${createdEvent.id}`)
  //     setShowEventModal(false)
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = {
      eventId,
      userId
    }
    let createdRSVP = await dispatch(createAttendingEvent(payload, eventId))
    if (createdRSVP) {
      history.push(`/users/${userId}/attending`)
    }
  }

return (
  <div className="single-event-container">
    <UpdateEventModal />
    <button onClick={() =>{
      dispatch(deleteEvent(eventId))
      history.push('/events')
      }} className="delete-button">Delete Event</button>
    <div className="event-name">{event?.name}</div>
    <div className="event-date">{event?.date}</div>
    <div className="event-date-poolHall">
      <div>
        {poolHallName}
      </div>
      <div>
        {poolHallAddress}
      </div>
      <div>
        {poolHallCity}
      </div>
      <div>
        {poolHallState}
      </div>
    </div>
    <div className="event-playerAmount">{event?.playeAmount}</div>
    <button onClick={handleSubmit}>RSVP</button>
  </div>
)

}

export default SingleEvent
