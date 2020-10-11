import React from 'react';
import { View, Text, StylesSheet } from 'react-native';

const FirstItem = ({item}) =>  {
    return (

        <View>
            <Text>{item.name}</Text>
            <Text>{item.listeners}</Text>
        </View>
    )
}

export default FirstItem;