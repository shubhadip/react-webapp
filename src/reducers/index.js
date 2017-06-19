import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import {reducer as toastrReducer} from 'react-redux-toastr';

import authReducer from './auth_reducer';
import adminReducer from './admin_reducer';

const rootReducer = combineReducers({
  form: formReducer, // form just once for es6 magic
  auth: authReducer,
  admin: adminReducer,
  toastr: toastrReducer
});

export default rootReducer;
