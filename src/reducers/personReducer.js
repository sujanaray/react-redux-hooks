import { ADD_PERSON, DELETE_PERSON } from "../actions/types";

const initialState = {
  WaitingList: [],
};

const personReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PERSON:
      return {
        ...state,
        WaitingList: state.WaitingList.concat({
          key: Math.random(),
          name: action.data,
        }),
      };
    case DELETE_PERSON:
      return {
        ...state,
        WaitingList: state.WaitingList.filter(
          (item) => item.key !== action.key
        ),
      };
    default:
      return state;
  }
};

export default personReducer;
