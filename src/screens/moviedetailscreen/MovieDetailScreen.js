/** @format */

import React from "react";
import { View, StyleSheet, Image, TouchableOpacity, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

function MovieDetailScreen(props) {
  return (
    <View style={styles.container}>
      <Image source={require("../../../assets/images/moviethumbnail.png")} />
      <View style={{ marginHorizontal: 20, marginTop: 10 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View>
              <Text
                style={{
                  color: "white",
                  fontSize: 40,
                  fontWeight: "bold",
                  marginRight: 5,
                }}
              >
                Morbius
              </Text>
              <Text style={{ color: "#8F8F8F" }}>Marvel Studios</Text>
            </View>
            <Text style={{ color: "#8F8F8F" }}>2022</Text>
          </View>
          {/*  */}

          <View style={{ justifyContent: "flex-end", alignItems: "flex-end" }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <MaterialCommunityIcons name="star" size={24} color="gold" />
              <MaterialCommunityIcons name="star" size={24} color="gold" />
              <MaterialCommunityIcons name="star" size={24} color="gold" />
              <MaterialCommunityIcons name="star" size={24} color="gold" />
              <MaterialCommunityIcons name="star" size={24} color="gold" />
            </View>
            <Text style={{ color: "#8F8F8F" }}>From 342 users</Text>
          </View>
        </View>
        <Text style={{ color: "#8F8F8F", marginTop: 10 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex
        </Text>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 20,
          }}
        >
          {/* left */}
          <View>
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
                  source={require("../../../assets/images/actora.png")}
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
                marginTop: 20,
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
                  source={require("../../../assets/images/actorc.png")}
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
          </View>
          {/* right */}
          <View>
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
                  source={require("../../../assets/images/actorb.png")}
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
                marginTop: 20,
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
                  source={require("../../../assets/images/actord.png")}
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
          </View>
        </View>
        {/* button */}
        <TouchableOpacity onPress={() => navigation.navigate("dashboard")}>
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
              <Text style={styles.subTitle}>Watch Now</Text>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#181818",
  },
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

export default MovieDetailScreen;
