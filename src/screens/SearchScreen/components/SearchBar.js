/** @format */

import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View, StyleSheet, TextInput } from "react-native";

function SearchBar(props) {
  return (
    <LinearGradient
      colors={["#19A1BE", "#7D4192"]}
      start={{ x: 0.0, y: 0.5 }}
      end={{ x: 1.0, y: 1.0 }}
      style={{
        height: 60,
        width: 200,
        alignItems: "center",
        justifyContent: "center",
        width: 365,
        borderRadius: 50,
        marginTop: 10,
        elevation: 10,
        shadowColor: "white",
        shadowRadius: 10,
        shadowOpacity: 5,
        shadowOffset: { width: 500, height: 500 },
      }}
    >
      <View style={styles.btn}>
        <TextInput
          placeholder="Search for content"
          placeholderTextColor={"grey"}
          style={{ color: "white", marginHorizontal: 20 }}
        />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {},
  btn: {
    justifyContent: "center",
    height: 55,
    width: 360,
    borderRadius: 50,
    backgroundColor: "#181818",
  },
});

export default SearchBar;
