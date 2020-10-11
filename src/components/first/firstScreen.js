import React, { Component } from "react";
import { View, ActivityIndicator, FlatList, StyleSheet, AppRegistry } from "react-native";
import Http from "../../libs/http";
import Colors from '../../res/colors';

import FirstItem from "./firstItem";
import Search from '../Search';

class firstScreen extends Component {
  state = {
    apis: [],
    allApis: [],
    loading: false,
  };

  componentDidMount = async () => {

    this.getData();

  };

  getData = async () => {
    this.setState({ loading: true });

    const res = await Http.instance.get(
      "http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=spain&api_key=829751643419a7128b7ada50de590067&format=json"
    );

    this.setState({ apis: res.topartists.artist, allApis: res.topartists.artist, loading: false });
  }

  handlePress = (api) => {
    
    this.props.navigation.navigate("FirstDetail"); 

  };

  handleSearch = (query) => {
    const { allApis } = this.state;

    const apiFiltered = allApis.filter((api) => {
      return api.name.toLowerCase().includes(query.toLowerCase());
    });

    this.setState({ apis: apiFiltered });
  }

  render() {

    const { apis, loading } = this.state;

    return (
      <View style={styles.container}>
        <Search onChange={this.handleSearch} placeholder={'Search Artist'}/>

        {loading ? (
          <ActivityIndicator color="##fff" style={styles.loader} size="large" />
        ) : null}
        <FlatList
          data={apis}
          renderItem={({ item }) => <FirstItem item={item} />}
          keyExtractor={(item) => item.mbid}
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
});

export default firstScreen;
