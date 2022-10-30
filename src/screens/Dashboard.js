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
import HeaderSection from "./compnents/HeaderSection";
import NewReleaseSection from "./compnents/NewReleaseSection";
import ContinueWatchingSection from "./compnents/ContinueWatchingSection";
import CategoriesTabs from "./compnents/CategoriesTabs";
import CategoryImgs from "./compnents/CategoryImgs";
import AppContainer from "../components/AppContainer";

function Dashboard({ navigation }) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <AppContainer>
          {/* header section */}
          <HeaderSection />

          <View style={{ marginTop: 20 }}>
            <Text style={styles.headerTitle}>New Release.</Text>
          </View>

          {/* new relase image */}
          <NewReleaseSection />

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
});

export default Dashboard;
