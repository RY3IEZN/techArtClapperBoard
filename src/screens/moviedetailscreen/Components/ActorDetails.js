/** @format */

import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

function ActorDetails(props) {
  return (
    <View
      style={{
        backgroundColor: "black",
        width: 180,
        borderRadius: 20,
        height: 50,
        margin: 5,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        marginVertical: 15,
      }}
    >
      <View></View>
      <LinearGradient
        colors={["#19A1BE", "#7D4192"]}
        start={{ x: 0.0, y: 0.5 }}
        end={{ x: 1.0, y: 1.0 }}
        style={{
          height: 65,
          width: 65,
          borderRadius: 50,
          marginRight: 10,
        }}
      >
        <Image
          source={require("../../../../assets/images/actora.png")}
          style={{
            width: 62,
            height: 62,
            borderRadius: 50,
          }}
        />
      </LinearGradient>
      <View>
        <Text style={{ color: "white" }}>Maria Espaes</Text>
        <Text style={{ color: "#8F8F8F" }}>As Morbius</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default ActorDetails;
