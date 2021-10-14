import React from "react";
import { Text, View } from "react-native";

export function NewTasksScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 20, color: "black", fontWeight: "bold" }}>
        NewTasks Screen
      </Text>
    </View>
  );
}
