import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import FirstScreen from './firstScreen';
import FirstDetail from './firstDetailScreen';
import Colors from '../../res/colors';

const Stack = createStackNavigator();

const firstStack = () => {
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
           <Stack.Screen name="First" component= {FirstScreen}/> 
           <Stack.Screen name="FirstDetail" component= {FirstDetail}/> 
        </Stack.Navigator>
    );
}

export default firstStack;