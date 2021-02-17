import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

class ImageDefault extends Component {
  render() {
    let imagem = "https://miro.medium.com/max/700/1*xDi2csEAWxu95IEkaNdFUQ.png";
    return (
      <View>
        <Image
          source={{ uri: imagem }}
          style={{ width: this.props.largura, height: this.props.altura }}
        />
        <Text style={{ fontSize: 20 }}>Clique aqui para acessar</Text>
      </View>
    );
  }
}
export default ImageDefault;
