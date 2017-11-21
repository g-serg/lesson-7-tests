import {showRequest, showSuccess, showFailure} from '../actions/showActions';
import {show} from '../api';

export default store => next => action => {
  if (action.type === showRequest.toString()) {
    const {payload} = action;

    show(payload)
      .then(result => {
        store.dispatch(showSuccess(result));
      })
      .catch(error => {
        store.dispatch(showFailure(error));
      });
  }
  return next(action);
};
