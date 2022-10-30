/** @format */

import React from "react";
import { View, StyleSheet, Text } from "react-native";

function CategoriesTabs(props) {
  return (
    <View style={{ flexDirection: "row", marginTop: 10 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View
          style={{
            height: 10,
            width: 10,
            backgroundColor: "white",
            borderRadius: 10,
            marginRight: 5,
          }}
        ></View>
        <Text
          style={{
            color: "white",
            marginHorizontal: 13,
            fontSize: 15,
            fontWeight: "bold",
          }}
        >
          For you
        </Text>
      </View>
      <Text style={{ color: "grey", marginHorizontal: 13 }}>Trending</Text>
      <Text style={{ color: "grey", marginHorizontal: 13 }}>Coming soon</Text>
      <Text style={{ color: "grey", marginHorizontal: 13 }}>Popular</Text>
    </View>
  );
}

const styles = StyleSheet.create({});

export default CategoriesTabs;
