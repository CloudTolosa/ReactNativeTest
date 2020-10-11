import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import FirstStack from './src/components/first/firstStack'
import SecondStack from './src/components/second/secondStack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; 
import Colors from './src/res/colors';

const Tabs = createBottomTabNavigator ();

const App = () => {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        tabBarOptions = {{
          tintColor: '#fefefe',
          style: {
            backgroundColor: Colors.blackPearl
          }
        }}
      >
        <Tabs.Screen
          name = "First"
          component = {FirstStack}
          options = {{
            tabBarIcon: () => (
              <Ionicons name="ios-musical-note" size={24} color= '#fff' />
            )
          }}
          />
          <Tabs.Screen
          name = "Second"
          component = {SecondStack}
          options = {{
            tabBarIcon: () => (
              <Ionicons name="ios-musical-notes" size={24} color="#fff" />
            )
          }}
          />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};

export default App;
