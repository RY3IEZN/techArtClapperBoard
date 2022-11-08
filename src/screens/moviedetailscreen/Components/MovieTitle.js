/** @format */

import React from "react";
import { View, StyleSheet, Text } from "react-native";

function MovieTitle(props) {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View>
        <Text
          style={{
            color: "white",
            fontSize: 40,
            fontWeight: "bold",
            marginRight: 5,
          }}
        >
          Morbius
        </Text>
        <Text style={{ color: "#8F8F8F" }}>Marvel Studios</Text>
      </View>
      <Text style={{ color: "#8F8F8F" }}>2022</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default MovieTitle;
