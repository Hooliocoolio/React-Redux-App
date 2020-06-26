import axios from "axios";

export const SHUFFLING_CARDS_START = "SHUFFLING_CARDS_START";
export const SHUFFLING_CARDS_SUCCESS = "SHUFFLING_CARDS_SUCCESS";
export const SHUFFLING_CARDS_FAILURE = "SHUFFLING_CARDS_FAILURE";

const headers = {
  Accept: "application/json",
};

export const shufflingDeckOfCards = () => (dispatch) => {
  dispatch({
    type: SHUFFLING_CARDS_START,
  });
  axios
    .get(
      "https://deckofcardsapi.com/api/shuffle/?deck_count=1",
      {
        headers,
      }
    )

    .then((res) => {
      //   console.log(res);
      dispatch({
        type: SHUFFLING_CARDS_SUCCESS,
        payload: [res.data.cards],
      });
    })
    .catch((err) => {
      //   console.log(err);
      dispatch({
        type: SHUFFLING_CARDS_FAILURE,
        payload: err.response.message,
      });
    });
};
