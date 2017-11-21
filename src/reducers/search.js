import {
  searchRequest,
  searchSuccess,
  searchFailure
} from '../actions/searchActions';
import {combineReducers} from 'redux';
import {handleAction, handleActions} from 'redux-actions';

const result = handleAction(
  searchSuccess,
  (state, action) => action.payload,
  []
);

const error = handleAction(
  searchFailure,
  (state, action) => action.error,
  null
);

const isFetching = handleActions(
  {
    [searchRequest]: () => true,
    [searchSuccess]: () => false,
    [searchFailure]: () => false
  },
  false
);

export default combineReducers({
  isFetching,
  result,
  error
});

export const getIsFetching = state => state.isFetching;
export const getResult = state => [...state.result];
export const getError = state => state.error;
