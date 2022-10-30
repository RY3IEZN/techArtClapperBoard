/** @format */

import React from "react";
import { View, StyleSheet } from "react-native";
import SearchCategoryCard from "./SearchCategoryCard";
import SearchCategoryCard2 from "./SearchCategoryCard2";

function SearchCategoryItems(props) {
  return (
    <View
      style={{
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <SearchCategoryCard title={"Movies"} subtitle={"536 Titles"} />
      <SearchCategoryCard2 title={"Movies"} subtitle={"536 Titles"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default SearchCategoryItems;
