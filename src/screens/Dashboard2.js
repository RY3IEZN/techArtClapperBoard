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
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import ProfilePic from "../components/ProfilePic";
import HeaderSection from "./compnents/HeaderSection";

function Dashboard({ navigation }) {
  return <HeaderSection />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#181818",
  },
  headerTitle: {
    color: "white",
    fontSize: 20,
  },
  headerSubTitle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
});

export default Dashboard;

// <View style={styles.container}>
// <StatusBar style="auto" />
// <View
//   style={{
//     marginHorizontal: 20,
//     marginTop: 20,
//   }}
// >
//   <View
//     style={{
//       height: 70,
//       marginTop: 20,
//     }}
//   >
//     {/* header section */}
//

//       <TouchableOpacity
//         onPress={() => navigation.navigate("searchScreen")}
//       >
//         <MaterialCommunityIcons name="magnify" size={50} color="white" />
//       </TouchableOpacity>
//     </View>
//     <View style={{ marginTop: 20 }}>
//       <Text style={styles.headerTitle}>New Release.</Text>
//     </View>
//     {/* new relase image */}
//     <TouchableOpacity onPress={() => navigation.navigate("moviedetail")}>
//       <View
//         style={{
//           borderRadius: 20,
//           marginTop: 15,
//           height: 200,
//         }}
//       >
//         <ImageBackground
//           source={require("../../assets/images/movie_1.png")}
//           style={{
//             height: 200,
//             borderRadius: 50,
//           }}
//           imageStyle={{ borderRadius: 20 }}
//         >
//           <View
//             style={{
//               flexDirection: "row",
//               justifyContent: "space-between",
//               alignItems: "center",
//               marginTop: 120,
//               marginHorizontal: 10,
//             }}
//           >
//             <View>
//               <Text
//                 style={{
//                   fontWeight: "bold",
//                   fontSize: 25,
//                   color: "white",
//                 }}
//               >
//                 Morbius
//               </Text>
//               <Text
//                 style={{
//                   fontSize: 15,
//                   color: "grey",
//                 }}
//               >
//                 Marvel Studios
//               </Text>
//             </View>
//             <View>
//               <View style={{ flexDirection: "row" }}>
//                 <MaterialCommunityIcons
//                   name="star"
//                   size={24}
//                   color="gold"
//                 />
//                 <MaterialCommunityIcons
//                   name="star"
//                   size={24}
//                   color="gold"
//                 />
//                 <MaterialCommunityIcons
//                   name="star"
//                   size={24}
//                   color="gold"
//                 />
//                 <MaterialCommunityIcons
//                   name="star"
//                   size={24}
//                   color="gold"
//                 />
//                 <MaterialCommunityIcons
//                   name="star"
//                   size={24}
//                   color="gold"
//                 />
//               </View>
//               <Text
//                 style={{
//                   fontSize: 15,
//                   color: "grey",
//                 }}
//               >
//                 From 342 users
//               </Text>
//             </View>
//           </View>
//         </ImageBackground>
//       </View>
//     </TouchableOpacity>
//     <View style={{ marginTop: 20 }}>
//       <Text style={styles.headerTitle}>Continue Watching.</Text>
//     </View>
//     <View style={{ flexDirection: "row", marginTop: 20 }}>
//       <View style={{ marginRight: 10 }}>
//         <Image source={require("../../assets/images/continue_1.png")} />
//         <View
//           style={{ backgroundColor: "red", width: 110, height: 2 }}
//         ></View>
//         <Text
//           style={{
//             color: "white",
//             fontWeight: "bold",
//             fontSize: 15,
//             marginTop: 5,
//           }}
//         >
//           Grappler Baki
//         </Text>
//         <Text
//           style={{
//             fontSize: 15,
//             color: "grey",
//           }}
//         >
//           T.1 Episode 4
//         </Text>
//       </View>
//       <View style={{ marginRight: 20 }}>
//         <Image source={require("../../assets/images/continue_2.png")} />
//         <Text
//           style={{ color: "white", fontWeight: "bold", fontSize: 15 }}
//         >
//           Boku no Hero
//         </Text>
//         <Text
//           style={{
//             fontSize: 15,
//             color: "grey",
//           }}
//         >
//           T.3 Episode 10
//         </Text>
//       </View>
//       <View>
//         <Image source={require("../../assets/images/continue_1.png")} />
//         <Text
//           style={{ color: "white", fontWeight: "bold", fontSize: 15 }}
//         >
//           Grappler Baki
//         </Text>
//         <Text
//           style={{
//             fontSize: 15,
//             color: "grey",
//           }}
//         >
//           T.1 Episode 4
//         </Text>
//       </View>
//     </View>
//     <View style={{ flexDirection: "row", marginTop: 10 }}>
//       <View
//         style={{
//           flexDirection: "row",
//           justifyContent: "space-between",
//           alignItems: "center",
//         }}
//       >
//         <View
//           style={{
//             height: 10,
//             width: 10,
//             backgroundColor: "white",
//             borderRadius: 10,
//             marginRight: 5,
//           }}
//         ></View>
//         <Text
//           style={{
//             color: "white",
//             marginHorizontal: 13,
//             fontSize: 15,
//             fontWeight: "bold",
//           }}
//         >
//           For you
//         </Text>
//       </View>
//       <Text style={{ color: "grey", marginHorizontal: 13 }}>
//         Trending
//       </Text>
//       <Text style={{ color: "grey", marginHorizontal: 13 }}>
//         Coming soon
//       </Text>
//       <Text style={{ color: "grey", marginHorizontal: 13 }}>Popular</Text>
//     </View>

//     <View style={{ flexDirection: "row", marginTop: 20 }}>
//       <View style={{ marginRight: 10 }}>
//         <Image
//           source={require("../../assets/images/feature1.png")}
//           style={{ width: 150 }}
//         />
//         <Text
//           style={{ color: "white", textAlign: "center", marginTop: 10 }}
//         >
//           Secret Wars
//         </Text>
//         <Text
//           style={{
//             fontSize: 15,
//             textAlign: "center",
//             color: "grey",
//           }}
//         >
//           2022
//         </Text>
//       </View>
//       <View style={{ marginRight: 20 }}>
//         <Image
//           source={require("../../assets/images/feature2.png")}
//           style={{ width: 150 }}
//         />
//         <Text
//           style={{ color: "white", textAlign: "center", marginTop: 10 }}
//         >
//           Secret Wars
//         </Text>
//         <Text
//           style={{
//             fontSize: 15,
//             textAlign: "center",
//             color: "grey",
//           }}
//         >
//           2022
//         </Text>
//       </View>
//       <View>
//         <Image source={require("../../assets/images/feature1.png")} />
//         <Text
//           style={{ color: "white", textAlign: "center", marginTop: 10 }}
//         >
//           Secret Wars
//         </Text>
//         <Text
//           style={{
//             fontSize: 15,
//             textAlign: "center",
//             color: "grey",
//           }}
//         >
//           2022
//         </Text>
//       </View>
//     </View>
//   </View>
// </View>

// <View
//   style={{
//     height: 20,
//     width: 20,
//     marginHorizontal: 20,
//     elevation: 75,
//     shadowColor: "#19A1BE",
//     shadowRadius: 100,
//     shadowOpacity: 10,
//     shadowOffset: { width: 500, height: 500 },
//     position: "relative",
//     bottom: 55,
//     left: 1,
//     backgroundColor: "hsla(0, 100%, 90%, 0)",
//   }}
// ></View>
// <View
//   style={{
//     height: 20,
//     width: 50,
//     marginHorizontal: 20,
//     elevation: 75,
//     shadowColor: "purple",
//     shadowRadius: 100,
//     shadowOpacity: 20,
//     shadowOffset: { width: 500, height: 500 },
//     position: "relative",
//     bottom: 100,
//     left: 30,
//     backgroundColor: "hsla(0, 100%, 90%, 0)",
//   }}
// ></View>
// </View>
