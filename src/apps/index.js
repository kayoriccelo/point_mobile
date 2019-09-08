import React from 'react';
import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings([
    'Unrecognized WebSocket'
]);

import { RoutesPrimary } from '../routes';


const App = () => {
    return (
        <RoutesPrimary />
    );
};


export default App;
