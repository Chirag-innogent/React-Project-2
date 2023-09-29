import { combineReducers } from 'redux';
import EmployeeReducer from './EmployeeReducer';
import OptionReducer from './OptionReducer';

const rootReducer = combineReducers({
    employeeState: EmployeeReducer,
    optionState: OptionReducer,
})
export default rootReducer;

