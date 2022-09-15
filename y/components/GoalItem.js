import { Text, View, StyleSheet, Pressable } from "react-native";

const GoalItem = ({ data, deleteGoalHandler, id }) => {
  return (
    <View style={styles.goalItem}>
      <Pressable android_ripple={{color: "#210644"}} onPress={deleteGoalHandler.bind(this, id)} style={({pressed}) => pressed && styles.pressedItem}>
        <Text style={styles.goalText}>{data.item.text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    color: "white",
    padding: 8,
  },
});
