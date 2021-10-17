import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMyAttendingEvents } from "../../store/event";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { deleteAttendingEvent } from "../../store/event";
import "./Attending.css"

const AttendingPage = () => {
  const { userId } = useParams();
  const dispatch = useDispatch();


  const events = useSelector(state=> state.event.attending)

  console.log(events)


  useEffect(() => {
    dispatch(getMyAttendingEvents(userId));
  }, [dispatch]);

  const handleDelete = (event) => {
    dispatch(deleteAttendingEvent(userId, event.id))
  }

  return (
    <main className="attending-event-page">
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
          <button onClick={() => handleDelete(event)}>Cancel RSVP</button>
      </div>)
      }
    </div>
  </main>
)
};

export default AttendingPage;
