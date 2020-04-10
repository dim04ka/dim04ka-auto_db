import driverFormReducer from './driver/driverReducer';
import {reducer as formReducer} from 'redux-form';

const reducers = { driverFormReducer, form: formReducer };

export default reducers;