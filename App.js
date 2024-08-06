import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import OnboardingScreen from './screens/OnboardingScreen';
import { useState, useEffect } from 'react';
import { getItem } from './utilis/asyncStorage';

const Stack = createNativeStackNavigator();

export default function App() {

  const [showOnboarding, setShowOnBoarding] = useState(null)

  useEffect(() => {
    checkIfAlreadyOnboarding()
  }, [])

  const checkIfAlreadyOnboarding = async () => {
    let onboarded = getItem('onboarded')
    if(onboarded == 1 ){
      setShowOnBoarding(false)
    } else {
      setShowOnBoarding(true)
    }
  }

  if(showOnboarding){
    return (
      <NavigationContainer >
        <Stack.Navigator initialRouteName='Onboarding' screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Onboarding" component={OnboardingScreen}/>
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  } else {
    return (
      <NavigationContainer >
        <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Onboarding" component={OnboardingScreen}/>
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }

}
