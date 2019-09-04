import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import SignIn from '../apps/SignIn';
import SignUp from '../apps/SignUp';


export default createAppContainer(
    createSwitchNavigator({
        SignIn,
        SignUp
    })
);