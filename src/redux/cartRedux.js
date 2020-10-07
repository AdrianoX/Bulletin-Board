/* selectors */
export const getCart = ({cart}) => cart;
export const getProductFromCart = ({ cart }, drugId) => cart.drugs.filter(drug => drug._id === drugId)[0];
export const getTotalPrice = ({ cart }) => cart.drugs.reduce((total, drug) => drug.price * drug.amount + total, 0);


/* action name creator */
const reducerName = 'cart';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');
const ADD_TO_CART = createActionName('ADD_TO_CART');

/* action creators */
export const fetchStarted = payload => ({ payload, type: FETCH_START });
export const fetchSuccess = payload => ({ payload, type: FETCH_SUCCESS });
export const fetchError = payload => ({ payload, type: FETCH_ERROR });
export const addToCart = payload => ({ payload, type: ADD_TO_CART });
/* thunk creators */

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
    case ADD_TO_CART: {
      const { drugs } = statePart;
      if (drugs.length) {
        let isProductInCart = false;
        for (let drug of drugs) {
          if (drug._id === action.payload.drug._id) isProductInCart = true;
        }
        return {
          ...statePart,
          drugs: isProductInCart ? [...drugs] : [...drugs, { ...action.payload.drug, amount: action.payload.amount }],
        };
      } else {
        return {
          ...statePart,
          drugs: [{ ...action.payload.drug, amount: action.payload.amount }],
        };
      }
    }
    default:
      return statePart;
  }
};
