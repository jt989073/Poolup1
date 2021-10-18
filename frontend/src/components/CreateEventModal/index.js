import React, {  useState } from "react";
import { Modal } from "../../context/Modal";
// import { useDispatch, useSelector } from "react-redux";
import CreateEventForm from "../EventPage/EventForm";

const CreateEventModal = () => {
  const [showEventModal, setShowEventModal] = useState(false)

  return(
    <div className="create-event-button-container">
      <button className="create-event-button" onClick={() => setShowEventModal(true)}>Create Event</button>
      {showEventModal && (
        <Modal onClose={() => setShowEventModal(false)} >
          <CreateEventForm setShowEventModal={setShowEventModal} />
        </Modal>
      )}
    </div>
  )
}

export default CreateEventModal
