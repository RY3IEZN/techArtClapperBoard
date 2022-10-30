/** @format */

import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

function MostSearchCard({ titleText, subtitleText, imageUrl }) {
  return (
    <View style={{ marginRight: 10, marginVertical: 15 }}>
      <Image source={imageUrl} />
      <Text
        style={{
          color: "white",
          fontWeight: "bold",
          fontSize: 15,
          textAlign: "center",
          marginTop: 5,
        }}
      >
        {titleText}
      </Text>
      <Text
        style={{
          fontSize: 15,
          color: "grey",
          textAlign: "center",
        }}
      >
        {subtitleText}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default MostSearchCard;
