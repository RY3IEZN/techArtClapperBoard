/** @format */

import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";

function ProfilePic(props) {
  return (
    <>
      <TouchableOpacity>
        <LinearGradient
          colors={["#19A1BE", "#7D4192"]}
          start={{ x: 0.0, y: 0.5 }}
          end={{ x: 1.0, y: 1.0 }}
          style={styles.profilePicBackground}
        >
          <Image
            source={require("../../assets/images/profilepic.png")}
            style={styles.profilePicImg}
          />
        </LinearGradient>
      </TouchableOpacity>
      <View
        style={{
          height: 20,
          elevation: 75,
          shadowColor: "#19A1BE",
          shadowRadius: 100,
          shadowOpacity: 10,
          shadowOffset: { width: 500, height: 500 },
          position: "relative",
          bottom: 55,
          left: 1,
          backgroundColor: "hsla(0, 100%, 90%, 0)",
        }}
      ></View>
      <View
        style={{
          height: 20,
          elevation: 75,
          shadowColor: "purple",
          shadowRadius: 100,
          shadowOpacity: 20,
          shadowOffset: { width: 500, height: 500 },
          position: "relative",
          bottom: 100,
          left: 30,
          backgroundColor: "hsla(0, 100%, 90%, 0)",
        }}
      ></View>
    </>
  );
}

const styles = StyleSheet.create({
  profilePicBackground: {
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    borderRadius: 50,
    marginRight: 10,
  },
  profilePicImg: {
    width: 43,
    height: 43,
    borderRadius: 20,
  },
});

export default ProfilePic;
