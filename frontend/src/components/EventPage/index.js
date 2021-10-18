import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEvents } from "../../store/event";
import CreateEventModal from "../CreateEventModal";
import { Link } from "react-router-dom";

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
      <div className="event-page-container">
        {events.map(event =>
        <div className="event-container" key={event.id}>
          <Link to={`/events/${event.id}`}>
            <img className="event-image" src={event.image} alt=""/>
          </Link>
          <p className="event">{`${event.name}`}</p>
          <p className="event">
          {new Date(event.date).toLocaleDateString("en-US", {
                weekday: "short",
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "numeric",
                minute: "numeric",
              })}
            </p>
        </div>)
        }
      </div>
    </main>
  )
};

export default EventPage;
