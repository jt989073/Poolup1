import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPoolHalls } from "../../store/event";
import {useHistory} from 'react-router-dom'
import { createEvent } from "../../store/event";
import "./EventPage.css";


function CreateEventForm({setShowEventModal}) {
  const history = useHistory()
  const dispatch = useDispatch()
  const ownerId = useSelector(state => state.session.user?.id)
  const poolHalls = useSelector(state => state.event.poolHalls)
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [poolHall, setPoolHall] = useState(1)
  const [playerAmount, setPlayerAmount] = useState(1)
  const [errors, setErrors] = useState([])



  useEffect(() => {
    const errors = []
    if(name.length < 5) errors.push("Name must be longer than 5 characters")
    if(!date) errors.push("Please provide a date that is in the future")
    if(!poolHall) errors.push("Please provide a pool Hall locatiopn")
    setErrors(errors)
  }, [name, date, poolHall, errors])

  useEffect(() => {
    dispatch(getPoolHalls())
  }, [dispatch])


  const handleSubmit = async(e) => {
    e.preventDefault();
    const payload = {
      ownerId,
      poolHallId: poolHall,
      name,
      date,
      playerAmount,
    }
    let createdEvent = await dispatch(createEvent(payload))
    if (createdEvent){
      history.push(`/events/${createdEvent.id}`)
      setShowEventModal(false)
    }
  };


  return (
    <div className="createEventModal">
      <div className="modalHeader">
        <p>Create Event</p>
      </div>
      {errors.map(error => (
        <li key={error}>{error}</li>
      ))}
      <div>
        <form onSubmit={handleSubmit}>
          <div className="fieldDiv">
            <label>Event Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <select value={poolHall} onChange={(e) => setPoolHall(e.target.value)}>
          {poolHalls.map(poolHall =>
            <option value={poolHall.id} key={poolHall.id}>{poolHall.name}</option>
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
              onChange={(e) => setPlayerAmount(e.target.value)}
              required
            />
          </div>
          <div className="createEventButton">
            <button disabled={errors.length > 0}type="submit">Create Event</button>
          </div>
        </form>
      </div>
    </div>
  );
}


export default CreateEventForm;
