/** @format */

import React from "react";
import { View, StyleSheet } from "react-native";

function AppContainer({ children }) {
  return (
    <View
      style={{
        marginHorizontal: 20,
        marginVertical: 40,
      }}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default AppContainer;
