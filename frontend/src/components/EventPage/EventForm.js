import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPoolHalls } from "../../store/event";
import "./EventPage.css";


function CreateEventForm() {
  const dispatch = useDispatch()
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [playerAmount, setPlayerAmount] = useState(0)
  const poolHalls = useSelector(state => state.event.poolHalls)


  useEffect(() => {
    dispatch(getPoolHalls())
  }, [dispatch])

  //TODO ownerid for create event
  //TODO location for create event

  const handleSubmit = () => {};

  return (
    <div className="createEventModal">
      <div className="modalHeader">
        <p>Create Event</p>
      </div>
      <div>
        <form>
          <div className="fieldDiv">
            <label>Event Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <select>
          {poolHalls.map(poolHall =>
            <option key={poolHall.id}>{poolHall.name}</option>
          )}
        </select>
          <div className="fieldDiv">
            <label>Date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>
          <div className="fieldDiv">
            <label>Player Amount</label>
            <input
              type="number"
              value={playerAmount}
              onChange={(e) => setPlayerAmount(e.target.value)}
              required
            />
          </div>
          <div className="createEventButton">
            <button type="submit">Create Event</button>
          </div>
        </form>
      </div>
    </div>
  );
}


export default CreateEventForm;
