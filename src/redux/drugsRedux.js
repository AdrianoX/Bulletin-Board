import axios from 'axios';

export const API_URL = (process.env.NODE_ENV === 'production') ? '/api' : 'http://localhost:8000/api';

/* selectors */
export const getAll = ({drugs}) => drugs.data;

export const getDrugsByCategory = ({ drugs }, id ) => {
  const categoryDrugs = drugs.data.filter(drug => drug.category === id);
  console.log(categoryDrugs);
  return categoryDrugs;
};

export const getDrugByOption = ({drugs}, id) => {
  const drug = drugs.data.filter(drug => drug.option === id);
  console.log(drug);
  return drug.length ? drug[0] : { error: true };
};

export const getDrugsById = ({ drugs }) => drugs.opened;

/* action name creator */
const reducerName = 'drugs';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');
const FETCH_DRUGS_BY_ID = createActionName('FETCH_DRUGS_BY_ID');

/* action creators */
export const fetchStarted = payload => ({ payload, type: FETCH_START });
export const fetchSuccess = payload => ({ payload, type: FETCH_SUCCESS });
export const fetchError = payload => ({ payload, type: FETCH_ERROR });
export const fetchDrugtById = payload => ({ payload, type: FETCH_DRUGS_BY_ID });

/* thunk creators */
export const fetchPublished = () => {
  return (dispatch, getState) => {
    try {
      const { drugs } = getState();
      if (!drugs.data.length || drugs.loading.active === false) {
        dispatch(fetchStarted());
        axios.get(`${API_URL}/drugs`).then((res) => {
          dispatch(fetchSuccess(res.data));
        });
      }
    } catch (err) {
      dispatch(fetchError(err.message || true));
    }
  };
};

export const loadProductByIdRequest = id => {
  return async dispatch => {
    dispatch(fetchStarted());
    try {
      let res = await axios.get(`${API_URL}/drug/${id}`);
      dispatch(fetchDrugtById(res.data));
    } catch (e) {
      dispatch(fetchError(e.message || true));
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
    case FETCH_DRUGS_BY_ID: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        opened: action.payload,
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
