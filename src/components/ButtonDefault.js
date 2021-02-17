import React, { Component } from "react";
import { StyleSheet } from "react-native";

class ButtonDefault extends Component {
  render() {
    return (
      <button
        style={{
          fontSize: this.props.fonte,
          borderColor: this.props.corDaBorda,
          color: this.props.cor,
          backgroundColor: this.props.corFundo
        }}
      >
        Entrar
      </button>
    );
  }
}
export default ButtonDefault;
