import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getOneEvent } from "../../store/event";
import { getPoolHalls } from "../../store/event";
import { getRSVPS } from "../../store/event";
import UpdateEventModal from "../UpdateEventModal";
import { createAttendingEvent } from "../../store/event";
import { deleteEvent } from "../../store/event";
import { useHistory } from "react-router-dom";
import "./SingleEvent.css";

const SingleEvent = () => {
  const { eventId } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  const userId = useSelector((state) => state.session.user.id);

  const events = useSelector((state) => state.event);
  const event = events.list[eventId];
  const poolHall = event?.PoolHall;
  const poolHallName = event?.PoolHall?.name;
  const poolHallAddress = event?.PoolHall?.address;
  const poolHallCity = event?.PoolHall?.city;
  const poolHallState = event?.PoolHall?.state;
  const rsvpArr = useSelector((state) => state?.event?.rsvps);
  const attendees = rsvpArr.length;
  console.log(">>>>", attendees);

  useEffect(() => {
    dispatch(getOneEvent(eventId));
    dispatch(getRSVPS(eventId));
  }, [dispatch, eventId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      eventId,
      userId,
    };
    let createdRSVP = await dispatch(createAttendingEvent(payload, eventId));
    if (createdRSVP) {
      history.push(`/users/${userId}/attending`);
    }
  };

  return (
    <div className="single-event-container">
      <div className="update-delete-container">
        <UpdateEventModal />
        <button
          onClick={() => {
            dispatch(deleteEvent(eventId));
            history.push("/events");
          }}
          className="delete-button"
        >
          Delete Event
        </button>
      </div>
      <div className="event-info-container">
        <div className="event-info">
          <h2 className="event-name">{event?.name}</h2>
          <div className="event-date">
            {new Date(event?.date).toLocaleDateString("en-US", {
              weekday: "short",
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "numeric",
              minute: "numeric",
            })}
          </div>
          <img className="event-image" src={event?.image} alt="" />
          <div>{` ${attendees} / ${event?.playerAmount} people attending`}</div>
          <div className="event-date-poolHall">
            <div>{poolHallName}</div>
            <div>{poolHallAddress}</div>
            <div>{poolHallCity}</div>
            <div>{poolHallState}</div>
          </div>
          <div className="event-playerAmount">{event?.playeAmount}</div>
          <button className="RSVP-button" onClick={handleSubmit}>
            RSVP
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleEvent;
