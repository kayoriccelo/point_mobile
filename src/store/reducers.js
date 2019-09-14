import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import messageReducer from '../components/Message/store/ducks';
import signupReducer from '../apps/SignUp/store/ducks';


const reducers = combineReducers({
    router: routerReducer,
    message: messageReducer,
    signup: signupReducer,
});

export default reducers;
