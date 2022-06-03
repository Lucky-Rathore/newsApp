import * as React from 'react';
import { Button, View, Text, Linking } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './app/screen/HomeScreen';

function Feedback() {
  return (
    <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start', margin: 20 }}>
      <Text style={{ fontSize: 20, margin: 20 }}>We love to suggestion from you, please feel free to write us at:</Text>
      <View style={{ margin: 20, alignSelf: 'center' }}>
        <Button style={{}} onPress={() => Linking.openURL('mailto:thisislucky03@gmail.com?subject=Feeback')} title='Share Feedback!' />
      </View>
    </View>
  );
}

function tnc() {
  return (
    <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start', margin: 20 }}>
      <View style={{ margin: 20, alignSelf: 'center' }}>
        <Button style={{}} onPress={() => Linking.openURL('https://newsappp.github.io/tnc')} title='Privacy Policy' />
      </View>
    </View>
  );
}

function PrivacyPolicy() {
  return (
    <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start', margin: 20 }}>
      <View style={{ margin: 20, alignSelf: 'center' }}>
        <Button style={{}} onPress={() => Linking.openURL('https://newsappp.github.io/privacy')} title='Privacy Policy' />
      </View>
    </View>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator useLegacyImplementation>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Terms & Condition" component={tnc} />
      <Drawer.Screen name="Privacy Policy" component={PrivacyPolicy} />
      <Drawer.Screen name='Feedback' component={Feedback} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}