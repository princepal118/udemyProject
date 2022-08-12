import {StyleSheet, Button, TextInput, View} from 'react-native';
import React, {useState} from 'react';

const GoalInput = props => {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const goalInputHandler = enteredText => {
    setEnteredGoalText(enteredText);
  };

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        value={enteredGoalText}
        placeholder="Your Course Goal"
        style={styles.inputText}
        onChangeText={goalInputHandler}
      />
      <Button title="Add Goals" onPress={addGoalHandler} />
    </View>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  inputText: {
    borderWidth: 2,
    borderColor: '#cccccc',
    width: '75%',
    marginRight: 10,
    padding: 8,
  },
});
