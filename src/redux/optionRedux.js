import axios from 'axios';
// export const API_URL = (process.env.NODE_ENV === 'production') ? '/api' : 'http://localhost:8000/api';
import {API_URL} from '../config';


// export const getOptions = ({options}) => options;

// export const getOptionsByProducts = ({ options }, id ) => {
//   const option = options.filter(opt=> opt.id === id);
//   return option;
// };

/* selectors */
export const getOptions = ({options}) => options.data;

export const getOptionsByProducts = ({ options }, id ) => {
  const option = options.data.filter(opt=> opt.id === id);
  return option;
};



/* action name creator */
const reducerName = 'options';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');

/* action creators */
export const fetchStarted = payload => ({ payload, type: FETCH_START });
export const fetchSuccess = payload => ({ payload, type: FETCH_SUCCESS });
export const fetchError = payload => ({ payload, type: FETCH_ERROR });

/* thunk creators */
export const loadOptionsRequest = () => {
  return async dispatch => {
    dispatch(fetchStarted());
    try {
      let res = await axios.get(`${API_URL}/option`); // options or option ? <- CL
      dispatch(fetchSuccess(res.data));
    } catch (err) {
      dispatch(fetchError(err.message || true));
    }
  };
};
/* reducer */
export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case FETCH_START: {
      return {
        ...statePart,
        loading: {
          active: true,
          error: false,
        },
      };
    }
    case FETCH_SUCCESS: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        data: action.payload,
      };
    }
    case FETCH_ERROR: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: action.payload,
        },
      };
    }

    default:
      return statePart;
  }
};
