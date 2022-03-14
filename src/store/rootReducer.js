import { combineReducers } from 'redux';
import ACTIONS from '../services/Authentication/actions';
import authReducer from '../services/Authentication/reducers';
import groupsReducer from '../services/Groups/reducers';

const appReducer = combineReducers({
  auth: authReducer,
  groups: groupsReducer,
});

const rootReducer = (state, action) => {
  console.log(action.type);
  if (action.type === ACTIONS.SIGNOUT_SUCCESS) {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
