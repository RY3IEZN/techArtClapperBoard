/** @format */

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Navigating from "./src/navigation/Navigating";
import Dashboard from "./src/screens/dashboard/Dashboard";
import MovieDetailScreen from "./src/screens/moviedetailscreen/MovieDetailScreen";
import SearchScreen from "./src/screens/SearchScreen/SearchScreen";

export default function App() {
  return <Navigating />;
}

const styles = StyleSheet.create({});
