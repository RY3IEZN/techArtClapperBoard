/** @format */

import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

function ContinueWatchingCard({ titleText, subtitleText, imageUrl }) {
  return (
    <View style={{ marginRight: 10, marginTop: 10 }}>
      <Image source={imageUrl} />
      <View style={{ backgroundColor: "red", width: 110, height: 2 }}></View>
      <Text
        style={{
          color: "white",
          fontWeight: "bold",
          fontSize: 15,
          marginTop: 5,
        }}
      >
        {titleText}
      </Text>
      <Text
        style={{
          fontSize: 15,
          color: "grey",
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

export default ContinueWatchingCard;
