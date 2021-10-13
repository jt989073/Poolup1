import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMyAttendingEvents } from "../../store/event";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const AttendingPage = () => {
  const { userId } = useParams();
  const dispatch = useDispatch();

  const events = useSelector(state=> state.event.attending)

  console.log(events)


  useEffect(() => {
    dispatch(getMyAttendingEvents(userId));
  }, [dispatch]);

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
};

export default AttendingPage;


// case ADD_ONE:
//   case UPDATE_EVENT: {
//     const newList = { ...state.list };
//     newList[action.event.id] = action.event;
//     const newState = {
//       ...state,
//       list: newList,
//     };
//     return newState;
//   }
//   case LOAD_LOCATIONS: {
//     return {
//       ...state,
//       locations: action.location,
//     };
//   }
//   case LOAD_TYPES: {
//     return {
//       ...state,
//       types: action.types,
//     };
//   }
//   case LOAD_ATTENDING: {
//     const newState = { ...state };
//     newState.attending = action.events.events;
//     return newState;
//   }
//   case LOAD_HOSTING: {
//     const newState = { ...state };
//     newState.hosting = action.list.events.events;
//     return newState;
//   }
//   case DELETE_EVENT: {
//     const newState = { ...state };
//     const newList = { ...newState.list };
//     delete newList[action.eventId];
//     newState.list = newList;
//     return newState;
//   }
//   default:
//     return state;
// }
// };

// export default eventReducer;
