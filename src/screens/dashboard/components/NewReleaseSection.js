/** @format */

import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Text,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function NewReleaseSection({ onPressed, navigation }) {
  return (
    <TouchableOpacity onPress={onPressed}>
      <View
        style={{
          borderRadius: 20,
          marginTop: 15,
          height: 200,
        }}
      >
        <ImageBackground
          source={require("../../../../assets/images/movie_1.png")}
          style={{
            height: 200,
            borderRadius: 50,
          }}
          imageStyle={{ borderRadius: 20 }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 120,
              marginHorizontal: 10,
            }}
          >
            <View>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 25,
                  color: "white",
                }}
              >
                Morbius
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  color: "grey",
                }}
              >
                Marvel Studios
              </Text>
            </View>
            <View>
              <View style={{ flexDirection: "row" }}>
                <MaterialCommunityIcons name="star" size={24} color="gold" />
                <MaterialCommunityIcons name="star" size={24} color="gold" />
                <MaterialCommunityIcons name="star" size={24} color="gold" />
                <MaterialCommunityIcons name="star" size={24} color="gold" />
                <MaterialCommunityIcons name="star" size={24} color="gold" />
              </View>
              <Text
                style={{
                  fontSize: 15,
                  color: "grey",
                }}
              >
                From 342 users
              </Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default NewReleaseSection;
