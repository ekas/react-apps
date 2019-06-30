import {
  CHANGE_CURRENCY_AMOUNT, SWAP_CURRENCY,
} from '../actions/currencies';

const initialState = {
  baseCurrency: 'USD',
  quoteCurrency: 'GBP',
  amount: 100,
  conversions: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CURRENCY_AMOUNT:
      return {
        ...state,
        amount: action.amount,
      };
    case SWAP_CURRENCY:
      return {
        ...state,
        baseCurrency: state.quoteCurrency,
        quoteCurrency: state.baseCurrency,
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
