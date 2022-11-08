/** @format */

import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ProfilePic from "../../../components/ProfilePic";

function HeaderSection({ onPressed, navigation }) {
  return (
    <View
      style={{
        height: 70,
        marginTop: 20,
      }}
    >
      <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <ProfilePic />
          <View>
            <Text style={styles.headerTitle}>Welcome back</Text>
            <Text style={styles.headerSubTitle}>Username</Text>
          </View>
        </View>
        <TouchableOpacity onPress={onPressed}>
          <MaterialCommunityIcons name="magnify" size={50} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  headerTitle: {
    color: "white",
    fontSize: 20,
  },
  headerSubTitle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
});

export default HeaderSection;
