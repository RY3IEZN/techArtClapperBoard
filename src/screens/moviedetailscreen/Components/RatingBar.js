/** @format */

import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function RatingBar(props) {
  return (
    <View style={{ justifyContent: "flex-end", alignItems: "flex-end" }}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <MaterialCommunityIcons name="star" size={24} color="gold" />
        <MaterialCommunityIcons name="star" size={24} color="gold" />
        <MaterialCommunityIcons name="star" size={24} color="gold" />
        <MaterialCommunityIcons name="star" size={24} color="gold" />
        <MaterialCommunityIcons name="star" size={24} color="gold" />
      </View>
      <Text style={{ color: "#8F8F8F" }}>From 342 users</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default RatingBar;
