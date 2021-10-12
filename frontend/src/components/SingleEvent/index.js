import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getOneEvent } from '../../store/event';


const SingleEvent = () => {
  const {eventId} = useParams()
  const dispatch = useDispatch()

  console.log('eventId>>>', eventId)

  const event = useSelector(state => {
    return state.event.list[eventId]
  })

  useEffect(() => {
    dispatch(getOneEvent(eventId))
  }, [dispatch, eventId])

return (
  <div className="single-event-container">
    <button className="edit-button">Edit Event</button>
    <button className="delete-button">Delete Event</button>
    <div className="event-name">{event?.name}</div>
    <div className="event-date">{event?.date}</div>
    <div className="event-date-poolHall">{event?.poolHallId}</div>
    <div className="event-playerAmount">{event?.playeAmount}</div>
  </div>
)

}

export default SingleEvent
