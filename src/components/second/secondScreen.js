import React, { Component } from "react";
import { View, ActivityIndicator, FlatList, StyleSheet } from "react-native";

import Http from "../../libs/http";
import Colors from '../../res/colors';

import SecondItem from "./secondItem";
import Search from "../Search";

class SecondScreen extends Component {
  state = {
    apis: [],
    allApis: [],
    loading: false,
    page: 0,
    isConnected: false
  };

  componentDidMount = async () => {
    this.getData();

  };

  getData = async () => {
    this.setState({ loading: true });

    const res = await Http.instance.get(
      "http://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=spain&api_key=829751643419a7128b7ada50de590067&format=json"
    );

    this.setState({ apis: res.tracks.track, allApis: res.tracks.track, loading: false });
  }

  handlePress = (api) => {
    
    this.props.navigation.navigate("SecondDetail",api); 

  };

  handleSearch = (query) => {
    const { allApis } = this.state;

    const apiFiltered = allApis.filter((api) => {
      return api.name.toLowerCase().includes(query.toLowerCase()) || 
      api.artist.name.toLowerCase().includes(query.toLowerCase()) ;
    });

    this.setState({ apis: apiFiltered });
  }

  render() {

    const { apis, loading } = this.state;

    return (
      <View style={styles.container}>
        <Search onChange={this.handleSearch} placeholder={'Search album , artist and Song'}/>

        {loading ? (
          <ActivityIndicator color="#fff" style={styles.loader} size="large" />
        ) : null}
            <FlatList
              data={apis}
              initialNumToRender = {10}
              renderItem={({ item }) => <SecondItem item={item} />}
              keyExtractor={(item, index) => index + item.mbid}
            />
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.charade
  },
  loader: {
    marginTop: 60,
  },
  disabled: {
    justifyContent: 'center',
    color: '#fff',
    fontSize: 26,
    fontWeight: 'bold'

  }
});

export default SecondScreen;
