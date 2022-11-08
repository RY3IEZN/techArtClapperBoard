/** @format */

import { View, StyleSheet } from "react-native";

function MovieInfoSection({ children }) {
  return (
    <View style={{ marginHorizontal: 20, marginTop: 10 }}>{children}</View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default MovieInfoSection;
