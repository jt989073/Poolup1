import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getOneEvent } from '../../store/event';
import { getPoolHalls } from '../../store/event';
import UpdateEventModal from '../UpdateEventModal';
import { deleteEvent } from '../../store/event';
import { useHistory } from 'react-router-dom';
import './SingleEvent.css'

const SingleEvent = () => {
  const {eventId} = useParams()
  const dispatch = useDispatch()
  const history = useHistory()

  const events = useSelector(state=>state.event)
  const event = events.list[eventId]
  const poolHall = event?.PoolHall
  const poolHallName = event?.PoolHall?.name
  const poolHallAddress = event?.PoolHall?.address
  const poolHallCity = event?.PoolHall?.city
  const poolHallState = event?.PoolHall?.state

// console.log(poolHallState)
  useEffect(() => {
    dispatch(getOneEvent(eventId))
    // dispatch(getPoolHalls(poolHall))
  }, [dispatch, eventId])

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
  </div>
)

}

export default SingleEvent
