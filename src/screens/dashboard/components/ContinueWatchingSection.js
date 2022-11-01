/** @format */

import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  ScrollView,
  FlatList,
} from "react-native";
import ContinueWatchingCard from "./ContinueWatchingCard";

function ContinueWatchingSection(props) {
  let list = [
    {
      titleText: "Grappler Baki",
      subtitleText: "T.1 Episode 4",
      imageUrl: require("../../../../assets/images/continue_1.png"),
    },
    {
      titleText: "Boku no hero",
      subtitleText: "T.3 Episode 10",
      imageUrl: require("../../../../assets/images/continue_2.png"),
    },
    {
      titleText: "Hackiii",
      subtitleText: "T.3 Episode 10",
      imageUrl: require("../../../../assets/images/continue_1.png"),
    },
    {
      titleText: "Boku no hero",
      subtitleText: "T.3 Episode 10",
      imageUrl: require("../../../../assets/images/continue_1.png"),
    },
  ];

  const FlatListItem = ({ item }) => {
    return (
      <ContinueWatchingCard
        titleText={item.titleText}
        subtitleText={item.subtitleText}
        imageUrl={item.imageUrl}
      />
    );
  };

  console.log(list[0]);
  return <FlatList horizontal data={list} renderItem={FlatListItem} />;
}

const styles = StyleSheet.create({
  container: {},
});

export default ContinueWatchingSection;
