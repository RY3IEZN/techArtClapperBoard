/** @format */

import React from "react";
import { View, StyleSheet, Image, Text, FlatList } from "react-native";
import CategoryCard from "./CategoryCards";

function CategoryImgs(props) {
  let list = [
    {
      titleText: "Secrete wars",
      subtitleText: "2022",
      imageUrl: require("../../../assets/images/feature1.png"),
    },
    {
      titleText: "Secrete wars",
      subtitleText: "2022",
      imageUrl: require("../../../assets/images/feature2.png"),
    },
    {
      titleText: "Secrete wars",
      subtitleText: "2022",
      imageUrl: require("../../../assets/images/feature1.png"),
    },
    {
      titleText: "Secrete wars",
      subtitleText: "2022",
      imageUrl: require("../../../assets/images/continue_1.png"),
    },
  ];

  const FlatListItem = ({ item }) => {
    return (
      <CategoryCard
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

export default CategoryImgs;

{
  /* <View style={{ flexDirection: "row", marginTop: 20 }}>
<View style={{ marginRight: 10 }}>
  <Image
    source={require("../../../assets/images/feature1.png")}
    style={{ width: 150 }}
  />
  <Text
    style={{
      color: "white",
      textAlign: "center",
      marginTop: 10,
      marginBottom: 30,
    }}
  >
    Secret Wars
  </Text>
  <Text
    style={{
      fontSize: 15,
      textAlign: "center",
      color: "grey",
    }}
  >
    2022
  </Text>
</View>
<View style={{ marginRight: 20 }}>
  <Image
    source={require("../../../assets/images/feature2.png")}
    style={{ width: 150 }}
  />
  <Text style={{ color: "white", textAlign: "center", marginTop: 10 }}>
    Secret Wars
  </Text>
  <Text
    style={{
      fontSize: 15,
      textAlign: "center",
      color: "grey",
    }}
  >
    2022
  </Text>
</View>
<View>
  <Image source={require("../../../assets/images/feature1.png")} />
  <Text style={{ color: "white", textAlign: "center", marginTop: 10 }}>
    Secret Wars
  </Text>
  <Text
    style={{
      fontSize: 15,
      textAlign: "center",
      color: "grey",
    }}
  >
    2022
  </Text>
</View>
</View> */
}
