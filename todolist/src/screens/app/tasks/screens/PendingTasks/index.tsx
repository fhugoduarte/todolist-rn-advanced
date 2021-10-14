import React from "react";
import { Text, View } from "react-native";

export function PendingTasksScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 20, color: "black", fontWeight: "bold" }}>
        PendingTasks Screen
      </Text>
    </View>
  );
}
