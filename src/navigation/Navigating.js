/** @format */

import React from "react";
import { View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Dashboard from "../screens/dashboard/Dashboard";
import OnboardingScreen from "../screens/onboarding/OnboardingScreen";
import SearchScreen from "../screens/SearchScreen/SearchScreen";
import MovieDetailScreen from "../screens/moviedetailscreen/MovieDetailScreen";

function Navigating(props) {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="onboarding"
          component={OnboardingScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="dashboard"
          component={Dashboard}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="moviedetail"
          component={MovieDetailScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="searchScreen"
          component={SearchScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default Navigating;
