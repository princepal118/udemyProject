import React, {useState} from 'react';

import {
  View,
  // Text,
  // TextInput,
  StyleSheet,
  // Button,
  FlatList,
} from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

const App = () => {
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = enteredGoalText => {
    setCourseGoals(currentCoursesGoals => [
      ...currentCoursesGoals,
      {text: enteredGoalText, key: Math.random().toString()},
    ]);
  };

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
          style={styles.flatList}
          data={courseGoals}
          alwaysBounceVertical={true}
          renderItem={itemData => {
            return <GoalItem text={itemData.item.text} />;
          }}
          keyExtractor={item => {
            return item.key;
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 10,
  },

  goalsContainer: {
    flex: 4,
  },
});
export default App;
