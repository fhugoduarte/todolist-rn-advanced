import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import { PendingTasksScreen } from "../../../screens/app/tasks/screens/PendingTasks";
import { CompletedTasksScreen } from "../../../screens/app/tasks/screens/CompletedTasks";
import type { TasksGroupParams } from "./tasks.group";
import { generateLinkingConfig } from "../../../utils/navigation";

export type TasksTopTabParams = TasksGroupParams & {
  CompletedTasks: undefined;
  PendingTasks: undefined;
};

const TopTab = createMaterialTopTabNavigator<TasksTopTabParams>();

export const linkingConfig = generateLinkingConfig<TasksTopTabParams>({
  paths: {
    CompletedTasks: "completed",
    PendingTasks: "pending",
  },
});

export function TasksTopTab() {
  return (
    <TopTab.Navigator>
      <TopTab.Screen
        name="PendingTasks"
        component={PendingTasksScreen}
        options={{
          tabBarLabel: "Pendentes",
        }}
      />

      <TopTab.Screen
        name="CompletedTasks"
        component={CompletedTasksScreen}
        options={{
          tabBarLabel: "Completas",
        }}
      />
    </TopTab.Navigator>
  );
}
