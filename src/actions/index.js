import axios from "axios";

export const START_FETCH = "START_FETCH";
export const SUCCESS_FETCH = "SUCCESS_FETCH";
export const FAIL_FETCH = "FAIL_FETCH";
export const ADD_SMURF = "ADD_SMURF";
export const ERROR_MESSAGE = "ERROR_MESSAGE";

export const fetchSmurfs = () => {
  return (dispatch) => {
    dispatch(fetchStart());
    axios
      .get("http://localhost:3333/smurfs")
      .then((resp) => {
        console.log(resp);
        dispatch(fetchSuccess(resp.data));
      })
      .catch((err) => {
        dispatch(fetchFail(err));
      });
  };
};

export const fetchStart = () => {
  return { type: START_FETCH };
};
export const fetchSuccess = (smurf) => {
  return { type: SUCCESS_FETCH, payload: smurf };
};
export const fetchFail = (error) => {
  return { type: FAIL_FETCH, payload: error };
};

export const addSmurf = (smurf) => {
  return { type: ADD_SMURF, payload: smurf };
};

export const setError = (message) => {
  return { type: ERROR_MESSAGE, payload: message };
};

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.
