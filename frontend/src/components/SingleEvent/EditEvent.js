import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPoolHalls } from "../../store/event";
import {useHistory} from 'react-router-dom'
import { createEvent } from "../../store/event";


function EditEventForm({setShowEditEventModal}) {
  const history = useHistory()
  const dispatch = useDispatch()
  const ownerId = useSelector(state => state.session.user?.id)
  const poolHalls = useSelector(state => state.event.poolHalls)
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [poolHall, setPoolHall] = useState(1)
  const [playerAmount, setPlayerAmount] = useState(1)


  const updateName = (e) => setName(e.target.value);
  const updateDate = (e) => setDate(e.target.value)
  const updatePoolHall = (e) => setPoolHall(e.target.value)
  const updatePlayerAmount = (e) => setPlayerAmount(e.target.value)


//TODO: add useState for location

  const handleSubmit = async(e) => {
    e.preventDefault();
    const payload = {
      ownerId,
      poolHallId: poolHall,
      name,
      date,
      playerAmount,
    }
    let updatedEvent = await dispatch(createEvent(payload))
    if (updatedEvent){
      setShowEditEventModal(false)
    }
  };

    // console.log(poolHall)
  return (
    <div className="createEventModal">
      <div className="modalHeader">
        <p>Update Event</p>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="fieldDiv">
            <label>Event Name</label>
            <input
              type="text"
              value={name}
              onChange={updateName}
              required
            />
          </div>
          <select value={poolHall} onChange={updateDate}>
          {poolHalls.map(poolHall =>
            <option value={poolHall.id} key={poolHall.id}>{poolHall.name}</option>
          )}
        </select>
          <div className="fieldDiv">
            <label>Date</label>
            <input
              type="date"
              value={date}
              onChange={updatePoolHall}
              required
            />
          </div>
          {/* <div className="fieldDiv">
            <label>image</label>
            <input
              type="file"
              // value={date}
              // onChange={(e) => setDate(e.target.value)}
              required
            />
          </div> */}
          <div className="fieldDiv">
            <label>Player Amount</label>
            <input
              type="number"
              value={playerAmount}
              onChange={updatePlayerAmount}
              required
            />
          </div>
          <div className="update-Button">
            <button type="submit">Update Event</button>
          </div>
        </form>
      </div>
    </div>
  );
}


export default EditEventForm;
