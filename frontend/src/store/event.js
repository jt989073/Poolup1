const LOAD = "event/LOAD";

const load = (list) => ({
  type: LOAD,
  list,
});

export const getEvents = () => async (dispatch) => {
  const res = await fetch("/api/events");
  console.log(res)
  if (res.ok) {
    const listEvents = await res.json();
    dispatch(load(listEvents));
  }
};

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
    default:
      return state;
  }
};

export default eventReducer;
