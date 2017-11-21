import {showRequest, showSuccess, showFailure} from '../actions/showActions';
import {combineReducers} from 'redux';
import {handleAction, handleActions} from 'redux-actions';

const result = handleAction(showSuccess, (state, action) => action.payload, {});

const error = handleAction(showFailure, (state, action) => action.error, null);

const isFetching = handleActions(
  {
    [showRequest]: () => true,
    [showSuccess]: () => false,
    [showFailure]: () => false
  },
  true //!!!
);

export default combineReducers({
  isFetching,
  result,
  error
});

export const getIsFetching = state => state.isFetching;
export const getResult = state => ({...state.result});
export const getError = state => state.error;
