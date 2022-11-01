/** @format */

import React from "react";
import { View, StyleSheet, Text } from "react-native";
import AppContainer from "../../components/AppContainer";
import Row1 from "./components/Row1";
import SearchBar from "./components/SearchBar";
import SearchCategoryItems from "./components/SearchCategoryItems";

function SearchScreen(props) {
  return (
    <View style={styles.container}>
      <AppContainer>
        {/* header search */}
        <View style={{ marginTop: 20 }}>
          <Text style={{ color: "white" }}>Search for a content</Text>
        </View>

        {/* Search bar  */}
        <SearchBar />

        <Text style={{ marginTop: 30, color: "white" }}>Categories.</Text>

        {/* search Category item */}
        <SearchCategoryItems />

        <Text style={{ marginTop: 10, color: "white" }}>Most Searched</Text>

        {/* most searched items */}
        <Row1 />
        <Row1 />
      </AppContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
