import React from 'react';
import { Component } from 'react';
import {TextInput, View , StyleSheet} from 'react-native';

import Colors  from '../res/colors';

class Search extends Component {
    
    state = {
        query: ""
    }

    handleText = (query) => {
        this.setState({ query });

        if (this.props.onChange) {
            this.props.onChange(query);
          }
    }


    render(){

        const { query } = this.state.query;

        return(
            <View>
                <TextInput 
                    onChangeText={this.handleText}
                    value = { query }
                    style={styles.textInput}
                    placeholder ={this.props.placeholder}
                    placeholderTextColor = '#fff'
                />
            </View>
        );
    }

}

const styles = StyleSheet.create ({
    textInput: {
        height: 46,
        backgroundColor: Colors.charade,
        paddingLeft: 16,
        borderBottomWidth: 2,
        borderBottomColor: Colors.zircon,
        color: '#fff',
    }, 
});

export default Search;