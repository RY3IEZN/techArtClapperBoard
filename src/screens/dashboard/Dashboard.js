/** @format */

import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import AppContainer from "../../components/AppContainer";
import CategoriesTabs from "./components/CategoriesTabs";
import CategoryImgs from "./components/CategoryImgs";
import ContinueWatchingSection from "./components/ContinueWatchingSection";
import HeaderSection from "./components/HeaderSection";
import NewReleaseSection from "./components/NewReleaseSection";

function Dashboard({ navigation }) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <AppContainer>
          {/* header section */}
          <HeaderSection
            onPressed={() => navigation.navigate("searchScreen")}
          />

          <View style={{ marginTop: 20 }}>
            <Text style={styles.headerTitle}>New Release.</Text>
          </View>

          {/* new relase image */}
          <NewReleaseSection
            onPressed={() => navigation.navigate("moviedetail")}
          />

          <View style={{ marginTop: 20 }}>
            <Text style={styles.headerTitle}>Continue Watching.</Text>
          </View>

          {/* continue watching section */}
          <ContinueWatchingSection />

          {/* categories */}
          <CategoriesTabs />

          {/* category images */}
          <CategoryImgs />
        </AppContainer>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#181818",
  },
  headerTitle: {
    color: "white",
  },
});

export default Dashboard;
