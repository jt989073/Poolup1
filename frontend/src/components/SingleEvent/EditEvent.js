import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPoolHalls } from "../../store/event";
import {useHistory} from 'react-router-dom'
import { createEvent } from "../../store/event";
import { editEvent } from "../../store/event";
import {useParams} from 'react-router-dom'


function EditEventForm({setShowEditEventModal}) {
  const {eventId} = useParams()
  const history = useHistory()
  const dispatch = useDispatch()
  const ownerId = useSelector(state => state.session.user?.id)

  const events = useSelector(state => state.event)
  const event = events.list[eventId]


  const poolHalls = useSelector(state => state.event.poolHalls)
  const [name, setName] = useState(event?.name);
  const [date, setDate] = useState(event?.date);
  const [poolHall, setPoolHall] = useState(1)
  const [playerAmount, setPlayerAmount] = useState(1)


  const updateName = (e) => setName(e.target.value);
  const updateDate = (e) => setDate(e.target.value)
  const updatePoolHall = (e) => setPoolHall(e.target.value)
  const updatePlayerAmount = (e) => setPlayerAmount(e.target.value)


  const handleSubmit = async(e) => {
    e.preventDefault();
    const payload = {
      ...event,
      ownerId,
      poolHallId: poolHall,
      name,
      date,
      playerAmount,
    }
    let updatedEvent = await dispatch(editEvent(payload))
    console.log(updatedEvent)
    if (updatedEvent){
    }
    setShowEditEventModal(false)
  };


  useEffect(() => {
    dispatch(getPoolHalls())
  }, [dispatch])

  return(
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
          <select value={poolHall} onChange={updatePoolHall}>
          {poolHalls.map(poolHall =>
            <option value={poolHall.id} key={poolHall.id}>{poolHall.name}</option>
          )}
        </select>
          <div className="fieldDiv">
            <label>Date</label>
            <input
              type="date"
              value={date}
              onChange={updateDate}
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
