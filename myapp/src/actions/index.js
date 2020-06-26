import axios from "axios";

export const GET_NEW_ACTIVITY = "GET_NEW_ACTIVITY";
export const SHOW_NEW_ACTIVITY = "SHOW_NEW_ACTIVITY";
export const SHOW_ACTIVITY_FAIL = "SHOW_ACTIVITY_FAIL";


const headers = {
  Accept: "application/json",
};

export const getActivity = () => (dispatch) => {
  dispatch({ type: GET_NEW_ACTIVITY, });
  const baseURL = "http://www.boredapi.com/api/activity";
  axios

    .get(baseURL, {
      headers,
    })
    .then(results  => {
      console.log( "results", results.data );
      dispatch({
        type: SHOW_NEW_ACTIVITY,
        payload: [ results.data.activity],
        payload2: results.data.type,
        payload3: results.data.participants
        // payload2: results.data.type,
        // numOfPeople: results.data.participants
  
   });
    })
    .catch((err) => {
      // console.log(err);
      dispatch({
        type: SHOW_ACTIVITY_FAIL,
        payload: err.response.message,
      });
    });
};
