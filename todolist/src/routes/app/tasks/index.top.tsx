import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';

import { generateLinkingConfig } from '~/utils/navigation';

import { colors } from '~/constants/colors';
import { CompletedTasksScreen } from '~/screens/app/tasks/CompletedTasks';
import { PendingTasksScreen } from '~/screens/app/tasks/PendingTasks';

import type { TasksGroupParams } from './tasks.group';

export type TasksTopParams = TasksGroupParams & {
  PendingTasks: undefined;
  CompletedTasks: undefined;
};

export const linkingConfig = generateLinkingConfig<TasksTopParams>({
  paths: {
    PendingTasks: 'pending',
    CompletedTasks: 'completed',
  },
});

const TopTab = createMaterialTopTabNavigator<TasksTopParams>();

export function TasksTopTab() {
  return (
    <TopTab.Navigator
      screenOptions={{
        tabBarInactiveTintColor: colors.supportText,
        tabBarActiveTintColor: colors.primary,
        tabBarIndicatorStyle: {
          backgroundColor: colors.primary,
        },
        tabBarLabelStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <TopTab.Screen
        name="PendingTasks"
        component={PendingTasksScreen}
        options={{
          tabBarLabel: 'Pendentes',
        }}
      />
      <TopTab.Screen
        name="CompletedTasks"
        component={CompletedTasksScreen}
        options={{
          tabBarLabel: 'Completas',
        }}
      />
    </TopTab.Navigator>
  );
}
