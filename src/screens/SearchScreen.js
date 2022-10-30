/** @format */

import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  ImageBackground,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

function SearchScreen(props) {
  return (
    <View style={styles.container}>
      <View
        style={{
          marginHorizontal: 20,
          marginTop: 50,
        }}
      >
        <View style={{ marginTop: 20 }}>
          <Text style={{ color: "white" }}>Search for a content</Text>
        </View>
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

        <Text style={{ marginTop: 30, color: "white" }}>Categories.</Text>

        <View
          style={{
            marginTop: 20,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <ImageBackground
            source={require("../../assets/images/bluecard.png")}
            style={{ width: 180, height: 150 }}
            imageStyle={{ borderRadius: 30 }}
          >
            <Image
              source={require("../../assets/images/spidermanimg.png")}
              style={{
                position: "absolute",
                top: -13,
                left: -25,
              }}
            />
            <View
              style={{
                position: "absolute",
                top: 5,
                left: 100,
              }}
            >
              <Text style={{ color: "white", fontWeight: "bold" }}>Movies</Text>
              <Text style={{ color: "white", textAlign: "center" }}>
                536 Titles
              </Text>
            </View>
          </ImageBackground>
          <ImageBackground
            source={require("../../assets/images/redcard.png")}
            style={{ width: 180, height: 150 }}
            imageStyle={{ borderRadius: 20 }}
          >
            <Image
              source={require("../../assets/images/animeimg.png")}
              style={{
                position: "absolute",
                top: -35,
                right: -25,
              }}
            />
            <View
              style={{
                position: "absolute",
                top: 5,
                right: 100,
              }}
            >
              <Text style={{ color: "white", fontWeight: "bold" }}>Movies</Text>
              <Text style={{ color: "white", textAlign: "center" }}>
                536 Titles
              </Text>
            </View>
          </ImageBackground>
        </View>

        <Text style={{ marginTop: 10, color: "white" }}>Most Searched</Text>

        <View style={{ flexDirection: "row", marginTop: 20 }}>
          <View style={{ marginRight: 10 }}>
            <Image
              source={require("../../assets/images/feature1.png")}
              style={{ width: 150, borderRadius: 20 }}
            />
            <Text
              style={{ color: "white", textAlign: "center", marginTop: 10 }}
            >
              Secret Wars
            </Text>
            <Text
              style={{ color: "white", textAlign: "center", color: "grey" }}
            >
              2022
            </Text>
          </View>
          <View style={{ marginRight: 20 }}>
            <Image
              source={require("../../assets/images/feature2.png")}
              style={{ width: 150, borderRadius: 20 }}
            />
            <Text
              style={{ color: "white", textAlign: "center", marginTop: 10 }}
            >
              Secret Wars
            </Text>
            <Text
              style={{ color: "white", textAlign: "center", color: "grey" }}
            >
              2022
            </Text>
          </View>
          <View>
            <Image source={require("../../assets/images/feature1.png")} />
            <Text
              style={{ color: "white", textAlign: "center", marginTop: 10 }}
            >
              Secret Wars
            </Text>
            <Text
              style={{ color: "white", textAlign: "center", color: "grey" }}
            >
              2022
            </Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", marginTop: 20 }}>
          <View style={{ marginRight: 10 }}>
            <Image
              source={require("../../assets/images/feature1.png")}
              style={{ width: 150, borderRadius: 20 }}
            />
            <Text
              style={{ color: "white", textAlign: "center", marginTop: 10 }}
            >
              Secret Wars
            </Text>
            <Text
              style={{ color: "white", textAlign: "center", color: "grey" }}
            >
              2022
            </Text>
          </View>
          <View style={{ marginRight: 20 }}>
            <Image
              source={require("../../assets/images/feature2.png")}
              style={{ width: 150, borderRadius: 20 }}
            />
            <Text
              style={{ color: "white", textAlign: "center", marginTop: 10 }}
            >
              Secret Wars
            </Text>
            <Text
              style={{ color: "white", textAlign: "center", color: "grey" }}
            >
              2022
            </Text>
          </View>
          <View>
            <Image source={require("../../assets/images/feature1.png")} />
            <Text
              style={{ color: "white", textAlign: "center", marginTop: 10 }}
            >
              Secret Wars
            </Text>
            <Text
              style={{ color: "white", textAlign: "center", color: "grey" }}
            >
              2022
            </Text>
          </View>
        </View>
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
    height: 55,
    width: 360,
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

export default SearchScreen;
