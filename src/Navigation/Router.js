import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {navigationRef} from './RootNavigation';

import MoviesList from '../Containers/Movies/List';
import MoviesDetails from '../Containers/Movies/Details';
import WebView from '../Containers/WebView';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        <Stack.Screen
          options={{title: 'Movies'}}
          name="MoviesList"
          component={MoviesList}
        />
        <Stack.Screen
          options={{title: 'Details'}}
          name="MoviesDetails"
          component={MoviesDetails}
        />
        <Stack.Screen
          options={{title: 'Article'}}
          name="WebView"
          component={WebView}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
