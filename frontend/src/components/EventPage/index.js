import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEvents } from "../../store/event";
import CreateEventModal from "../CreateEventModal";

const EventPage = () => {
  const dispatch = useDispatch()

  const events = useSelector(state => {
    return Object.values(state.event.list)
  })


useEffect(()=> {
  dispatch(getEvents())
}, [dispatch])

if(!events){
  return null
}

  return (
    <main className="event-page">
      <CreateEventModal />
      <div>
      {events.map(event =>
      <div className="event-container" key={event.id}>
        <div className="event">{`${event.name}`}</div>
        <div className="event">
        {new Date(event.date).toLocaleDateString("en-US", {
              weekday: "short",
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "numeric",
              minute: "numeric",
            })}
          </div>
      </div>)
      }
      </div>
    </main>
  )
};

export default EventPage;
