import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import LottieView from "lottie-react-native";
import React, { useRef } from "react";

export default function HomeScreen() {
  const ref = useRef();

  return (
    <View style={styles.container}>
      <LottieView
        loop={false}
        autoPlay
        style={styles.lottie}
        source={require("../assets/animations/ValidationAnim.json")}
      />
      <TouchableOpacity style={styles.resetButton}>
        <Text>HomeScreen</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  lottie: {
    width: 300,
    height: 250,
  },
  resetButton: {
    backgroundColor: "#51fb9c",
    padding: 10,
    borderRadius: 20,
  },
});
