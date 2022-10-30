/** @format */

import React from "react";
import { View, StyleSheet, ImageBackground, Image, Text } from "react-native";

function SearchCategoryCard2({ title, subtitle }) {
  return (
    <ImageBackground
      source={require("../../../../assets/images/redcard.png")}
      style={{ width: 180, height: 150 }}
      imageStyle={{ borderRadius: 20 }}
    >
      <Image
        source={require("../../../../assets/images/animeimg.png")}
        style={{
          position: "absolute",
          top: -35,
          right: -25,
        }}
      />
      <View
        style={{
          position: "absolute",
          top: 5,
          right: 100,
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

export default SearchCategoryCard2;
