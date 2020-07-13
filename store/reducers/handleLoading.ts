import { LOADING } from '../types';

const initialState = false;

const loadingReducer = (state = initialState, {type}) => {
  switch (type) {
    case LOADING:
      return !state;
    default:
      return state;
  }
};

export default loadingReducer;
