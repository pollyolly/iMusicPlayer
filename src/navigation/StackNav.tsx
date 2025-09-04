import React from 'react';
import SearchScreen from '../screens/SearchScreen';
import VideoScreen from '../screens/VideoScreen';
import  PlaylistScreen  from '../screens/PlaylistScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function StackNav() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="PlaylistScreen"
          component={PlaylistScreen}
          options = {{
            headerShown: false
        }}
        />
        <Stack.Screen
          name="SearchScreen"
          component={SearchScreen}
          options = {{
            headerShown: false
        }}
        />
        <Stack.Screen
          name="VideoScreen"
          component={VideoScreen}
          options = {{
            headerShown: false
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNav