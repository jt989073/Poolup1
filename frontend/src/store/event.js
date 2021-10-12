import { csrfFetch } from './csrf';

const LOAD = 'event/LOAD';
const ADD_ONE = 'event/ADD_ONE'
const LOAD_POOLHALLS = 'event/LOAD_POOLHALLS'

const load = list => ({
  type: LOAD,
  list,
});

const addEvent = event => ({
  type: ADD_ONE,
  event
})

const loadPoolHalls = poolHalls => ({
  type: LOAD_POOLHALLS,
  poolHalls
})


export const getEvents = () => async (dispatch) => {
  const res = await csrfFetch("/api/events");
  console.log(res)
  if (res.ok) {
    const listEvents = await res.json();
    dispatch(load(listEvents));
  }
};

export const getOneEvent = (id) => async dispatch => {
  const res = await csrfFetch(`/api/events/${id}`)

  if (res.ok) {
    const event = await res.json()
    dispatch(addEvent(event))
    return event
  }
}

export const editEvent = (payload) => async dispatch => {
  const res = csrfFetch(`/api/events/${payload.id}`, {
    method: 'PUT',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(payload)
  })

  if(res.ok){
    const updateEvent = await res.json()
    dispatch(addEvent(updateEvent))
    return updateEvent
  }
}


export const createEvent = (payload) => async (dispatch) => {
  const res = await csrfFetch('/api/events', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(payload)
  })

  if (res.ok){
    const newEvent = await res.json()
    dispatch(addEvent(newEvent))
    return newEvent
  }
}

export const getPoolHalls = () => async dispatch => {
  const res = await csrfFetch(`/api/poolHalls`)

  if(res.ok) {
    const poolHalls = await res.json();
    dispatch(loadPoolHalls(poolHalls))
    return poolHalls
  }
}

const initialState = {
  list: [],
  poolHalls: [],
};

// TODO: sort list by createdAt

const eventReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD: {
      const allEvents = {};
      action.list.forEach((event) => {
        allEvents[event.id] = event;
      });
      return {...state, list: allEvents}
    }
    case ADD_ONE: {
      const newList = {...state.list}
        newList[action.event.id] = action.event
      const newState = {
          ...state,
          list: newList,
        }
        return newState;
    }
    case LOAD_POOLHALLS: {
      return {
        ...state,
        poolHalls: action.poolHalls
      }
    }
    default:
      return state;
  }
};

export default eventReducer;
