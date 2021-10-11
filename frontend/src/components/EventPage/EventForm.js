import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./EventPage.css";


function CreateEventForm() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("YYYY/MM/DD");
  const [playerAmount, setPlayerAmount] = useState(0)


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
