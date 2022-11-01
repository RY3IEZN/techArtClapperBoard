/** @format */

import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

function CategoryCard({ titleText, subtitleText, imageUrl }) {
  return (
    <View style={{ marginRight: 10, marginTop: 10 }}>
      <Image source={imageUrl} style={{ width: 150, height: 150 }} />
      <Text
        style={{
          color: "white",
          fontWeight: "bold",
          fontSize: 15,
          marginTop: 5,
          textAlign: "center",
        }}
      >
        {titleText}
      </Text>
      <Text
        style={{
          fontSize: 15,
          textAlign: "center",
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

export default CategoryCard;
