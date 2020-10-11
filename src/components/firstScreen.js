import React, { Component } from "react";
import { View, ActivityIndicator, FlatList, StyleSheet } from "react-native";
import Http from "../libs/http";
import Colors from '../res/colors';

import FirstItem from "./firstItem";

class firstScreen extends Component {
  state = {
    api: [],
    loading: false,
  };

  componentDidMount = async () => {
    this.setState({ loading: true });
    const res = await Http.instance.get(
      "http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=spain&api_key=829751643419a7128b7ada50de590067&format=json"
    );
    this.setState({ api: res.topartists.artist, loading: false });
  };

  handlePress = () => {
    console.log("Navigate");
    this.props.navigation.navigate("FirstDetail");
  };

  render() {
    const { api, loading } = this.state;

    return (
      <View style={styles.container}>
        {loading ? (
          <ActivityIndicator color="##fff" style={styles.loader} size="large" />
        ) : null}
        <FlatList
          data={api}
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
