import React from 'react';
import { YellowBox } from 'react-native';
import { Provider } from 'react-redux';
import store from '../store';

import { RoutesPrimary } from '../routes';


YellowBox.ignoreWarnings([
    'Unrecognized WebSocket'
]);

const App = () => {
    return (
        <Provider store={store}>
            <RoutesPrimary />
        </Provider>
    );
};


export default App;
