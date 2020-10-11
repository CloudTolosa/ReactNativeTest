import React from 'react';
import { View, Text, StyleSheet, Image, TouchableHighlight, Linking } from 'react-native';
import Colors from '../res/colors';
import { Ionicons } from '@expo/vector-icons'; 


const FirstItem = ({item}) =>  {

    return (
        
        <View style={styles.container}>
            <View >
                <Text style={styles.symbolText}>{item.name}</Text>
                <Text style={styles.nameText}>{'Listeners: '+ item.listeners}</Text>
                <View style={styles.row}>
                    <Ionicons name="ios-link" size={14} color="white" />
                    <TouchableHighlight onPress={() => Linking.openURL(item.url)}>
                        <Text style={styles.url}>{' Fanpage '+item.name}</Text>
                    </TouchableHighlight>
                </View>
                
            </View>
            <View style={styles.row}>
                <Image
                    style={{ width: 60, height: 60, borderRadius: 37.5 }}
                    source={{uri: 'https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png'}}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 16,
        borderBottomColor: Colors.zircon,
        borderBottomWidth: 1,
    },
    row: {
        flexDirection: "row"
    },
    symbolText: {
        color: "#e94560",
        fontWeight: "bold",
        fontSize: 18,
        marginRight: 12
    },
    nameText: {
        color: "#fff",
        fontSize:14
    },
    url: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 14,
        marginRight: 12
    },
   
  });

export default FirstItem;