import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style='light'/>
      <NavigationContainer>
        <CategoriesScreen />
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
});
