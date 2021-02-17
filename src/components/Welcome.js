import React, { Component } from "react";
import { Text, StyleSheet } from "react-native";

class Welcome extends Component {
  render() {
    return <Text style={styles.welcome}>Olá, Seja Bem-Vindo!</Text>;
  }
}

const styles = StyleSheet.create({
  welcome: {
    color: "#0000FF",
    fontSize: 30,
    fontWeight: 900,
  },
});

export default Welcome;
