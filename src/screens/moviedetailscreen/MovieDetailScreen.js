/** @format */

import React from "react";
import { View, StyleSheet, Image, TouchableOpacity, Text } from "react-native";
import MovieDetailsText from "./Components/MovieDetailsText";
import CustomButton from "../../components/CustomButton";
import ActorDetails from "./Components/ActorDetails";
import RatingBar from "./Components/RatingBar";
import ActorDetailsSection from "./Components/ActorDetailsSection";
import MovieTitle from "./Components/MovieTitle";
import MovieTitleSection from "./Components/MovieTitleSection";
import MovieInfoSection from "./Components/MovieInfoSection";
import { StatusBar } from "expo-status-bar";

function MovieDetailScreen(props) {
  return (
    <View style={styles.container}>
      <Image source={require("../../../assets/images/moviethumbnail.png")} />

      <MovieInfoSection>
        <MovieTitleSection>
          {/* Movie title */}
          <MovieTitle />
          {/*  ratings */}
          <RatingBar />
        </MovieTitleSection>

        <MovieDetailsText />

        {/* actor detail section */}
        <ActorDetailsSection>
          {/* left */}
          <View>
            <ActorDetails />
            <ActorDetails />
          </View>
          {/* right */}
          <View>
            <ActorDetails />
            <ActorDetails />
          </View>
        </ActorDetailsSection>

        {/* button */}
        <CustomButton subTitle={"Watch now"} />
      </MovieInfoSection>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#181818",
    // paddingHorizontal: 10,
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
