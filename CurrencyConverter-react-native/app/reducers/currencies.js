import {
  CHANGE_CURRENCY_AMOUNT,
  SWAP_CURRENCY,
  CHANGE_BASE_CURRENCY,
  CHANGE_QUOTE_CURRENCY,
  GET_INITIAL_CONVERSION,
  CONVERSION_ERROR,
  CONVERSION_RESULT,
} from '../actions/currencies';

const initialState = {
  baseCurrency: 'USD',
  quoteCurrency: 'INR',
  amount: 100,
  conversions: {},
  error: null,
};

const setConversions = (state, action) => {
  let conversion = {
    isFetching: true,
    date: '',
    rates: {},
  };

  if (state.conversions[action.currency]) {
    conversion = state.conversions[action.currency];
  }

  return {
    ...state.conversions,
    [action.currency]: conversion,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CURRENCY_AMOUNT:
      return {
        ...state,
        // eslint-disable-next-line no-restricted-globals
        amount: isNaN(action.amount) ? 0 : action.amount,
      };
    case SWAP_CURRENCY:
      return {
        ...state,
        baseCurrency: state.quoteCurrency,
        quoteCurrency: state.baseCurrency,
      };
    case CHANGE_BASE_CURRENCY:
      return {
        ...state,
        baseCurrency: action.currency,
        conversions: setConversions(state, action),
      };
    case CHANGE_QUOTE_CURRENCY:
      return {
        ...state,
        quoteCurrency: action.currency,
        conversions: setConversions(state, action),
      };
    case GET_INITIAL_CONVERSION:
      return {
        ...state,
        conversions: setConversions(state, { currency: state.baseCurrency }),
      };
    case CONVERSION_RESULT:
      return {
        ...state,
        baseCurrency: action.result.base,
        conversions: {
          ...state.conversions,
          [action.result.base]: {
            isFetching: false,
            ...action.result,
          },
        },
      };
    case CONVERSION_ERROR:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};

// Console checks for Reducers
// console.log('initialState', initialState);
// console.log('swapCurrency', reducer(initialState, swapCurrency()));
// console.log('changeCurrencyAmount', reducer(initialState, changeCurrencyAmount(222)));

export default reducer;
