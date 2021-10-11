import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEvents } from "../../store/event";

const EventPage = () => {
  const dispatch = useDispatch()

  const events = useSelector(state => {
    console.log("events>>>", state.event.list)
    return state.event.list.map(eventId=> eventId.name)
  })


useEffect(()=> {
  dispatch(getEvents())
}, [dispatch])

if(!events){
  return null
}

  return (
    <main>
      <ul>
      {events.map(event => <li>{`${event}`}</li>)}
      </ul>
    </main>
  )
};

export default EventPage;
