import {
  searchRequest,
  searchSuccess,
  searchFailure
} from '../actions/searchActions';
import {search} from '../api';

export default store => next => action => {
  if (action.type === searchRequest.toString()) {
    const {payload} = action;

    search(payload)
      .then(result => {
        store.dispatch(searchSuccess(result));
      })
      .catch(error => {
        store.dispatch(searchFailure(error));
      });
  }
  return next(action);
};
