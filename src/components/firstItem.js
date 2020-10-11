import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Colors from '../res/colors';


const FirstItem = ({item}) =>  {

    return (
        
        <View style={styles.container}>
            <View >
                <Text style={styles.symbolText}>{item.name}</Text>
                <Text style={styles.nameText}>{'Listeneres: '+ item.listeners}</Text>
            </View>
            <View style={styles.row}>
                <Image
                    style={{ width: 50, height: 50, borderRadius: 37.5 }}
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
        color: "#fff",
        fontWeight: "bold",
        fontSize: 16,
        marginRight: 12
    },
    nameText: {
        color: "#fff",
        fontSize:14
    }
   
  });

export default FirstItem;