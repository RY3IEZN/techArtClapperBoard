/** @format */

import React, { Children } from "react";
import { View, StyleSheet } from "react-native";

function MovieTitleSection({ children }) {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 5,
      }}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default MovieTitleSection;
