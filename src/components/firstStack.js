import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import FirstScreen from './firstScreen';
import FirstDetail from './firstDetailScreen';

const Stack = createStackNavigator();

const firstStack = () => {
    return (
        <Stack.Navigator>
           <Stack.Screen name="First" component= {FirstScreen}/> 
           <Stack.Screen name="FirstDetail" component= {FirstDetail}/> 
        </Stack.Navigator>
    );
}

export default firstStack;