import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMyHostedEvents } from "../../store/event";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const HostingPage = () => {
  const { userId } = useParams();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false)

  const events = useSelector(state=> state.event.hosting.Events)

  useEffect(() => {
    dispatch(getMyHostedEvents(userId)).then(() => setIsLoading(true));
  }, [dispatch]);

  if(isLoading){
  return (
    <main className="event-page">
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
  } else {
    return null
  }

};

export default HostingPage;
