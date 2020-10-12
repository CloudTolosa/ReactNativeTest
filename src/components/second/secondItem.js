import React from 'react';
import { View, Text, StyleSheet, Image, TouchableHighlight, Linking } from 'react-native';
import Colors from '../../res/colors';
import { Ionicons } from '@expo/vector-icons'; 


const SecondItem = ({item}) =>  {

    return (
        
        <View style={styles.container}>
            <View >
                <Text style={styles.symbolText}>{item.name}</Text>
            </View>
            <View style={styles.row}>
                <Image
                    style={{ width: 60, height: 60, borderRadius: 37.5 }}
                    source={{uri: 'https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png'}}
                />
                <View style={styles.body}>
                    <Text style={styles.artist}>{'Artist: '+ item.artist.name}</Text>
                    <View style={styles.row}>
                        <Ionicons name="ios-link" size={14} color="white" />
                        <TouchableHighlight onPress={() => Linking.openURL(item.url)}>
                            <Text style={styles.url}>{' Fanpage '+ item.name}</Text>
                        </TouchableHighlight>
                    </View>
                    <Text style={styles.nameText}>{'Listeners: '+ item.listeners}</Text>
                </View>
            </View>
            <View >
                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        borderBottomColor: Colors.zircon,
        borderBottomWidth: 1,
    },
    row: {
        flexDirection: "row"
    },
    body: {
        paddingLeft: 8
    },
    symbolText: {
        color: "#e94560",
        fontWeight: "bold",
        fontSize: 18,
        marginBottom: 12
    },
    artist: {
        color: "#29c7ac",
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

export default SecondItem;