/** @format */

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Navigating from "./src/navigation/Navigating";
import Dashboard from "./src/screens/Dashboard";
import Dashboard2 from "./src/screens/Dashboard2";
import OnboardingScreen from "./src/screens/OnboardingScreen";

export default function App() {
  return <Dashboard />;
}

const styles = StyleSheet.create({});
