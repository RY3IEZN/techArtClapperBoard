/** @format */

import React from "react";
import { View, StyleSheet } from "react-native";

function ActorDetailsSection({ children }) {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 20,
        marginRight: 50,
      }}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default ActorDetailsSection;
