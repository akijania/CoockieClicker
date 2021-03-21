import Axios from "axios";
import { API_URL } from "../config";

export const getAll = ({ clicks }) => clicks;

const reducerName = "click";
const createActionName = (name) => `app/${reducerName}/${name}`;

const ADD_CLICK = createActionName("ADD_CLICK");
const LOAD_CLICKS = createActionName("LOAD_CLICKS");
const RESET_CLICKS = createActionName("RESET_CLICKS");
const DOUBLE_CLICK = createActionName("DOUBLE_CLICK");
const INTERVAL_CLICK = createActionName("INTERVAL_CLICK");
/* action types created for future DB */
const FETCH_START = createActionName("FETCH_START");
const FETCH_SUCCESS = createActionName("FETCH_SUCCESS");
const FETCH_ERROR = createActionName("FETCH_ERROR");

export const setCount = (payload) => ({ payload, type: ADD_CLICK });
export const loadClicksAmount = (payload) => ({ payload, type: LOAD_CLICKS });
export const resetCount = (payload) => ({ payload, type: RESET_CLICKS });
export const doubleClick = (payload) => ({ payload, type: DOUBLE_CLICK });
export const intervalClick = (payload) => ({ payload, type: INTERVAL_CLICK });
/* action creators created for future DB */
export const fetchStarted = (payload) => ({ payload, type: FETCH_START });
export const fetchSuccess = (payload) => ({ payload, type: FETCH_SUCCESS });
export const fetchError = (payload) => ({ payload, type: FETCH_ERROR });

/* thunk creators created for future DB */
export const fetchLoadClicks = () => {
  return (dispatch, getState) => {
    dispatch(fetchStarted({ name: "LOAD_CLICKS" }));

    Axios.get(`${API_URL}/v1/progress`)
      .then((res) => {
        dispatch(loadClicksAmount(res.data));
        dispatch(fetchSuccess({ name: "LOAD_CLICKS" }));
      })
      .catch((err) => {
        dispatch(
          fetchError({ name: "LOAD_CLICKS", error: err.message || true })
        );
      });
  };
};
export const fetchSetCount = (data) => {
  return async (dispatch) => {
    dispatch(fetchStarted({ name: "ADD_CLICK" }));
    try {
      await Axios.patch(`${API_URL}/v1/progress`, data);
      dispatch(setCount(data));
      dispatch(fetchSuccess({ name: "ADD_CLICK" }));
    } catch (err) {
      dispatch(fetchError({ name: "ADD_CLICK", error: err.message || true }));
    }
  };
};
/* thunk creators created for future DB */

export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_CLICK:
      return {
        ...statePart,
        clicksNumber: action.payload.clicksNumber,
        level: action.payload.level,
        nextLevelClicksNumber: action.payload.nextLevelClicksNumber
      };
    // }
    case RESET_CLICKS:
      return {
        ...statePart,
        clicksNumber: 0,
        level: 0,
        nextLevelClicksNumber: 10,
        doubleClick: false,
        intervalClick: false
      };
    case DOUBLE_CLICK:
      return {
        ...statePart,
        doubleClick: true
      };
    case INTERVAL_CLICK:
      return {
        ...statePart,
        intervalClick: true
      };
    case LOAD_CLICKS:
      return {
        ...statePart,
        clicksNumber: action.payload.clicksNumber,
        level: action.payload.level,
        nextLevelClicksNumber: action.payload.nextLevelClicksNumber
      };
    case FETCH_SUCCESS: {
      return {
        ...statePart,
        requests: {
          ...statePart.requests,
          [action.payload.name]: {
            active: false,
            error: false
          },
          data: action.payload
        }
      };
    }
    case FETCH_ERROR: {
      return {
        ...statePart,
        requests: {
          ...statePart.requests,
          [action.payload.name]: {
            active: false,
            error: action.payload
          }
        }
      };
    }
    default:
      return statePart;
  }
}
