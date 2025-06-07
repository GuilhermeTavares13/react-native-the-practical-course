import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [goal, setGoal] = useState('');
  const [goals, setGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setGoal(enteredText);
  };

  function addGoalHandler() {
    setGoals([...goals, goal])
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer} >
        <TextInput style={styles.textInput}  placeholder='Your course goal!' onChangeText={goalInputHandler}></TextInput>
        <Button title='Add goal' onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        {goals.map((goalItem, index) => (
          <Text>{goalItem}</Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '80%',
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 5
  }
});
