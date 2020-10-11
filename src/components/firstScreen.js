import React, { Component } from 'react';
import { View, Text, Pressable , FlatList, StyleSheet} from 'react-native';
import Http from '../libs/http';


import FirstItem from './firstItem'

class firstScreen extends Component {

    state = {
        api: []
    }

    componentDidMount = async () => {

        const res = await Http.instance.get("http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=spain&api_key=829751643419a7128b7ada50de590067&format=json");
        this.setState({ api:res.topartists.artist });

    }

    handlePress = () => {
        console.log('Navigate');
        this.props.navigation.navigate('FirstDetail');
    }

    render() {
        const {api} =this.state;
        return(
            <View style={styles.container}>
                <FlatList
                data={api}
                renderItem={({ item }) =>
                    <FirstItem item={item}/>
                }
                keyExtractor={(item) => item.mbid}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create ({
    container: {
        flex:1,
    },
    card: {
        flexDirection: 'row',
        backgroundColor: '#ffc0cb',
        paddingVertical: 8,
    }
})

export default firstScreen;