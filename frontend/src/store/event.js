const LOAD = 'event/LOAD';
const ADD_ONE = 'event/ADD_ONE'

const load = (list) => ({
  type: LOAD,
  list,
});

const addEvent = event => ({
  type: ADD_ONE,
  event
})

export const getEvents = () => async (dispatch) => {
  const res = await fetch("/api/events");
  console.log(res)
  if (res.ok) {
    const listEvents = await res.json();
    dispatch(load(listEvents));
  }
};

export const createEvent = (payload) => async (dispatch) => {
  const res = await fetch('/api/events', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(payload)
  })

  if (res.ok){
    const newEvent = await res.json()
    dispatch(addEvent(newEvent))
  }
}

const initialState = {
  list: [],
  types: [],
};

// TODO: sort list by createdAt

const eventReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD: {
      const allEvents = {};
      action.list.forEach((event) => {
        allEvents[event.id] = event;
      });
      return {
        ...allEvents,
        ...state,
        list: action.list
      }
    }
    case ADD_ONE: {
      if (!state[action.event.id]){
        const newState = {
          ...state,
          [action.event.id]: action.event,
        }
        const eventList = newState.list.map(id => newState[id])
        eventList.push(action.event)
        return newState;
      }
      return {
        ...state,
        [action.event.id]: {
          ...state[action.event.id],
          ...action.event
        }
      }
    }
    default:
      return state;
  }
};

export default eventReducer;
