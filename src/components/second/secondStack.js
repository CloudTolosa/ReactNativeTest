import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SecondScreen from './secondScreen';

import Colors from '../../res/colors';

const Stack = createStackNavigator();

const secondStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: Colors.blackPearl,
                    shadowColor: Colors.blackPearl
                },
                headerTintColor: Colors.white
            }}
        >
           <Stack.Screen name="Second" component= {SecondScreen}/> 
        </Stack.Navigator>
    );
}

export default secondStack;