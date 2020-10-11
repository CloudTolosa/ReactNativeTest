import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import FirstStack from './src/components/firstStack'

const App = () => {
  return (
    <NavigationContainer>
      <FirstStack/>
    </NavigationContainer>
  );
};

export default App;