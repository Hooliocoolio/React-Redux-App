import { GET_NEW_ACTIVITY, SHOW_NEW_ACTIVITY } from "../actions";
 

const initialState = {
    loading: false,
    activity:"null",
    type: "null",
    error: ""
  };
export const appReducer = (state = initialState, action ) => {
  switch (action.type) {
    case GET_NEW_ACTIVITY:
      // console.log("state", state, "action", action);
      return {
       ...state,
        isFetching: true,
        error: "",
      };
    case SHOW_NEW_ACTIVITY:
      return {
        
        activity: action.payload,
        type: "",
        isFetching: false,
      };
    default:
      return state;
  }
};
