import React, { useEffect, useState } from "react";
import { Modal } from "../../context/Modal";
import { useDispatch, useSelector } from "react-redux";
import "./UpdateEventModal.css"

import EditEventForm from "../SingleEvent/EditEvent";

const UpdateEventModal = () => {
  const [showEditEventModal, setShowEditEventModal] = useState(false)


  return(
    <div className="update-event-button=container">
      <button value="showEditEventModal" className="update-event-button" onClick={() => setShowEditEventModal(true)}>Update Event</button>
      {showEditEventModal && (
        <Modal onClose={() => setShowEditEventModal(false)} >
          <EditEventForm setShowEditEventModal={setShowEditEventModal} />
        </Modal>
      )}
    </div>
  )
}

export default UpdateEventModal
