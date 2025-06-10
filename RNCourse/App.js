import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [enteredGoalText, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoal(enteredText);
  };

  function addGoalHandler() {
    setCourseGoals((currentCourseGoals) => [...currentCourseGoals, enteredGoalText])
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer} >
        <TextInput style={styles.textInput}  placeholder='Your course goal!' onChangeText={goalInputHandler}></TextInput>
        <Button title='Add goal' onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        {courseGoals.map((goalItem) => (
          <Text key={goalItem}>{goalItem}</Text>
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
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
    color: 'white'
  }
});
