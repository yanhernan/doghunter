import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {BreedScreen, GalleryScreen} from './containers';

const Stack = createStackNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="breed"
        component={BreedScreen}
        options={{title: 'Razas'}}
      />
      <Stack.Screen
        name="gallery"
        component={GalleryScreen}
        options={({route}) => ({title: `Galeria - ${route.params.name}`})}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
