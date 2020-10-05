import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './pages/Home';
import FindSite from './pages/FindSite';
import Crq from './pages/Crq';

const AppStack = createStackNavigator();

const Routes = (): JSX.Element => {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        headerMode="none"
        screenOptions={{
          cardStyle: {
            backgroundColor: '#f0f0f5',
          },
        }}>
        <AppStack.Screen name="Home" component={Home} />
        <AppStack.Screen name="FindSite" component={FindSite} />
        <AppStack.Screen name="Crq" component={Crq} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};
export default Routes;
