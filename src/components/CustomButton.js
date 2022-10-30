/** @format */

import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

function CustomButton({ subTitle, onpress }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onpress}>
        <LinearGradient
          colors={["#19A1BE", "#7D4192"]}
          start={{ x: 0.0, y: 0.5 }}
          end={{ x: 1.0, y: 1.0 }}
          style={{
            height: 48,
            width: 200,
            alignItems: "center",
            justifyContent: "center",
            width: 200,
            marginHorizontal: 100,
            borderRadius: 50,
            marginTop: 20,
          }}
        >
          <View style={styles.btn}>
            <Text style={styles.subTitle}>{subTitle}</Text>
          </View>
        </LinearGradient>
      </TouchableOpacity>

      <View
        style={{
          height: 100,
          width: 100,
          marginHorizontal: 20,
          elevation: 75,
          shadowColor: "#19A1BE",
          shadowRadius: 100,
          shadowOpacity: 10,
          shadowOffset: { width: 500, height: 500 },
          position: "relative",
          bottom: 150,
          left: 50,
          backgroundColor: "hsla(0, 100%, 90%, 0)",
        }}
      ></View>
      <View
        style={{
          height: 100,
          width: 100,
          marginHorizontal: 20,
          elevation: 75,
          shadowColor: "purple",
          shadowRadius: 100,
          shadowOpacity: 20,
          shadowOffset: { width: 500, height: 500 },
          position: "relative",
          bottom: 250,
          left: 190,
          backgroundColor: "hsla(0, 100%, 90%, 0)",
        }}
      ></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  btn: {
    justifyContent: "center",
    // alignItems: "center",
    height: 45,
    width: 195,
    borderRadius: 50,
    backgroundColor: "#181818",
  },
  subTitle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
});

export default CustomButton;
