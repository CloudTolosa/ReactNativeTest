import React, { Component } from 'react';
import { View, Text, Pressable , StyleSheet} from 'react-native';

class firstScreen extends Component {

    handlePress = () => {
        console.log('Navigate');
        this.props.navigation.navigate('FirstDetail');
    }

    render() {
        return(
            <View style={styles.container}>
                <Text>First Screen</Text>
                <Pressable onPress={ this.handlePress}>
                    <Text>Touch</Text>
                </Pressable>
            </View>
        );
    }
}

const styles = StyleSheet.create ({
    container: {
        flex:1,
        backgroundColor: '#ffc0cb'
    }
})

export default firstScreen;