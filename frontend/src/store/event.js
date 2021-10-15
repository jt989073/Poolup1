import { csrfFetch } from "./csrf";

const LOAD = "event/LOAD";
const ADD_ONE = "event/ADD_ONE";
const LOAD_POOLHALLS = "event/LOAD_POOLHALLS";
const DELETE = "event/DELETE";
const LOAD_ATTENDING = "event/LOAD_ATTENDING";
const LOAD_HOSTING = "event/LOAD_HOSTING";
const ADD_RSVP = "event/ADD_RSVP"
const DELETE_RSVP = "event/DELETE_RSVP"

const load = (list) => ({
  type: LOAD,
  list,
});

const loadAttending = (events) => ({
  type: LOAD_ATTENDING,
  events,
});

const loadHosting = (events) => ({
  type: LOAD_HOSTING,
  events,
});

const addEvent = (event) => ({
  type: ADD_ONE,
  event,
});

const addRSVP = (event) => ({
  type: ADD_RSVP,
  event
})

const loadPoolHalls = (poolHalls) => ({
  type: LOAD_POOLHALLS,
  poolHalls,
});

const deleteOne = (eventId) => ({
  type: DELETE,
  eventId,
});

const deleteRSVP = (eventId) => ({
  type: DELETE_RSVP,
  eventId,
});

export const getEvents = () => async (dispatch) => {
  const res = await csrfFetch("/api/events");
  if (res.ok) {
    const listEvents = await res.json();
    dispatch(load(listEvents));
  }
};

export const getOneEvent = (id) => async (dispatch) => {
  const res = await csrfFetch(`/api/events/${id}`);

  if (res.ok) {
    const event = await res.json();
    dispatch(addEvent(event));
    return event;
  }
};

export const getMyHostedEvents = (id) => async (dispatch) => {
  const res = await csrfFetch(`/api/users/${id}/hosting`);
  if (res.ok) {
    const listEvents = await res.json();
    dispatch(loadHosting(listEvents));
  }
};

export const getMyAttendingEvents = (id) => async (dispatch) => {
  const res = await csrfFetch(`/api/users/${id}/attending`);
  if (res.ok) {
    const listEvents = await res.json();
    dispatch(loadAttending(listEvents.reservations));
  }
};

export const createAttendingEvent = (payload, id) => async (dispatch) => {
  const res = await csrfFetch(`/api/users/${id}/attending`, {
    method: 'POST',
    headers: {'Content-Type': "application/json"},
    body: JSON.stringify(payload)
  })
  if(res.ok){
    const createdRSVP = res.json()
    dispatch(addRSVP(createdRSVP))
    return createdRSVP
  }
}

export const deleteAttendingEvent = (userId, eventId) => async (dispatch) => {
  const res = await csrfFetch(`/api/users/${userId}/attending/${eventId}`, {
    method: 'DELETE'
  })
  if (res.ok){
    const deletedRSVP = res.json()
    dispatch(deleteRSVP(eventId))
  }
}

export const editEvent = (payload) => async (dispatch) => {
  const res = await csrfFetch(`/api/events/${payload.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (res.ok) {
    const updateEvent = await res.json();
    dispatch(addEvent(updateEvent));
    return updateEvent;
  }
};

export const createEvent = (payload) => async (dispatch) => {
  const res = await csrfFetch("/api/events", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (res.ok) {
    const newEvent = await res.json();
    dispatch(addEvent(newEvent));
    return newEvent;
  }
};

export const deleteEvent = (eventId) => async (dispatch) => {
  const res = await csrfFetch(`/api/events/${eventId}`, {
    method: "delete",
  });

  if (res.ok) {
    const { eventId } = await res.json();
    dispatch(deleteOne(eventId));
  }
};

export const getPoolHalls = () => async (dispatch) => {
  const res = await csrfFetch(`/api/poolHalls`);

  if (res.ok) {
    const poolHalls = await res.json();
    dispatch(loadPoolHalls(poolHalls));
    return poolHalls;
  }
};

const initialState = {
  list: [],
  poolHalls: [],
  attending: [],
  hosting: [],
};

const eventReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD: {
      const allEvents = {};
      action.list.forEach((event) => {
        allEvents[event.id] = event;
      });
      return { ...state, list: allEvents };
    }
    case LOAD_ATTENDING: {
      const newState = { ...state };
      newState.attending = action.events;
      return newState;
    }
    case LOAD_HOSTING: {
      const newState = { ...state };
      newState.hosting = action.events;
      return newState;
    }
    case ADD_ONE: {
      const newState = { ...state };
      newState.list[action.event.id] = action.event;
      return newState;
    }
    case LOAD_POOLHALLS: {
      return {
        ...state,
        poolHalls: action.poolHalls,
      };
    }
    case DELETE: {
      const newState = { ...state };
      delete newState.list[action.eventId];
      return newState;
    }
    case ADD_RSVP: {
      const newState = {...state}
      newState.attending.push(action.event)
      return newState
    }
    case DELETE_RSVP: {
      const newState = {...state}
      const newArr = newState.attending.filter(rsvp => rsvp.id !== action.eventId)
      newState.attending = newArr
      return newState
    }
    default:
      return state;
  }
};

export default eventReducer;
