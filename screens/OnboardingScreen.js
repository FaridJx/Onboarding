import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Onboarding from "react-native-onboarding-swiper";
import LottieView from "lottie-react-native";

export default function OnboardingScreen({navigation}) {

    const handleDone = () => {
        navigation.navigate('Home')
    }

    const doneButton = () => {        
        return <TouchableOpacity style={styles.buttonDone} onPress={handleDone}>
            <Text>Done</Text>
        </TouchableOpacity>
    }

  return (
    <View style={styles.container}>
      <Onboarding
        DoneButtonComponent={doneButton}
        onSkip={handleDone}
        pages={[
          {
            backgroundColor: "white",
            image: (
                <LottieView
                autoPlay
                loop
                style={styles.lottie}
                source={require("../assets/animations/Animation - 1722854872576.json")}
              />
            ),
            title: "Développement web",
            subtitle: "Pour coder pas de secret, il vous faut un ordinateur.",
          },
          {
            backgroundColor: "#fffd81",
            image: (
              <LottieView
                autoPlay
                loop
                style={styles.lottie}
                source={require("../assets/animations/Animation - 1722855349039.json")}
              />
            ),
            title: "Détente",
            subtitle: "Il faut rester concentrer mais il ne faut pas oublier de rester zen et détendu.",
          },
          {
            backgroundColor: "#afffd2",
            image: (
                <LottieView
                autoPlay
                loop
                style={styles.lottie}
                source={require("../assets/animations/ConversationAnim.json")}
              />
            ),
            title: "Partager",
            subtitle: "Etre développeur c'est aussi partager avec d'autre collègue pour apprendre et aider.",
          },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  lottie: {
    width: 400,
    height: 300,
  },
  buttonDone:{
    paddingRight: 20
  }
});
