/** @format */

import React from "react";
import { View, StyleSheet, ImageBackground, Image, Text } from "react-native";

function SearchCategoryCard({ title, subtitle }) {
  return (
    <ImageBackground
      source={require("../../../../assets/images/bluecard.png")}
      style={{ width: 180, height: 150 }}
      imageStyle={{ borderRadius: 30 }}
    >
      <Image
        source={require("../../../../assets/images/spidermanimg.png")}
        style={{
          position: "absolute",
          top: -13,
          left: -25,
        }}
      />
      <View
        style={{
          position: "absolute",
          top: 5,
          left: 100,
        }}
      >
        <Text style={{ color: "white", fontWeight: "bold" }}>{title}</Text>
        <Text style={{ color: "white", textAlign: "center" }}>{subtitle}</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default SearchCategoryCard;
