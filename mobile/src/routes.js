import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Incidents from './pages/Incidents';
import DetailIncident from './pages/DetailIncident';

const AppStack = createStackNavigator();

export default function Routes() {

    return (
        <NavigationContainer >
            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name="Incidents" component={Incidents} />
                <AppStack.Screen name="DetailIncident" component={DetailIncident} />
            </AppStack.Navigator>
        </NavigationContainer>
    );
}