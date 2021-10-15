import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import { EditTasksScreen } from "../../../screens/app/tasks/screens/EditTasks";
import { NewTasksScreen } from "../../../screens/app/tasks/screens/NewTasks";
import { generateLinkingConfig } from "../../../utils/navigation";

export type TasksGroupParams = {
  NewTask: undefined;
  EditTask: {
    id: string;
  };
};

export const linkingConfig = generateLinkingConfig<TasksGroupParams>({
  baseUrl: "tasks",
  paths: {
    NewTask: "create",
    EditTask: "edit/:id",
  },
});

const Stack = createNativeStackNavigator<TasksGroupParams>();

export function TasksGroup() {
  return (
    <Stack.Group>
      <Stack.Screen name="NewTask" component={NewTasksScreen} />
      <Stack.Screen name="EditTask" component={EditTasksScreen} />
    </Stack.Group>
  );
}
