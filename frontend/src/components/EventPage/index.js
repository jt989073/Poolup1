import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEvents } from "../../store/event";
import CreateEventModal from "../CreateEventModal";

const EventPage = () => {
  const dispatch = useDispatch()

  const events = useSelector(state => {
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
      <CreateEventModal />
      <ul>
      {events.map(event => <li>{`${event}`}</li>)}
      </ul>
    </main>
  )
};

export default EventPage;
