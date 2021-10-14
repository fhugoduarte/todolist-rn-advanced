import React from "react";
import { Text, View } from "react-native";

export function CompletedTasksScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 20, color: "black", fontWeight: "bold" }}>
        CompletedTasks Screen
      </Text>
    </View>
  );
}
