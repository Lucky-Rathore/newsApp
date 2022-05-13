import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LanguageScreen from './app/screen/LanguageScreen'
import HomeScreen from './app/screen/HomeScreen'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="LanguageScreen" component={LanguageScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default App;