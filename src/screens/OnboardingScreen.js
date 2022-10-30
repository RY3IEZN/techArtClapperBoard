/** @format */

import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import CustomButton from "../components/CustomButton";

function OnboardingScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        resizeMethod="auto"
        style={styles.image}
        source={require("../../assets/images/onboardingImg.png")}
      />
      <Text style={styles.title}>Onboarding</Text>
      <Text style={styles.subTitle}>Watch everything you want</Text>
      <Text style={styles.subTitle}> for free!</Text>

      <CustomButton
        subTitle={"Enter now"}
        onpress={() => navigation.navigate("dashboard")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    justifyContent: "center",
    // alignItems: "center",
    height: 45,
    width: 195,
    borderRadius: 50,
    backgroundColor: "#181818",
  },
  linerBtn: {
    marginTop: 10,
    borderRadius: 1,
    borderColor: "white",
  },
  image: {
    marginTop: 50,
    marginHorizontal: 10,
  },
  title: {
    marginTop: 20,
    color: "white",
    fontWeight: "bold",
    fontSize: 35,
    textAlign: "center",
  },
  subTitle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#181818",
  },
});

export default OnboardingScreen;
