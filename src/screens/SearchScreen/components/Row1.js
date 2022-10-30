/** @format */

import React from "react";
import { View, StyleSheet, Image, Text, FlatList } from "react-native";
import MostSearchCard from "./MostSearchCard";

function Row1(props) {
  let list = [
    {
      titleText: "Secrete wars",
      subtitleText: "2022",
      imageUrl: require("../../../../assets/images/feature1.png"),
    },
    {
      titleText: "Secrete wars",
      subtitleText: "2022",
      imageUrl: require("../../../../assets/images/feature2.png"),
    },
    {
      titleText: "Secrete wars",
      subtitleText: "2022",
      imageUrl: require("../../../../assets/images/feature1.png"),
    },
    {
      titleText: "Secrete wars",
      subtitleText: "2022",
      imageUrl: require("../../../../assets/images/feature1.png"),
    },
  ];

  const FlatListItem = ({ item }) => {
    return (
      <MostSearchCard
        titleText={item.titleText}
        subtitleText={item.subtitleText}
        imageUrl={item.imageUrl}
      />
    );
  };

  return <FlatList horizontal data={list} renderItem={FlatListItem} />;
}

const styles = StyleSheet.create({
  container: {},
});

export default Row1;
