import { combineReducers } from 'redux';
import ACTIONS from '../services/Authentication/actions';
import authReducer from '../services/Authentication/reducers';

const appReducer = combineReducers({
  auth: authReducer,
});

const rootReducer = (state, action) => {
  if (action.type === ACTIONS.SIGNOUT_SUCCESS) {
    return undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
