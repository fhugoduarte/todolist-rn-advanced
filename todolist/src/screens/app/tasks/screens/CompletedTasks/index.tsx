import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Button, Text, View } from "react-native";
import { TasksTopTabParams } from "../../../../../routes/app/tasks/index.top";

type Props = NativeStackScreenProps<TasksTopTabParams, "CompletedTasks">;

export function CompletedTasksScreen({ navigation }: Props) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 20, color: "black", fontWeight: "bold" }}>
        CompletedTasks Screen
      </Text>

      <Button
        title="NEW TASK"
        onPress={() => navigation.navigate("EditTask", { id: "id-task" })}
      />
    </View>
  );
}
