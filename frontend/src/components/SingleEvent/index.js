import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getOneEvent } from '../../store/event';


const SingleEvent = () => {
  const {eventId} = useParams()
  const dispatch = useDispatch()

  const events = useSelector(state => {
    return Object.values(state.event.list[eventId])
  })




return (
  <h1>hello world</h1>
)

}

export default SingleEvent
